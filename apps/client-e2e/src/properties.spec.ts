import { test, expect, Page, Route } from '@playwright/test';

const mockList = {
  total: 2,
  items: [
    {
      id: '1',
      name: 'Casa Familiar en Medellín',
      address: 'Calle 45 #12-34, Medellín',
      price: 350000000,
      codeInternal: 'A-001',
      year: 2018,
      owner: { idOwner: 'owner-1', name: 'Carlos Gómez', address: 'Carrera 10 #20-30', photo: '', birthday: '' },
      images: [],
      traces: [],
    },
    {
      id: '2',
      name: 'Apartamento en Bogotá',
      address: 'Av. Suba #100-45, Bogotá',
      price: 520000000,
      codeInternal: 'A-002',
      year: 2021,
      owner: { idOwner: 'owner-2', name: 'Laura Rojas', address: 'Calle 90 #15-20', photo: '', birthday: '' },
      images: [],
      traces: [],
    },
  ],
};

const mockFiltered = {
  total: 1,
  items: [
    {
      id: '2',
      name: 'Apartamento en Bogotá',
      address: 'Av. Suba #100-45, Bogotá',
      price: 520000000,
      codeInternal: 'A-002',
      year: 2021,
      owner: { idOwner: 'owner-2', name: 'Laura Rojas', address: 'Calle 90 #15-20', photo: '', birthday: '' },
      images: [],
      traces: [],
    },
  ],
};

const mockDetail = mockFiltered.items[0];

// Helper to mock the backend calls used by the page (uppercase path as used by the app)
async function mockApiRoutes(page: Page) {
  await page.route(/\/api\/Properties(\?.*)?$/, async (route: Route) => {
    const url = new URL(route.request().url());
    const name = url.searchParams.get('name') || '';
    if (name && /bogotá/i.test(name)) {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockFiltered) });
    } else {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockList) });
    }
  });

  await page.route(/\/api\/Properties\/(\w+)$/, async (route: Route) => {
    const id = route.request().url().split('/').pop();
    if (id === mockDetail.id) {
      await route.fulfill({ status: 200, contentType: 'application/json', body: JSON.stringify(mockDetail) });
    } else {
      await route.fulfill({ status: 404, contentType: 'application/json', body: JSON.stringify({ error: 'Not found' }) });
    }
  });
}

 test.describe('Properties page', () => {
  test.beforeEach(async ({ page }) => {
    await mockApiRoutes(page);
  });

  test('renders list and summary', async ({ page }) => {
    await page.goto('/properties');

    // Heading from i18n (es locale by default)
    await expect(page.getByRole('heading', { level: 1, name: /Propiedades disponibles/i })).toBeVisible();

  
    // Two property cards rendered (card title is h3 with the property name)
    await expect(page.getByRole('heading', { level: 3, name: 'Casa Familiar en Medellín' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Apartamento en Bogotá' })).toBeVisible();
  });

  test('filters by name', async ({ page }) => {
    await page.goto('/properties');

    const nameInput = page.getByLabel('Nombre');
    await nameInput.fill('bogotá');
    await page.getByRole('button', { name: /Buscar/i }).click();

    // Summary updated to 1 of 1
    await expect(page.getByText(/Mostrando 1 de 1 propiedades/)).toBeVisible();

    // Only the filtered item remains
    await expect(page.getByRole('heading', { level: 3, name: 'Apartamento en Bogotá' })).toBeVisible();
    await expect(page.getByRole('heading', { level: 3, name: 'Casa Familiar en Medellín' })).toHaveCount(0);
  });

  test('navigates to detail page', async ({ page }) => {
    await page.goto('/properties');

    // Click the second card link (Apartamento en Bogotá)
    await page.getByRole('link', { name: /Apartamento en Bogotá/i }).click();

    // On detail page, the h1 should show the property name
    await expect(page.getByRole('heading', { level: 1, name: /Apartamento en Bogotá/i })).toBeVisible();
  });
});

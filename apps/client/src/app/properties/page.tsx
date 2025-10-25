import { Suspense } from 'react';
import * as styles from './styles.css';
import { PropertyList } from '@/components/PropertyList/PropertyList';
import { Filters } from '@/components/Filters/Filters';
import { PropertiesProvider } from '@/context/PropertiesContext';
import type { Property } from '@/types/property';
import { t } from '@/i18n';

async function getProperties(): Promise<Property[]> {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/properties`, {
    cache: 'no-store',
  });

  if (!res.ok) throw new Error('Error al obtener las propiedades');
  return res.json();
}

export default async function PropertiesPage() {
  const properties = await getProperties();

  return (
    <PropertiesProvider initialData={properties}>
      <section className={styles.container}>
        <h1 className={styles.title}>{t('properties.title')}</h1>

        <Suspense fallback={<p>{t('properties.loadingFilters')}</p>}>
          <Filters />
        </Suspense>

        <Suspense fallback={<p>{t('properties.loadingProperties')}</p>}>
          <PropertyList />
        </Suspense>
      </section>
    </PropertiesProvider>
  );
}

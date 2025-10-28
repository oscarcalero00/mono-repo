import { Filters, Property } from "@/types/property";

export async function fetchProperties({
  path = 'api/Properties',
  filters = {},
  page = 1,
  pageSize = 5,
}: {
  path?: string;
  filters?: Filters;
  page?: number;
  pageSize?: number;
}): Promise<{ total: number; items: Property[] }> {
  const params = new URLSearchParams();

  Object.entries(filters || {}).forEach(([k, v]) => {
    if (v !== undefined && v !== null && String(v).length > 0) params.append(k, String(v));
  });

  params.append('pageNumber', String(page));
  params.append('pageSize', String(pageSize));

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ''}/${path}?${params.toString()}`,
    {
      cache: 'no-store',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    }
  );

  if (!res.ok) throw new Error(`Error fetching properties: ${res.status}`);
  return res.json(); // { total, items }
}


export async function fetchProperty({
  path = 'api/Properties',
  id,
}: {
  path?: string;
  id: string;
}): Promise<Property> {

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL || ''}/${path}/${id}`,
    {
      cache: 'no-store',
      headers: {
        'x-api-key': process.env.NEXT_PUBLIC_API_KEY || '',
      },
    }
  );

  if (!res.ok) throw new Error(`Error fetching properties: ${res.status}`);
  return res.json(); // { total, items }
}
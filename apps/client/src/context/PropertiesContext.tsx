'use client';
import { createContext, useContext, useState, ReactNode } from 'react';
import type { Property, Filters } from '@/types/property';

interface PropertiesContextType {
  properties: Property[];
  loading: boolean;
  filters: Filters;
  setFilters: (filters: Filters) => void;
  reload: () => Promise<void>;
}

const PropertiesContext = createContext<PropertiesContextType | undefined>(
  undefined
);

export function PropertiesProvider({
  children,
  initialData,
}: {
  children: ReactNode;
  initialData: Property[];
}) {
  const [properties, setProperties] = useState<Property[]>(initialData);
  const [loading, setLoading] = useState(false);
  const [filters, setFilters] = useState<Filters>({});

  const reload = async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();

      if (filters.name) params.append('name', filters.name);
      if (filters.address) params.append('address', filters.address);
      if (filters.minPrice) params.append('minPrice', String(filters.minPrice));
      if (filters.maxPrice) params.append('maxPrice', String(filters.maxPrice));

      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/properties?${params.toString()}`,
        { cache: 'no-store' }
      );
      const data = await res.json();
      setProperties(data);
    } catch (error) {
      console.error('Error reloading properties:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PropertiesContext.Provider
      value={{ properties, loading, filters, setFilters, reload }}
    >
      {children}
    </PropertiesContext.Provider>
  );
}

export function usePropertiesContext() {
  const ctx = useContext(PropertiesContext);
  if (!ctx) throw new Error('usePropertiesContext must be inside PropertiesProvider');
  return ctx;
}

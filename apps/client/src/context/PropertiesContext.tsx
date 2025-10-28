'use client';

import { createContext, useContext, useState, ReactNode } from 'react';
import type { Property, Filters } from '@/types/property';
import { fetchProperties } from '@/lib/fetchProperties';

interface PropertiesContextType {
  properties: Property[];
  total: number;
  loading: boolean;
  filters: Filters;
  page: number;
  pageSize: number;
  hasMore: boolean;
  setFilters: (filters: Filters) => void;
  reload: (customFilters?: Filters) => Promise<void>;
  loadMore: () => Promise<void>;
  reset: () => void;
  setLoading: (loading: boolean) => void;
  setProperties: (properties: Property[]) => void;
}

const PropertiesContext = createContext<PropertiesContextType | undefined>(undefined);

export function PropertiesProvider({
  children,
  initialData = { total: 0, items: [] },
}: {
  children: ReactNode;
  initialData?: { total: number; items: Property[] };
}) {
  const [properties, setProperties] = useState<Property[]>(initialData.items || []);
  const [total, setTotal] = useState<number>(initialData.total || 0);
  const [loading, setLoading] = useState<boolean>(false);
  const [filters, setFilters] = useState<Filters>({});
  const [page, setPage] = useState<number>(1);
  const pageSize = 5;

  // reload: reemplaza lista (page = 1)
  const reload = async (customFilters?: Filters) => {
    setLoading(true);
    try {
      const activeFilters = customFilters ?? filters;
      const data = await fetchProperties({
        path: 'api/Properties',
        filters: activeFilters,
        page: 1,
        pageSize,
      });

      const items = data.items ?? data;
      const tot = typeof data.total === 'number' ? data.total : items.length;

      setProperties(items);
      setTotal(tot);
      setPage(1);
    } catch (err) {
      console.error('Error reloading properties:', err);
    } finally {
      setLoading(false);
    }
  };

  // loadMore: obtiene siguiente página y concatena
  const loadMore = async () => {
    if (loading) return;
    if (properties.length >= total) return; // no hay más

    setLoading(true);
    try {
      const nextPage = page + 1;
      const data = await fetchProperties({
        path: 'api/Properties',
        filters,
        page: nextPage,
        pageSize,
      });

      const items = data.items ?? [];
      const tot = typeof data.total === 'number' ? data.total : total;

      setProperties((prev) => [...prev, ...items]);
      setTotal(tot);
      setPage(nextPage);
    } catch (err) {
      console.error('Error loading more properties:', err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setProperties([]);
    setTotal(0);
    setPage(1);
    setFilters({});
  };

  const hasMore = properties.length < total;

  return (
    <PropertiesContext.Provider
      value={{
        properties,
        total,
        loading,
        filters,
        page,
        pageSize,
        hasMore,
        setFilters,
        reload,
        loadMore,
        reset,
        setLoading,
        setProperties,
      }}
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

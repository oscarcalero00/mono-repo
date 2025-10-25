import { useCallback } from 'react';
import { usePropertiesContext } from '@/context/PropertiesContext';
import type { Filters } from '@/types/property';

export function useProperties() {
  const { properties, filters, setFilters, reload, loading } =
    usePropertiesContext();

  const applyFilters = useCallback(
    (newFilters: Filters) => {
      setFilters(newFilters);
      reload();
    },
    [setFilters, reload]
  );

  return {
    properties,
    filters,
    applyFilters,
    reload,
    loading,
  };
}

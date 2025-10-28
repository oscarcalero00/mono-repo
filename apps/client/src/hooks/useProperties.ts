import { useCallback } from 'react';
import { usePropertiesContext } from '@/context/PropertiesContext';
import type { Filters } from '@/types/property';

export function useProperties() {
  const {
    properties,
    filters,
    setFilters,
    reload,
    loadMore,
    total,
    loading,
    hasMore,
  } = usePropertiesContext();

  const applyFilters = useCallback(
    async (newFilters: Filters) => {
      setFilters(newFilters);
      await reload(newFilters);
    },
    [setFilters, reload]
  );

  return {
    properties,
    filters,
    applyFilters,
    reload,
    loadMore,
    total,
    loading,
    hasMore,
  };
}

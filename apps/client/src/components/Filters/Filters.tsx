'use client';
import { useState } from 'react';
import { useProperties } from '@/hooks/useProperties';
import type { Filters as FiltersType } from '@/types/property';
import { t } from '@/i18n';
import * as styles from './Filters.css';

export function Filters() {
  const { applyFilters, loading } = useProperties();
  const [localFilters, setLocalFilters] = useState<FiltersType>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLocalFilters((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    applyFilters(localFilters);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <div className={styles.field}>
        <label htmlFor="name" className={styles.label}>
          {t('properties.filters.name')}
        </label>
        <input
          id="name"
          name="name"
          className={styles.input}
          placeholder={t('properties.filters.name')}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="address" className={styles.label}>
          {t('properties.filters.address')}
        </label>
        <input
          id="address"
          name="address"
          className={styles.input}
          placeholder={t('properties.filters.address')}
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="minPrice" className={styles.label}>
          {t('properties.filters.minPrice')}
        </label>
        <input
          id="minPrice"
          name="minPrice"
          type="number"
          className={styles.input}
          placeholder="0"
          onChange={handleChange}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="maxPrice" className={styles.label}>
          {t('properties.filters.maxPrice')}
        </label>
        <input
          id="maxPrice"
          name="maxPrice"
          type="number"
          className={styles.input}
          placeholder="1000000"
          onChange={handleChange}
        />
      </div>

      <button type="submit" className={styles.button} disabled={loading}>
        {loading ? t('properties.filters.loading') : t('properties.filters.search')}
      </button>
    </form>
  );
}

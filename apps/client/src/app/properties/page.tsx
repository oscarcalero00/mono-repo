import { Suspense } from 'react';
import * as styles from './styles.css';
import { PropertyList } from '@/components/PropertyList/PropertyList';
import { Filters } from '@/components/Filters/Filters';
import { PropertiesProvider } from '@/context/PropertiesContext';
import type { Property } from '@/types/property';
import { t } from '@/i18n';
import { fetchProperties } from '@/lib/fetchProperties';

async function getProperties(): Promise<{ total: number; items: Property[] }> {
  return fetchProperties({ path: 'api/Properties', page: 1, pageSize: 5 });
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

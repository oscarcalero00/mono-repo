'use client';

import { useEffect } from 'react';
import { useProperties } from '@/hooks/useProperties';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import * as styles from './PropertyList.css';

export function PropertyList() {
  const {
    properties,
    loading,
    total,
    hasMore,
    loadMore,
    reload,
  } = useProperties();

  // Carga inicial de propiedades (solo 1 vez)
  useEffect(() => {
    if (!properties.length) {
      reload();
    }
  }, [properties.length, reload]);

  if (loading && properties.length === 0) {
    return <p>Cargando propiedades...</p>;
  }

  if (!loading && properties.length === 0) {
    return <p>No hay propiedades.</p>;
  }
  console.log('Rendering PropertyList with properties:', properties);

  return (
    <div className={styles.container}>
      <p className={styles.summary}>
        Mostrando {properties.length} de {total} propiedades
      </p>

      <ul className={styles.list}>
        {properties.map((property, index) => (
          <li key={`${property.codeInternal}-${index}`} className={styles.item}>
            <PropertyCard property={{ ...property, id: property.codeInternal }} />
          </li>
        ))}
      </ul>

      {hasMore && (
        <div className={styles.loadMore}>
          <button
            onClick={loadMore}
            disabled={loading}
            className={styles.button}
          >
            {loading ? 'Cargando...' : 'Cargar más'}
          </button>
        </div>
      )}
    </div>
  );
}

'use client';
import { useProperties } from '@/hooks/useProperties';
import { PropertyCard } from '../PropertyCard/PropertyCard';
import * as styles from './PropertyList.css';

export function PropertyList() {
  const { properties, loading } = useProperties();

  if (loading) return <p>Cargando propiedades...</p>;
  if (!properties.length) return <p>No hay propiedades.</p>;

  return (
    <ul className={styles.list}>
      {properties.map((property) => (
        <li key={property._id} className={styles.item}>
          <PropertyCard property={{ ...property, id: property._id }} />
        </li>
      ))}
    </ul>
  );
}

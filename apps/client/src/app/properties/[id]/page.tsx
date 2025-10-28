import { notFound } from 'next/navigation';
import Image from 'next/image';
import * as styles from './styles.css';
import { fetchProperty } from '@/lib/fetchProperties';
import { Property } from '@/types/property';


async function getProperty(id: string): Promise<Property | null> {
  return fetchProperty({ id });
}

export default async function PropertyDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const property = await getProperty(id);

  if (!property) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{property.name}</h1>
      <p className={styles.address}>{property.address}</p>
      <p className={styles.price}>${property.price.toLocaleString()}</p>

      <section className={styles.section}>
        <h2>Información general</h2>
        <p>
          <strong>Código interno:</strong> {property.codeInternal}
        </p>
        <p>
          <strong>Año:</strong> {property.year}
        </p>
      </section>

      <section className={styles.section}>
        <div className={styles.owner}>
          <Image
            src={property.owner.photo}
            alt={property.owner.name}
            className={styles.ownerPhoto}
            width={100}
            height={100}
          />
          <div>
            <p>
              <strong>{property.owner.name}</strong>
            </p>
            <p>{property.owner.address}</p>
          </div>
        </div>
      </section>

      {property.images?.length > 0 && (
        <section className={styles.section}>
          <h2>Imágenes</h2>
          <div className={styles.gallery}>
            {property.images.map((img: any, index: number) => (
              <Image
                key={index}
                src={`${img.file}`}
                alt={property.name}
                className={styles.image}
                width={400}
                height={300}
              />
            ))}
          </div>
        </section>
      )}

      {property.traces?.length > 0 && (
        <section className={styles.section}>
          <h2>Historial de ventas</h2>
          <ul>
            {property.traces.map((t: any, index: number) => (
              <li key={index}>
                <strong>{t.name}</strong> — {t.dateSale} — $
                {t.value.toLocaleString()}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

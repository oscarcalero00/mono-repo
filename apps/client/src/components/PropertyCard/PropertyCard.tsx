import Link from "next/link";
import * as styles from "./PropertyCard.css";

interface Property {
  id: string;
  name: string;
  address: string;
  price: number;
}

export function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`} className={styles.card}>
      <div>
        <h3 className={styles.title}>{property.name}</h3>
        <p className={styles.address}>{property.address}</p>
        <p className={styles.price}>${property.price.toLocaleString()}</p>
      </div>
    </Link>
  );
}

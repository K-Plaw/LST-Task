// src/components/ProductCard/ProductCard.tsx
import type { Product } from '../../../features/products/productTypes';
import styles from './ProductCard.module.css';

type Props = {
  product: Product;
};

const ProductCard = ({ product }: Props) => {
  return (
    <div className={styles.card}>
      <img src={product.images[0]} alt={product.title} />
      <h3>{product.title}</h3>
      <p>English Department</p>
      <div className={styles.priceRow}>
        <span className={styles.oldPrice}>${product.price.toFixed(2)}</span>
        <span className={styles.newPrice}>
          ${(product.price * (1 - product.discountPercentage / 100)).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default ProductCard;

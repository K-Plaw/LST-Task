// src/components/BestSellerProducts/BestSellerProducts.tsx
import { useState } from 'react';
import { useGetProductsQuery } from '../../features/products/productsApi';
import ProductCard from './ProductCard/ProductCard';
import styles from './BestSellerProducts.module.css';

const BestSellerProducts = () => {
  const [skip, setSkip] = useState(0);
  const limit = 10;

  const { data, isLoading, isError, isFetching } = useGetProductsQuery({ limit, skip });

  const loadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
      <section className={styles.wrapper}>
        <h4>Featured Products</h4>
        <h2>BESTSELLER PRODUCTS</h2>
        <p>Problems trying to resolve the conflict between</p>

        {isLoading ? (
            <p>Loading...</p>
        ) : isError ? (
            <p>Something went wrong. Please reload and try again.</p>
        ) : (
            <>
            <div className={styles.grid}>
                {data?.products.map((product) => (
                <ProductCard key={product.id} product={product} />
                ))}
            </div>
            <br /> <br />
            {data && data.total > skip + limit && (
                <button className={styles.loadMore} onClick={loadMore} disabled={isFetching}>
                {isFetching ? 'Loading...' : 'LOAD MORE PRODUCTS'}
                </button>
            )}
            </>
        )}
        </section>
  );
};

export default BestSellerProducts;

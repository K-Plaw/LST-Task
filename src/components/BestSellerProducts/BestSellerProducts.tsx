import { useEffect, useState } from 'react';
import { useGetProductsQuery } from '../../features/products/productsApi';
import ProductCard from './ProductCard/ProductCard';
import Loader from '../Loader/Loader';
import styles from './BestSellerProducts.module.css';

const BestSellerProducts = () => {
  const [skip, setSkip] = useState(0);
  const [limit, setLimit] = useState(window.innerWidth <= 768 ? 5 : 10);

  // Update limit when screen resizes
  useEffect(() => {
    const handleResize = () => {
      setLimit(window.innerWidth <= 768 ? 5 : 10);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const { data, isLoading, isError, isFetching, refetch } = useGetProductsQuery({ limit, skip });

  const loadMore = () => {
    setSkip((prev) => prev + limit);
  };

  return (
    <section className={styles.wrapper}>
      <h4>Featured Products</h4>
      <h2>BESTSELLER PRODUCTS</h2>
      <p>Problems trying to resolve the conflict between</p>

      {isLoading ? (
        <Loader />
      ) : isError ? (
        <div className={styles.errorBox}>
            <p>Something went wrong. Please reload and try again.</p>
            <button onClick={() => refetch()} className={styles.retryBtn}>
            Reload Products
            </button>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            {data?.products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

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

import { useEffect, useRef, useState } from 'react';

import { getProducts } from '../../../services/productService';
import type { Product } from '../../../types/Product';

import styles from './Products.module.css';

import Loading from '../../../components/Loading/Loading';
import ErrorMessage from '../../../components/ErrorMessage/ErrorMessage';



function Products() {

    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const sectionRef = useRef<HTMLDivElement | null>(null);


    useEffect(() => {
        async function fetchProducts() {
            try {
                const data = await getProducts();

                setProducts(data)
            } catch (err) {
                console.error(err)
                setError('خطا در دریافت محصولات.')
            } finally {
                setLoading(false)
            }
        }

        fetchProducts()

    }, [])



    useEffect(() => {
        const section = sectionRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (!entry.isIntersecting) {
                        return;
                    }

                    const cards = section.querySelectorAll<HTMLElement>(
                        '[data-product-card]'
                    );

                    cards.forEach((card) => {
                        card.classList.add('is-visible');
                    });

                    observer.disconnect();
                });
            },
            {
                threshold: 0.15,
            }
        );

        observer.observe(section);

        return () => {
            observer.disconnect();
        };
    }, [products]);



    if (loading) {
        return <Loading />;
    }


    if (error) {
        return (
            <ErrorMessage
                message={error}
            />
        );
    }


    if (products.length === 0) {
        return (
            <section>
                <div className="container">
                    <h2>محصولات</h2>
                    <p>در حال حاضر محصولی برای نمایش وجود ندارد.</p>
                </div>
            </section>
        );
    }


    return (
        <section className={styles.products}>
            <div className="container">
                <div className={styles.sectionHeader}>
                    <div className={styles.headerContent}>
                        <span className={styles.sectionEyebrow}>
                            محصولات ریواکس
                        </span>

                        <h2 className={styles.sectionTitle}>
                            نمونه محصولات

                        </h2>

                        <p className={styles.sectionDescription}>
                            مجموعه‌ای از روغن‌ها و گریس‌های صنعتی ریواکس،
                            با تمرکز بر کیفیت، عملکرد و نیازهای متنوع صنایع.
                        </p>
                    </div>
                </div>

                <div className={styles.productGrid} ref={sectionRef}>
                    {products.map((product, index) => (
                        <article
                            key={product.id}
                            data-product-card
                            className={`${styles.productCard} 
                            ${index % 2 === 0 ? styles.fromRight : styles.fromLeft}`}
                        >
                            <div className={styles.productImageWrapper}>
                                {product.image && (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className={styles.productImage}
                                    />
                                )}

                                <div className={styles.productOverlay} />
                            </div>

                            <div className={styles.productContent}>
                                <span className={styles.productNumber}>
                                    {String(index + 1).padStart(2, '0')}
                                </span>

                                <h3 className={styles.productName}>
                                    {product.name}
                                </h3>

                                {product.short_description && (
                                    <p className={styles.productDescription}>
                                        {product.short_description}
                                    </p>
                                )}
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products
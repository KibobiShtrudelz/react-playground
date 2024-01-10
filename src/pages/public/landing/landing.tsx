import { Card, Carousel } from '@components'

import styles from './landing.module.scss'

export function Landing() {
  const productTemplate = product => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img
            src={`https://primefaces.org/cdn/primereact/images/product/${product.image}`}
            alt={product.name}
            className="w-6 shadow-2"
          />
        </div>
        <div>
          <h4 className="mb-1">{product.name}</h4>
          <h6 className="mt-0 mb-3">${product.price}</h6>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.landing}>
      <section className={styles.carouselSection}>
        <Carousel value={[]} numVisible={3} numScroll={3} itemTemplate={productTemplate} />
      </section>

      <section className={styles.cardsSection}>
        {Array.from({ length: 30 }).map((trainingClass, idx) => (
          <Card key={idx} />
        ))}
      </section>
    </div>
  )
}

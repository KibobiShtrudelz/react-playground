import { Card, Carousel } from '@components'

import styles from './landing.module.scss'

import carouselImg from '../../../assets/images/2K/0c90bad244dd974d800ded176d29fcfc.jpg'

export function Landing() {
  const productTemplate = product => {
    return (
      <div className="border-1 surface-border border-round m-2 text-center py-5 px-3">
        <div className="mb-3">
          <img src={product.img} alt={product.name} className="w-6 shadow-2" />
        </div>

        <div>
          <h4 className="mb-1">{product.name}</h4>w<h6 className="mt-0 mb-3">${product.price}</h6>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.landing}>
      <section className={styles.carouselSection}>
        <Carousel
          value={[
            {
              img: carouselImg,
              name: '1',
              price: 999
            },

            {
              img: carouselImg,
              name: '2',
              price: 999
            },

            {
              img: carouselImg,
              name: '3',
              price: 999
            },

            {
              img: carouselImg,
              name: '4',
              price: 999
            },
            { img: carouselImg, name: '5', price: 999 }
          ]}
          numVisible={3}
          numScroll={3}
          itemTemplate={productTemplate}
        />
      </section>

      <section className={styles.cardsSection}>
        {Array.from({ length: 30 }).map((trainingClass, idx) => (
          <Card key={idx} />
        ))}
      </section>
    </div>
  )
}

import { Carousel as PrimeReactCarousel } from 'primereact/carousel'

import { CarouselProps } from '@interface'

import styles from './carousel.module.scss'

export function Carousel(props: CarouselProps) {
  return (
    <div className={styles.carousel}>
      <PrimeReactCarousel {...props} />
    </div>
  )
}

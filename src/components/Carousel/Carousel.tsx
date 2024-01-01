import Carousel from 'react-material-ui-carousel';

import { IFatura } from '../../dtos/faturas';
import { Item } from './Item';

export function CarouselComponent({ faturas }: { faturas: IFatura[] }) {
  return (
    <Carousel
      autoPlay={false}
      navButtonsAlwaysVisible
      animation="slide"
      navButtonsProps={{
        style: {
          opacity: 0.4,
        },
      }}
    >
      {faturas.map((item) => (
        <Item key={item.numeroDaNotaNF} fatura={item} faturas={faturas} />
      ))}
    </Carousel>
  );
}

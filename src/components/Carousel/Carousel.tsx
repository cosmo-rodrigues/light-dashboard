import Carousel from 'react-material-ui-carousel';

import { IFatura } from '../../dtos/faturas';
import { Item } from './Item';

export function CarouselComponent({ faturas }: { faturas: IFatura[] }) {
  return (
    <Carousel>
      {faturas.map((item) => (
        <Item key={item.numeroDaNotaNF} fatura={item} />
      ))}
    </Carousel>
  );
}

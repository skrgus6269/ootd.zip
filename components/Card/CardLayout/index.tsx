import { Layout, CardBody } from './style';
import { CardProps } from '../type';
import ImageWithCaption from '@/components/UI/ImageWithCaption';

export default function Card(props: CardProps) {
  return (
    <Layout onClick={props.onClick} size={props.size}>
      <ImageWithCaption
        src={props.data.src}
        caption={props.data.caption}
        alt={props.data.alt}
        size={props.size}
      />
      <CardBody>{props.children}</CardBody>
    </Layout>
  );
}

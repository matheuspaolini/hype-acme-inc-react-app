import { useNavigate } from 'react-router-dom';
import { IconButton } from './IconButton';
import { styled } from 'presentation/styles/stitches.config';
import { useAtomValue } from 'jotai';
import { _cartTotalItemsAtom } from 'application/jotai-store/cart';

const Indicator = styled('span', {
  position: 'absolute',
  top: -4,
  right: -4,

  width: 20,
  height: 20,

  fontSize: 14,
  fontWeight: '$Medium',

  display: 'grid',
  placeItems: 'center',

  borderRadius: 20,

  color: '$White',
  background: '$Primary',
});

export function HeaderCartIconButton() {
  const cartTotalItemsAtom = useAtomValue(_cartTotalItemsAtom);

  const navigate = useNavigate()

  const goToCart = () => navigate({ pathname: '/cart' });

  return (
    <IconButton rootCss={{ position: 'relative' }} onClick={goToCart}>
      <Indicator>{cartTotalItemsAtom}</Indicator>

      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19.1477 5.25H5.33514L4.15497 3.1346C4.0225 2.89715 3.7719 2.75 3.5 2.75H2C1.58579 2.75 1.25 3.08579 1.25 3.5C1.25 3.91421 1.58579 4.25 2 4.25H3.0596L4.22429 6.33765L6.91037 12.2809L6.91312 12.2869L7.14971 12.8104L4.45287 15.687C4.25895 15.8939 4.19825 16.1924 4.29599 16.4585C4.39372 16.7247 4.63317 16.913 4.91486 16.9452L7.37299 17.2261C10.4477 17.5775 13.5524 17.5775 16.627 17.2261L19.0852 16.9452C19.4967 16.8981 19.7922 16.5264 19.7452 16.1148C19.6981 15.7033 19.3264 15.4078 18.9149 15.4549L16.4567 15.7358C13.4952 16.0742 10.5048 16.0742 7.54331 15.7358L6.56779 15.6243L8.54717 13.513C8.56632 13.4925 8.5841 13.4713 8.60052 13.4494L9.35334 13.5474C10.4083 13.6847 11.4746 13.7116 12.5351 13.6277C15.0086 13.4321 17.301 12.2551 18.9015 10.3591L19.4795 9.67425C19.499 9.65125 19.517 9.62711 19.5335 9.60194L20.6109 7.96009C21.3745 6.79633 20.5397 5.25 19.1477 5.25Z" fill="#A0A0A0" />
        <path d="M6.5 18.5C5.67157 18.5 5 19.1716 5 20C5 20.8284 5.67157 21.5 6.5 21.5C7.32843 21.5 8 20.8284 8 20C8 19.1716 7.32843 18.5 6.5 18.5Z" fill="#A0A0A0" />
        <path d="M16 20C16 19.1716 16.6716 18.5 17.5 18.5C18.3284 18.5 19 19.1716 19 20C19 20.8284 18.3284 21.5 17.5 21.5C16.6716 21.5 16 20.8284 16 20Z" fill="#A0A0A0" />
      </svg>
    </IconButton>
  );
}

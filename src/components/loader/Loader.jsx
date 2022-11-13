import { LoaderWrap } from './Loader.styled';
import { RingLoader } from 'react-spinners';

export const Loader = () => {
  return (
    <LoaderWrap>
      <RingLoader />
    </LoaderWrap>
  );
};

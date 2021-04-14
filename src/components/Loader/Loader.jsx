import { css } from '@emotion/core';
import ClipLoader from 'react-spinners/RingLoader';

const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default function Loader() {
  return (
    <div className="qweqwe">
      <ClipLoader color="#FF6B01" css={override} size={100} />
    </div>
  );
}

import sprite from '../../images/sprite.svg';

export default function IconArroRight() {
  return (
    <svg className="markerMain">
      <use href={sprite + '#arrowLeft'}></use>
    </svg>
  );
}

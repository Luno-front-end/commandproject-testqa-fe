import sprite from '../../images/sprite.svg';

export default function SpriteIcon({ className, svgId }) {
  return (
    <svg className={className}>
      <use href={sprite + svgId}></use>
    </svg>
  );
}

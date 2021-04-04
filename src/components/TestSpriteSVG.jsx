import sprite from '../images/sprite.svg';
export default function TestSpriteSVG() {
  return (
    <div>
      <svg>
        <use href={sprite + '#logo'}></use>
      </svg>
    </div>
  );
}

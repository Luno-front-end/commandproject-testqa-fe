import sprite from '../../images/footer/sprite.svg';

export default function Footer() {
  return (
    <footer className="containerFooter">
      <div className="container containerFooter">
        <p className="footerText"><span className='copyright'>&copy;</span>
        {`${new Date().toISOString().slice(0, 4)}`}<span className='decor'>All Rights Reserved</span>
       Developed with<svg className='heartSvg'>
            <use href={sprite + '#heart'}>
            </use>
          </svg>
          <span>by<a href="" className='linkFooter'>GoIT Students</a></span></p>
        </div>
    </footer>
  );
}

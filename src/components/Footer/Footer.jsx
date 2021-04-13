import sprite from '../../images/footer/sprite.svg';
import { Link } from 'react-router-dom'
import routes from '../../routes';

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
          <span>by<Link to={routes.materialsPage} className='linkFooter'>GoIT Students</Link></span></p>
        </div>
    </footer>
  );
}

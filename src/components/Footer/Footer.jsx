import sprite from '../../images/footer/sprite.svg';
import { Link } from 'react-router-dom';
import routes from '../../routes';

export default function Footer() {
  return (
    <footer className="containerFooter">
      <div className="container info-position-footer">
        <p className="footerText">
          <span className="copyright">&copy;</span>
          {`${new Date().toISOString().slice(0, 4)}`}{' '}
          <span className="boarder-text-footer">All Rights Reserved</span>
          Developed with
          <svg className="heartSvg" width="16" height="16">
            <use href={sprite + '#heart'}></use>
          </svg>
          {/* <span className="groupLink-footer"> */}
          <Link to={routes.materialsPage} className="linkFooter">
            by <span className="linkFooterBy">GoIT Students</span>
          </Link>
          {/* </span> */}
        </p>
      </div>
    </footer>
  );
}

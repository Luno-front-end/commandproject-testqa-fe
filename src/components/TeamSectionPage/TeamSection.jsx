import sprite from '../../images/sprite.svg';

const TeamSection = ({ name, url, position, sociallinks }) => {
  return (
    <div className="teamItem">
      <div className="thumb">
        <img className="teamPhoto" src={url} alt={name} />
      </div>
      <h3 className="teamName">{name}</h3>
      <p className="teamPosition">{position}</p>
      <div>
        <a
          className="socialLink"
          href={sociallinks}
          target="blank"
          width="30"
          height="30"
        >
          <svg className="githubIcon" width="24" height="24">
            <use href={sprite + '#github'}></use>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default TeamSection;

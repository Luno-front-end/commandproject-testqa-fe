const TeamSection = ({ name, url, position, sociallinks }) => {
  return (
    <div className="teamItem">
      <div className="thumb">
        <img className="teamPhoto" src={url} alt={name} />
      </div>
      <h3 className="teamName">{name}</h3>
      <p className="teamPosition">{position}</p>
      <p>
        <a className="socialLink" href={sociallinks}>
          github
        </a>
      </p>
    </div>
  );
};

export default TeamSection;

import TeamSection from './TeamSection';

function TeamList({ teamMembers }) {
  return (
    <section className="section">
      <h2 className="teamTitle">
        <span className="teamTitleAfter">Our team</span>
      </h2>
      <div
        className="container 
container-teamList"
      >
        <ul className="teamList">
          {teamMembers.map(teamMember => (
            <li className="teamMember" key={teamMember.id}>
              <TeamSection
                url={teamMember.url}
                name={teamMember.name}
                position={teamMember.position}
                sociallinks={teamMember.sociallinks}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamList;

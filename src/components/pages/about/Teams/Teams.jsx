import { teams } from "../../../../data/mockData";
import "./Teams.scss";
import { PropTypes } from "prop-types";

const Teams = () => {
  return (
    <div className="comp-about-teams">
      <div className="container">
        <h3 className="about-teams-ttl">Our core team member</h3>
        <div className="about-teams-list">
          {teams?.map((team) => {
            return <TeamsItem key={team.id} teamData={team} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Teams;

const TeamsItem = ({ teamData }) => {
  return (
    <div className="about-teams-item">
      <div className="teams-item-img">
        <img src={teamData.image} alt="" />
      </div>
      <div className="teams-item-info">
        <p className="teams-info-name">{teamData.name}</p>
        <span className="teams-info-desig">{teamData.designation}</span>
      </div>
    </div>
  );
};

TeamsItem.propTypes = {
  teamData: PropTypes.object,
};

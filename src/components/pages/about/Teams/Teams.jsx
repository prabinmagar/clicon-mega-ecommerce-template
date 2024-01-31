import { teams } from "../../../../data/mockData";
import "./Teams.scss";
import { PropTypes } from "prop-types";

const Teams = () => {
  return (
    <div className="comp-teams">
      <div className="container">
        <div className="seg-teams">
          <h3 className="seg-teams-ttl">Our core team member</h3>
          <div className="elem-teams-list">
            {teams?.map((team) => {
              return <TeamsItem key={team.id} teamData={team} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;

const TeamsItem = ({ teamData }) => {
  return (
    <div className="elem-teams-item">
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

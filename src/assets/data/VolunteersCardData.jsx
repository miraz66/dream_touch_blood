import VolunteersCard from "../../utils/VolunteersCard";
import Team_9 from "../../assets/team_9.jpg";
import Team_7 from "../../assets/team_7.jpg";
import Team_6 from "../../assets/team_6.jpg";

const VolunteersData = [
  {
    id: 1,
    content: (
      <VolunteersCard
        images={Team_9}
        name="ALEXANDER GARY"
        sureName="CO-FOUNDER"
      />
    ),
  },
  {
    id: 2,
    content: (
      <VolunteersCard images={Team_7} name="MELISSA MUNOZ" sureName="FOUNDER" />
    ),
  },
  {
    id: 3,
    content: (
      <VolunteersCard images={Team_6} name="JOHN ABRAHAM" sureName="FOUNDER" />
    ),
  },
  {
    id: 3,
    content: (
      <VolunteersCard images={Team_7} name="MELISSA MUNOZ" sureName="MANAGER" />
    ),
  },
];

export default VolunteersData;

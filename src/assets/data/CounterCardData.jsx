import Counter from "../../utils/CountNumber";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeartbeat,
  faStethoscope,
  faUsers,
  faBuilding,
  faHeartCrack,
} from "@fortawesome/free-solid-svg-icons";

const CounterCardData = [
  {
    id: 1,
    name: "Success Smile",
    icon: (
      <FontAwesomeIcon
        className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
        icon={faHeartbeat}
      ></FontAwesomeIcon>
    ),
    counterCard: (
      <Counter
        startValue={0}
        endValue={1360}
        duration={20000}
        css="pt-5 text-3xl text-red-600 font-semibold font-serif"
      />
    ),
  },
  {
    id: 2,
    name: "Happy Donors",
    icon: (
      <FontAwesomeIcon
        className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
        icon={faStethoscope}
      ></FontAwesomeIcon>
    ),
    counterCard: (
      <Counter
        startValue={0}
        endValue={1510}
        duration={20000}
        css="pt-5 text-3xl text-red-600 font-semibold font-serif"
      />
    ),
  },
  {
    id: 3,
    name: "Happy Recipient",
    icon: (
      <FontAwesomeIcon
        className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
        icon={faUsers}
      ></FontAwesomeIcon>
    ),
    counterCard: (
      <Counter
        startValue={0}
        endValue={2850}
        duration={20000}
        css="pt-5 text-3xl text-red-600 font-semibold font-serif"
      />
    ),
  },
  {
    id: 4,
    name: "Total Awards",
    icon: (
      <FontAwesomeIcon
        className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
        icon={faBuilding}
      ></FontAwesomeIcon>
    ),
    counterCard: (
      <Counter
        startValue={0}
        endValue={3260}
        duration={20000}
        css="pt-5 text-3xl text-red-600 font-semibold font-serif"
      />
    ),
  },
  {
    id: 5,
    name: "Bad Smile",
    icon: (
      <FontAwesomeIcon
        className="w-10 h-10 hover:text-red-600 ease-in-out duration-300"
        icon={faHeartCrack}
      ></FontAwesomeIcon>
    ),
    counterCard: (
      <Counter
        startValue={0}
        endValue={600}
        duration={20000}
        css="pt-5 text-3xl text-red-600 font-semibold font-serif"
      />
    ),
  },
];

export default CounterCardData;

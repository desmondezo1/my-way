import avatar1 from '../assets/avatars/avatar1.png';
import trip from '../assets/trip.svg';
import time from '../assets/time.svg';
import CommuterInfo from '../components/CommuterInfo';

export default function Commuters() {
  return (
    <div className="send-package__details">
      <h2>Commuters available</h2>
      <div className="flex flex-row justify-between items-start bg-[#F3FBF4] p-4 rounded-lg shadow-sm shadow-shadow">
        <img src={avatar1} alt="avatar" />
        <div className="flex flex-col">
          <CommuterInfo commuter="Desmond" src={trip} text="34 trips" />
        </div>
        <div className="flex flex-col">
          <CommuterInfo
            commuter="Gwagwalada Park Abuja"
            src={time}
            text="8:30am"
          />
        </div>
        <button className="bg-info px-10 py-2 text-white">ASK</button>
      </div>
      <div className="flex flex-row justify-between items-start bg-[#F3FBF4] p-4 rounded-lg shadow-sm shadow-shadow">
        <img src={avatar1} alt="avatar" />
        <div className="flex flex-col">
          <CommuterInfo commuter="Chiamaka" src={trip} text="10 trips" />
        </div>
        <div className="flex flex-col">
          <CommuterInfo
            commuter="Gwagwalada Park Abuja"
            src={time}
            text="8:30am"
          />
        </div>
        <button className="bg-info px-10 py-2 text-white">ASK</button>
      </div>
      <div className="flex flex-row justify-between items-start bg-[#F3FBF4] p-4 rounded-lg shadow-sm shadow-shadow">
        <img src={avatar1} alt="avatar" />
        <div className="flex flex-col">
          <CommuterInfo commuter="David" src={trip} text="4 trips" />
        </div>
        <div className="flex flex-col">
          <CommuterInfo
            commuter="Gwagwalada Park Abuja"
            src={time}
            text="8:30am"
          />
        </div>
        <button className="bg-info px-10 py-2 text-white">ASK</button>
      </div>
      <div className="flex flex-row justify-between items-start bg-[#F3FBF4] p-4 rounded-lg shadow-sm shadow-shadow">
        <img src={avatar1} alt="avatar" />
        <div className="flex flex-col">
          <CommuterInfo commuter="Osasere" src={trip} text="34 trips" />
        </div>
        <div className="flex flex-col">
          <CommuterInfo
            commuter="Gwagwalada Park Abuja"
            src={time}
            text="8:30am"
          />
        </div>
        <button className="bg-info px-10 py-2 text-white">ASK</button>
      </div>
      <div className="flex flex-row justify-between items-start bg-[#F3FBF4] p-4 rounded-lg shadow-sm shadow-shadow">
        <img src={avatar1} alt="avatar" />
        <div className="flex flex-col">
          <CommuterInfo commuter="Chibuzor" src={trip} text="102 trips" />
        </div>
        <div className="flex flex-col">
          <CommuterInfo
            commuter="Gwagwalada Park Abuja"
            src={time}
            text="8:30am"
          />
        </div>
        <button className="bg-info px-10 py-2 text-white">ASK</button>
      </div>
    </div>
  );
}

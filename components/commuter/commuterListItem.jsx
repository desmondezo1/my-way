import Image from 'next/image';
import avatar1 from '../../public/avatars/avatar1.png';
import tripIcon from '../../public/trip.svg';
import timeIcon from '../../public/time.svg';
import PropTypes from 'prop-types';
import CommuterInfo from '../../components/commuter/commuterInfo';
import ListItem from '../../styles/listItem.module.css'
import buttonStyle from '../../styles/button.module.css'

export default function commuterListItem({ name, trips, time, park, photo, userId }) {

return (
    <div className={`${ListItem.list_container}`}>
        <div className={ListItem.avatar_wrapper}>
            <Image src={photo && avatar1} alt="avatar" />
        </div>
       
        <div className="flex flex-col">
            <CommuterInfo commuter={name && "Desmond"} src={tripIcon} text={`${trips} trips` && "34 trips"} />
        </div>
        <div className="flex flex-col">
            <CommuterInfo
            commuter={park && "Gwagwalada Park Abuja" }
            src={timeIcon}
            text={time && "8:30"}
            />
        </div>
        <div className='d-flex justify-content-center align-items-center'>
           <button className={`${"mx-auto  mt-0 "} ${buttonStyle.submit}`}>ASK</button>
        </div>
    </div>
)

}

commuterListItem.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    trips: PropTypes.any,
    time: PropTypes.string,
    park: PropTypes.string,
    userId: PropTypes.string,
  }
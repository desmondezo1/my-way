import layoutStyle from '../../styles/layout.module.css'
import formStyle from '../../styles/form.module.css'
import CommuterListItem from '../../components/commuter/commuterListItem'
import avatar1 from '../../public/avatars/avatar1.png';



export default function commuter(){

    return(
    <div className={`${'container '} ${layoutStyle.body_margin_15}`}>
       <h1 className={layoutStyle.header_text}>Commuters available</h1>

       <div className={layoutStyle.grid_25_75}>
           <div>
                <select aria-label="" className={`${"form-control mb-3 "} ${formStyle.dropdown_white_green_outline}`}>
                    <option value="">Today</option>
                    <option value="">Tomorrow</option>
                    <option value="">Next Tomorrow</option>
                    <option value="">Next Week</option>
                </select>

                <div className={formStyle.formInputGroup}>
                    <input className='form-control'  type="time" value="08:30"/>
                    <input className='form-control'  type="time" value="14:00"/>
                </div>
           </div>
       
            <div className="send-package__details">
                <CommuterListItem 
                    photo={avatar1}
                    name={"Dezy"}
                    trips={466}
                    time={"2:40"}
                    park={"gwalad"}
                    userId={20}
                />
            </div>
        </div>
    </div>
    )

}
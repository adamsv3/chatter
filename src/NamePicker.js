import "./NamePicker.css";
import { useState} from "react";
import { FiEdit, FiSend } from 'react-icons/fi'

function NamePicker(props) {
    
    const [editName, setEditName] = useState(false) 
    const [name, setName] = useState("")

    if(editName === false) {
        return <div className= "id">
            Change Username
            <button className="button">
                <FiEdit
                    style = {{height:20, width:20}}
                    onClick={()=> {
                        setEditName(true)
                    }}
                />
            </button>
        </div>

    } else if (editName === true) {
        return <div className = "id">
            <input size="12"
            className = "username"
            placeholder="Add User"
            onChange={e=> {
                setName(e.target.value)
            }}

            onKeyPress={(e) => {
            if (e.key === "Enter" && (name)) {
                setEditName(false)
                setName(name)
            }}}/>   

            {console.log(name)}
            <button className ="button">
                <FiSend
                    style = {{height:30, width:30}}
                    onClick={()=> {
                        if(name) {
                            setName(name)
                            setEditName(false)
                        }}}
                />  
            </button>
        </div>
    }
}




export default NamePicker;
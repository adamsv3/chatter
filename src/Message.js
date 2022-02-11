export default function Message(props) {
    //add the date
    // add the username
    // add a pic
    return ( 

    <div className = "message triangle"> 
            <span className = "message-user">
                {props.user}
            </span>
            <span>
                {props.text}
            </span>
    </div>
    )
}
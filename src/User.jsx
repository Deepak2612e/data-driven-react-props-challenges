import React from 'react'

const User = ({ list }) => {
    return (
        <ul>
            {list.map((l) =>
                <li style ={{display : "flex", alignItems : "center", gap : "5px"}} key = {l.id}>{l.name}<span style = {{backgroundColor : l.isOnline ? "green" : "red", borderRadius : "50%", width : "5px", height : "5px" }}></span></li>
            )}
        </ul>
    )
}

export default User
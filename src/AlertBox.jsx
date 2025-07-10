import React from 'react'

const AlertBox = ({ message , type }) => {
  return (
    <div style={{ display : "flex", justifyContent : "center"}}>
      <p style={{background : type === "success" ? 'green':'red',padding : 10 ,borderRadius : "10px"}}>{message}</p>
    </div>
  )
}

export default AlertBox
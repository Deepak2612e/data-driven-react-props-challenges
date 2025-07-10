import React from 'react'

const Features = ({ list }) => {
  return (
    <div>
        <h2>All New Features</h2>
        <ul>
            {list.map((feature,index) =>
                <li key ={index}>{feature}</li>
            )}
        </ul>
    </div>
    )
}
export default Features
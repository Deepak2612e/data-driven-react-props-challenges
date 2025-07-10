import React from 'react'

const ProgressBar = ({ percentage }) => {
    
    return (
        percentage > 0 && percentage < 100 ? (
            <div style={{width: '50%',backgroundColor: '#eee',borderRadius: '8px',overflow: 'hidden',border: '1px solid #ccc'}}>
                <div style={{width: `${percentage}%`,backgroundColor: '#4caf50',textAlign: 'center',color: 'white',lineHeight: '25px'}}>
                    {percentage}%
                </div>
            </div>
        ) : (
            <div>
                <p>{percentage}% is more than 100 or less than 0</p> 
            </div>
        )
    )
}

export default ProgressBar
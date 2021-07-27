import React from 'react'

const Potluck = ({item}) => {
    return (
        <div className='potluck'>
            <h2>{item.potluck_name}</h2>
        </div>
    )
}

export default Potluck
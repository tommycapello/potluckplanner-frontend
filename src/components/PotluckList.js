import React from 'react'
import Potluck from './Potluck'

export default function PotLuckList({items, isLoading}) {
    return isLoading ? (<h1>Loading... </h1>) : (
        <section className='potlucks'>
            {items.map(item =>
                <Potluck key={item.potluck_id} item={item}/>)}
        </section>
    )
}

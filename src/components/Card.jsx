import React from 'react'
import './card.css'

export default function Card(props) {
  return (
    <div className='card'>
        <h1>{props.num}</h1>
    </div>
  )
}

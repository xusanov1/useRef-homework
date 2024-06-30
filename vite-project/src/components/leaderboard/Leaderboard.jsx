import React from 'react'
import { leadbordCard } from '../../db'

import './Leaderboard.css'

function Leaderboard() {
  return (
      
    <div className='container'>
        <h1 className='leaderboard-h1'>Top Artists & Artworks</h1>
        <div className='leaderboard-cards'>
            {
                leadbordCard.map((card) => (
                    <div key={card.id} className='leaderboard-card'>
                        <img src={card.image} alt={card.name} />
                            <h3>{card.name}</h3>
                            <p>♦ {card.price}</p>
                    </div>
                ))
            }
        </div>
    </div>

  )
}

export default Leaderboard
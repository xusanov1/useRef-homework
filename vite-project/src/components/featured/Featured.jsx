import { collaction } from '../../db/'
import wallet from '../../images/wallet.svg'
import React from 'react'


import './Featured.css'

function Featured() {
    return (
        <div className="container">
            <h1 className='featured-title'>Featured Collections</h1>
            <div className='featured-cards-grid'>
                {
                    collaction.map((card) => (
                        <div key={card.id} className='featured-card'>
                            <img src={card.image} alt={card.name} />
                            <div className="text">
                            <div className="peperzon">
                                <img className='profile-img' src={card.profile_img} alt={card.authorName} />
                                <p>{card.profile_name}</p>
                            </div>
                            <h3 className='card-title'>{card.title}</h3>
                            <span>Description</span>
                            <p className='card-description'>{card.description}</p>
                            <div className="featured-price">
                                <div className="current-bid">
                                    <h3 className='current-h3'>♦ {card.current}</h3>
                                </div>
                                <div className="end-in">
                                    <h3 className='current-time'>{card.current_hour}h {card.current_min}m {card.current_sec}s</h3>
                                </div>

                                </div>
                                <div className="place-bid">
                                    <button><img src={wallet} alt="wallet icon" />   Place Bid</button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Featured
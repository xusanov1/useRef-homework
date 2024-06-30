import React from 'react'
import { explore } from '../../db'


import './Explore.css'
function Explore() {
    return (
        <div className='container'>
            <h1 className='explore-h1'>Discover NFTs</h1>
            <div className='explore-cards'>
                {
                    explore.map((card) => (
                        <div key={card.id} className='explore-card'>
                            <img src={card.image} alt={card.name} />
                            <h3 className='explore-card-title'>{card.title}</h3>
                            <div className="card-profile">
                                <div className="profile-author">
                                    <img className='profile-img' src={card.profile_img} alt={card.authorName} />
                                    <p>{card.profile_name}</p>
                                </div>
                                <div className="card-current">
                                    <p>♦ {card.current}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }

            </div>
            <div className="more">
                    <button className='more-btn'>Discover More</button>
                </div>

        </div>
    )
}

export default Explore
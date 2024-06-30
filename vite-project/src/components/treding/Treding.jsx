import React from 'react'
import treding1 from '../../images/trending1.png'
import treding2 from '../../images/trending2.png'
import treding3 from '../../images/trending3.png'
import treding4 from '../../images/trending4.png'
import avatar from '../../images/avatar.svg'


import "./Treding.css"
function Treding() {
  return (
    <div className='container'>
        <h1 className='treding-h1'>Trending Art 🔥</h1>
        <div className="treding-cards">

            <div className="treding-card">
                <img src={treding1} alt="card image" />
                <h4 className='treding-h4'>ExBoot #2</h4>
                <div className="treding-author">
                    <div className="author">
                        <img src={avatar} alt="" />
                        <h5 className='treding-author-name'>Richard</h5>
                    </div>
                    <div className="treding-price">
                        <span className='treding-span'>Current Bid</span>
                        <p className='trading-34'>3.421 </p>
                    </div>
                </div>
            </div>

            <div className="treding-card">
                <img src={treding2} alt="card image" />
                <h4 className='treding-h4'>ExBoot #2</h4>
                <div className="treding-author">
                    <div className="author">
                        <img src={avatar} alt="" />
                        <h5 className='treding-author-name'>Richard</h5>
                    </div>
                    <div className="treding-price">
                        <span className='treding-span'>Current Bid</span>
                        <p className='trading-34'>3.421 </p>
                    </div>
                </div>
            </div>

            <div className="treding-card">
                <img src={treding3} alt="card image" />
                <h4 className='treding-h4'>Future of Polygon X</h4>
                <div className="treding-author">
                    <div className="author">
                        <img src={avatar} alt="" />
                        <h5 className='treding-author-name'>Richard</h5>
                    </div>
                    <div className="treding-price">
                        <span className='treding-span'>Current Bid</span>
                        <p className='trading-34'>3.421 </p>
                    </div>
                </div>
            </div>

            <div className="treding-card">
                <img src={treding4} alt="card image" />
                <h4 className='treding-h4'>Blue Wave  #2</h4>
                <div className="treding-author">
                    <div className="author">
                        <img src={avatar} alt="" />
                        <h5 className='treding-author-name'>Richard</h5>
                    </div>
                    <div className="treding-price">
                        <span className='treding-span'>Current Bid</span>
                        <p className='trading-34'>3.421 </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Treding
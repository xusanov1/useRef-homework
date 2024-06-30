import React from 'react'
import introImage from '../../images/hero.png'
import wallet from '../../images/wallet.svg'


import './Intro.css'

function Intro() {
  return (
    <div className='container'>
        <div className="wrapper">
            <div className="wrapper-left">
            <p className='intro-p'>WEB 3 NON-FUNGIBLE TOKENS</p>
         <h1 className='intro-h1'>Unlock Unique Digital Ownership with NFTs</h1>  
         <p className='intro-description'>Experience the Revolutionary World of Non-Fungible Tokens on Our Exclusive NFT Marketplace</p> 
         <button className='intro-button'><img src={wallet} alt="wallet image" />  Connect Wallet</button>
            </div>
            <div className="wrapper-right">
                <img src={introImage} alt="into image" />
            </div>
        </div>
    </div>
  )
}

export default Intro
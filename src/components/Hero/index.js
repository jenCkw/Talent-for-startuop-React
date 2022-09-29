import React from 'react'
import './Hero.css'
import HeroImage from '../../asset/hero.png'

function Hero() {
  return (
    <section className='hero'>
        <div className='hero-image-section'>
            <img className='hero-image' src={HeroImage} alt="hero" />
        </div>
        <div className='hero-banner'>
            <div>
                <p className='hero-title'>
                    <span className='hero-text-big'>Boostez</span> votre Start-up avec <span className='hero-orange'>une solution numerique offerte</span>
                </p>
                <p className='hero-text'>
                    vous etes une start-up participer a talent for startups challenges by Digital 
                    Afrique et beneficier d'un accompagne gratuit pour la realisation des vos 
                    projects numerique
                </p>
            </div>
            <button className='hero-button'>Je postule</button>
        </div>
    </section>
  )
}

export default Hero

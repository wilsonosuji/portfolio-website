import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
import IMG5 from '../../assets/portfolio5.png'
import IMG6 from '../../assets/portfolio6.jpg'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG1} alt='IMG1'/>
          </div>
            <h3>Crypto Currency Dashboard & Finalcial Visualization</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG2} alt='IMG2'/>
          </div>
            <h3>Charts Templates & Infographics in Figma</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG3} alt='IMG3'/>
          </div>
            <h3>Figma Dashboard UI Kit for Data Design Web Apps</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG4} alt='IMG4'/>
          </div>
            <h3>Maintaining Tasks and Tracking Progress</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG5} alt='IMG5'/>
          </div>
            <h3>Charts Templates & Infographics in Figma</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
        <article className="portfolio__item">
          <div className="portfolio__item-image">
            <img src={IMG6} alt='IMG6'/>
          </div>
            <h3>Charts Templates & Infographics in Figma</h3>
            <div className='portfolio__item-cta'>
              <a href='https://github.com/wilsonosuji' className='btn' target='_blank'>GitHub</a>
              <a href='https://dribble.com/wilsonosuji' className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio
import * as React from 'react'
import Loader from './Loader'

export default function FilmDetails(props) {
  
  if (!props.film) return (
    <section className="section-film-details">
      <Loader size="normal"/>
    </section>
  )
  console.log(props)
  return (
    <section className="section-film-details">
      <div class="fade"></div>
      <div className="opening">
        <div className="opening__crawl">
          <div className="opening__crawl-title">
            <h1>{props.film.title}</h1>
          </div>
          <p>{props.film.opening_crawl}</p>
        </div>
      </div>
    </section>
  )
}
import * as React from 'react'
import Loader from './Loader'

export default function Films(props) {
  const { films } = props
  if (films.loading) return (
    <section className="section-films">
      <Loader size="normal"/>
    </section>
  )
  return (
    <section className="section-films">
      {(films.results.length > 0) && 
        films.results.map(film => ( 
          <div className="item-box">
            <h3>{film.title}</h3>
            <p>Release date: {film.release_date}</p>
            <p>Producer: {film.producer}</p>
          </div>
        ))
      }
    </section>      
  )
}
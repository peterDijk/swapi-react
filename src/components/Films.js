import * as React from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'

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
        films.results.map(film => {
          const apiId = film.url.split("/").slice(-2)[0]
          return (
            <Link key={film.episode_id} to={`/films/${apiId}`}>
              <div className="item-box">
                <h3>{film.title}</h3>
                <p>Release date: {film.release_date}</p>
                <p>Producer: {film.producer}</p>
                
              </div>
            </Link>
          )
        })
      }
    </section>      
  )
}
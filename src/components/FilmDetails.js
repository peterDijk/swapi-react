import * as React from 'react'
import Loader from './Loader'
import { Link } from 'react-router-dom'

export default function FilmDetails(props) {
  
  if (!props.film) return (
    <section className="section-film-details">
      <Loader size="normal"/>
    </section>
  )
  
  const { film, characters } = props
  const episode = {
    1: 'I',
    2: 'II',
    3: 'III',
    4: 'IV',
    5: 'V',
    6: 'VI',
    7: 'VII'
  }
  return (
    <section className="section-film-details">
      <div className="film-info">
        <div className="film-info__dry">
          <h1>{film.title}</h1>
          <h2>Episode {episode[film.episode_id]}</h2>
          <p>Director: {film.director}</p>
          <p>Producer: {film.producer}</p>
          <p>Release date: {film.release_date}</p>
        </div>
        <div className="film-info__related">
          <div className="film-info_related-characters">
            <h2>Characters in this film:</h2>
            {characters.map(char => {
              const personId = char.url.split("/").slice(-2)[0]
              return (
                <p key={char.url}><Link to={`/people/${personId}`}>{char.name}</Link></p>
              )
            })}
          </div>
        </div>

      </div>
      <div className="fade"></div>
      <div className="opening">
        <div className="opening__crawl">
          <div className="opening__crawl-title">
            <h1>{film.title}</h1>
          </div>
          <p>{film.opening_crawl}</p>
        </div>
      </div>
    </section>
  )
}
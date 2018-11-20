import * as React from 'react'
import Loader from './Loader'

export default function People(props) {
  const { people } = props
  if (people.loading) return (
    <section className="section-people">
      <Loader size="normal"/>
    </section>
  )
  return (
    <section className="section-people">
      {(people.results.length > 0) && 
        people.results.map(person => ( 
          <div key={person.url} className="item-row">
            <h3>{person.name}</h3>
            <p>Gender: {person.gender}</p>
          </div>
        ))
      }
    </section>      
  )
}
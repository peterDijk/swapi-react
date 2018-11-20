import * as React from 'react'
import Loader from './Loader'
import ListPagination from './ListPagination'

export default function People(props) {
  const { people } = props
  const { count, next, previous } = people
  console.log(next)
  if (people.loading) return (
    <section className="section-people">
      <Loader size="normal"/>
    </section>
  )
  return (
    <section className="section-people">
      <ListPagination count={count} next={next} previous={previous} />
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
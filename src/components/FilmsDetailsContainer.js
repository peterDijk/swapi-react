import * as React from 'react'
import { connect } from 'react-redux'
import { loadFilm } from '../actions/films'

import FilmDetails from './FilmDetails'

class FilmsDetailsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadFilm(this.props.match.params.id)
  }

  render() {
    const { film } = this.props

    return (
      <FilmDetails film={film} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film.data
  }
}

const mapDispatchToProps = { 
  loadFilm
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsDetailsContainer)
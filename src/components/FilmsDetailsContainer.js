import * as React from 'react'
import { connect } from 'react-redux'
import { loadFilm, clearFilm } from '../actions/films'

import FilmDetails from './FilmDetails'

class FilmsDetailsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadFilm(this.props.match.params.id)
  }

  componentWillUnmount() {
    this.props.clearFilm()
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
  loadFilm,
  clearFilm
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsDetailsContainer)
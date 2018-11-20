import * as React from 'react'
import { connect } from 'react-redux'
import { loadFilm, clearFilm } from '../actions/films'
import { loadFilmCharacter, clearFilmCharacters } from '../actions/people'

import FilmDetails from './FilmDetails'

class FilmsDetailsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadFilm(this.props.match.params.id)
  }

  componentDidUpdate(prevProps) {
    if (this.props.film && this.props.characters.length <= this.props.film.characters.length) {
      
      const char = this.props.film.characters[this.props.characters.length + 1]
      if (char !== undefined) {
        this.props.loadFilmCharacter(char)
      }
    }
  }

  componentWillUnmount() {
    this.props.clearFilm()
    this.props.clearFilmCharacters()
  }

  render() {
    const { film, characters } = this.props

    return (
      <FilmDetails film={film} characters={characters} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    film: state.film.data,
    characters: state.characters
  }
}

const mapDispatchToProps = { 
  loadFilm,
  clearFilm,
  loadFilmCharacter,
  clearFilmCharacters
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsDetailsContainer)
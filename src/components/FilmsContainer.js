import * as React from 'react'
import { connect } from 'react-redux'
import { loadFilms } from '../actions/films'

import Films from './Films'

class FilmsContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadFilms()
  }

  render() {
    const { films } = this.props

    return (
      <Films films={films} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    films: state.films
  }
}

const mapDispatchToProps = { 
  loadFilms
}

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)
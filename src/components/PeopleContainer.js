import * as React from 'react'
import { connect } from 'react-redux'
import queryString from 'query-string'
import { loadPeople } from '../actions/people'

import People from './People'

class PeopleContainer extends React.PureComponent {

  componentWillMount() {
    this.loadPagPeople()
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.loadPagPeople()
    }
  }

  loadPagPeople = () => {
    const values = queryString.parse(this.props.location.search)
    if (!values.page) values.page = 1
    this.props.loadPeople(`page=${values.page}`)
  }

  render() {
    const { people } = this.props

    return (
      <People people={people} />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    people: state.people
  }
}

const mapDispatchToProps = { 
  loadPeople
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer)
import * as React from 'react'
import { connect } from 'react-redux'
import { loadPeople } from '../actions/people'

import People from './People'

class PeopleContainer extends React.PureComponent {

  componentDidMount() {
    this.props.loadPeople()
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
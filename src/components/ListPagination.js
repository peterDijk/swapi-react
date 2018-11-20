import * as React from 'react'
import {withRouter} from 'react-router'
// import Typography from '@material-ui/core/Typography'
// import IconButton from '@material-ui/core/IconButton';
// import NavigateNext from '@material-ui/icons/NavigateNext'
// import NavigateBefore from '@material-ui/icons/NavigateBefore'

function ListPagination({count, next, previous, range, history}) {
  
  return (
    <div style={{marginBottom: 15, marginLeft: 20}}>
      {/* <p style={{display: 'inline'}}>{`${range.first}-${range.last} of ${count}`}</p>  */}
      <button className="btn-pagination" disabled={(previous?false:true)} onClick={() => history.push(previous)}>{`<`}</button> 
      <button className="btn-pagination" disabled={(next?false:true)} onClick={() => history.push(next)}>{`>`}</button>
    </div>
  )
}

export default withRouter(ListPagination)
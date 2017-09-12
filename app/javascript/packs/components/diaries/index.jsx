import React from 'react'
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

export default class Index extends React.Component {
  render() {
    return <div>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Name</TableHeaderColumn>
        <TableHeaderColumn>Status</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
      <TableRow>
        <TableRowColumn>{this.props.diaries}</TableRowColumn>
        <TableRowColumn>{this.props.diaries}</TableRowColumn>
        <TableRowColumn>{this.props.diaries}</TableRowColumn>
      </TableRow>
    </TableBody>
  </Table>
  </div>
  }
}

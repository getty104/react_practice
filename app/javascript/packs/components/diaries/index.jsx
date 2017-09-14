import React from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';
import RaisedButton from 'material-ui/RaisedButton';

export default class Index extends React.Component {
  render() {
    return <div>
    <Table>
    <TableHeader>
      <TableRow>
        <TableHeaderColumn>ID</TableHeaderColumn>
        <TableHeaderColumn>Title</TableHeaderColumn>
        <TableHeaderColumn>Body</TableHeaderColumn>
      </TableRow>
    </TableHeader>
    <TableBody>
     {this.props.index.diaries.map((diary) => {
     return <TableRow key={diary.id}>
        <TableRowColumn>{diary.id}</TableRowColumn>
        <TableRowColumn>{diary.title}</TableRowColumn>
        <TableRowColumn>{diary.body}</TableRowColumn>
      </TableRow>
      })}
    </TableBody>
  </Table>
   <RaisedButton label="前の10件" secondary={true} onClick={() => this.props.backPage()} />
  <RaisedButton label="次の10件" onClick={() => this.props.nextPage()} />
  </div>
  }
}

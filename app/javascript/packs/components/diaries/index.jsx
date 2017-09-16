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

class Diaries {
  page(page) {
    let request = new XMLHttpRequest();
    request.open('GET', `/api/diaries?page=${page}`,false);  // `false` makes the request synchronous
    request.send();
    if (request.status === 200) {
        return JSON.parse(request.response)
    }
  }
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.diaries = new Diaries();
  }
  render() {
    let json = this.diaries.page(this.props.index.page)
    let diaries = json.diaries
    let size = json.size

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
     {diaries.map((diary) => {
     return <TableRow key={diary.id}>
        <TableRowColumn>{diary.id}</TableRowColumn>
        <TableRowColumn>{diary.title}</TableRowColumn>
        <TableRowColumn>{diary.body}</TableRowColumn>
      </TableRow>
      })}
    </TableBody>
  </Table>
   <RaisedButton label="前の10件" secondary={true} disabled={ this.props.index.page == 0 } onClick={() => this.props.backPage()} />
  <RaisedButton label="次の10件" primary={true} disabled ={ (this.props.index.page+1)*10 >= size } onClick={() => this.props.nextPage()} />
  </div>
  }
}

import React from 'react';

class TodosListItem extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <tr>
        <td>{this.props.task}</td>
        <td>
          <button>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    )
  }
}

export default TodosListItem;
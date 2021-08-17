import * as React from 'react';

const TodoItem = (props) => {
  return (
    <div className="container__todo">
      <div id="todo__content" className="container__todo__content">
        <div> {props.index + 1} </div>
        <div> {props.name} </div>
        <div> {props.age} </div>
        <div> {props.salary} </div>
      </div>

      <span>
        <button id="todo__delete" onClick={() => props.onClick()}>
          Remove
        </button>
      </span>
      <span id="todo__edit">
        <button onClick={props.handleEdit}>Edit</button>
      </span>
    </div>
  );
};

export default TodoItem;

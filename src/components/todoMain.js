import * as React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask } from '../reducer/reducerSlice';

const TodoMain = (props) => {
  const dispatch = useDispatch();
  const [nameEdit, setNameEdit] = React.useState('');
  const [ageEdit, setAgeEdit] = React.useState('');
  const [salaryEdit, setSalaryEdit] = React.useState('');

  return (
    <div className="container__todo">
      <div id="todo__content" className="container__todo__content">
        {/* <div> {props.index} </div>
        <div> {props.name} </div>
        <div> {props.age} </div>
        <div> {props.salary} </div>
      </div> */}
        {!!props.indexEdting ? (
          <div>
            <input
              onChange={(e) => setNameEdit(e.target.value)}
              value={nameEdit}
              placeholder={props.name}
              type="text"
            />

            <input
              onChange={(e) => setAgeEdit(e.target.value)}
              value={ageEdit}
              placeholder={props.age}
              type="text"
            />
            <input
              onChange={(e) => setSalaryEdit(e.target.value)}
              value={salaryEdit}
              placeholder={props.salary}
              type="text"
            />
          </div>
        ) : (
          <div>
            <span>{props.index + 1}</span>
            <span>{props.name}</span>
            <span>{props.age}</span>
            <span>{props.salary}</span>
          </div>
        )}

        {!!props.indexEditing ? (
          <div>
            <button
              onClick={() => {
                if (nameEdit && ageEdit && setAgeEdit) {
                  dispatch(
                    editTask({
                      index: props.index,
                      name: nameEdit,
                      age: ageEdit,
                      salary: salaryEdit,
                    })
                  );
                  props.cancel();
                } else alert('Moi ban nhap noi dung');
              }}
            >
              Save
            </button>
            <button onClick={() => props.cancel()}>Cancel</button>
          </div>
        ) : (
          <div>
            {!!props.indexEditing ? null : (
              <div>
                <button onClick={() => props.edit}>Edit</button>
              </div>
            )}
            {!!props.indexEditing ? null : (
              <div>
                <button
                  onClick={() => {
                    const confirmRemove = window.confirm('Ban co muon xoa task khong ?');
                    if (confirmRemove === true) {
                      dispatch(deleteTask(props.index));
                    }
                  }}
                >
                  Remove
                </button>
              </div>
            )}
          </div>
        )}

        {/* <span>
        <button id="todo__delete" onClick={() => props.onClick()}>
          Remove
        </button>
      </span>
      <span id="todo__edit">
        <button onClick={props.handleEdit}>Edit</button>
      </span> */}
      </div>
    </div>
  );
};

export default TodoMain;

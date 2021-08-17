import React, { useState, useEffect } from 'react';

import TodoItem from '../components/TodoItem';

const LIST_TASK = 'listTask';

const Body = () => {
  const [valueName, setValueName] = React.useState('');
  const [valueAge, setValueAge] = React.useState('');
  const [valueSalary, setValueSalary] = React.useState('');
  const [listTask, setListTask] = React.useState([]);
  const [indexEdit, setIndexEdit] = React.useState(null);

  React.useEffect(() => {
    const list = localStorage.getItem(LIST_TASK);
    if (list) {
      setListTask(JSON.parse(list));
    }
  }, []);

  const handleDelete = (index) => {
    // setListTask(listTask.filter((listTask) => listTask.id !== id))
    listTask.splice(index, 1);
    setListTask([...listTask]);
  };

  const resetTask = () => {
    return setListTask([]);
  };

  const handleSaveTask = (index) => {
    if (valueName.trim()) {
      const list = [
        ...listTask,
        {
          name: valueName,
          age: valueAge,
          salary: valueSalary,
        },
      ];
      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
    } else {
      setIndexEdit(null);
    }
  };

  const handleOnclick = () => {
    if (valueName.trim()) {
      const list = [
        ...listTask,
        {
          name: valueName,
          age: valueAge,
          salary: valueSalary,
        },
      ];
      setValueSalary('');
      setValueName('');
      setValueAge('');

      localStorage.setItem(LIST_TASK, JSON.stringify(list));
      setListTask(list);
    }
  };

  return (
    <div className="container__body">
      {/* <div className="container__body__input"> */}
      <div className="container__body__input__type">
        <span>
          <label>Name</label>
          <input
            placeholder={indexEdit ? listTask[indexEdit].name : 'Add new task in here'}
            onChange={(e) => setValueName(e.target.value)}
            value={valueName}
          />
        </span>
        <br />
        <span>
          <label>Age</label>
          <input
            placeholder={indexEdit ? listTask[indexEdit].age : ''}
            onChange={(e) => setValueAge(e.target.value)}
            value={valueAge}
          />
        </span>
        <br />
        <span>
          <label>Salary</label>
          <input
            placeholder={indexEdit ? listTask[indexEdit].salary : ''}
            onChange={(e) => setValueSalary(e.target.value)}
            value={valueSalary}
          />
        </span>
      </div>
      <div>
        {indexEdit ? (
          <div div style={{ float: 'right' }}>
            <button onClick={handleSaveTask} type={'ghost'}>
              Save
            </button>
            <button onClick={() => setIndexEdit(null)} type={'dashed'}>
              Cancel
            </button>
          </div>
        ) : (
          <div
            style={{
              float: 'right',
              width: '150px',
              height: '20px',
              marginBottom: '5px',
              display: 'flex',
              msFlexDirection: 'row',
            }}
          >
            <button id="plus" onClick={handleOnclick} type={'primary'}>
              Add
            </button>
            <button id="reset" onClick={resetTask}>
              Reset Form
            </button>
          </div>
        )}
        {/* </div> */}
      </div>

      <div className="container__body__line">
        <h2 style={{ color: 'grey', marginLeft: '10px' }}>List of User</h2>

        <br />
        <div className="container__body__inline">
          <span>
            <h3>ID</h3>
          </span>
          <span>
            <h3>NAME</h3>
          </span>
          <span>
            <h3>AGE</h3>
          </span>
          <span>
            <h3>SALARY</h3>
          </span>
        </div>
      </div>

      <div>
        {listTask.length ? (
          listTask.map((item, index) => {
            if (index === indexEdit) return null;
            return (
              <TodoItem
                key={index}
                index={index}
                name={item.name}
                age={item.age}
                salary={item.salary}
                isDone={item.isDone}
                onClick={() => handleDelete(index)}
                // onClick={handleFinish}
                handleEdit={() => setIndexEdit(index)}
              />
            );
          })
        ) : (
          <p>No Task</p>
        )}
      </div>
    </div>
  );
};
export default Body;

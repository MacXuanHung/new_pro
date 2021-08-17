import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addListTask } from '../reducer/reducerSlice';

import TodoMain from '../components/todoMain';

const LIST_TASK = 'listTask';

const Body = () => {
  const dispatch = useDispatch();
  const [valueName, setValueName] = React.useState('');
  const [valueAge, setValueAge] = React.useState('');
  const [valueSalary, setValueSalary] = React.useState('');
  // const [listTask, setListTask] = React.useState([]);
  const [indexEdit, setIndexEdit] = React.useState(null);
  const listTask = useSelector((state) => state.listTask.data);

  // React.useEffect(() => {
  //   const list = localStorage.getItem(LIST_TASK);
  //   if (list) {
  //     setListTask(JSON.parse(list));
  //   }
  // }, []);

  // const handleDelete = (index) => {
  //   // setListTask(listTask.filter((listTask) => listTask.id !== id))
  //   listTask.splice(index, 1);
  //   setListTask([...listTask]);
  // };

  // const resetTask = () => {
  //   return setListTask([]);
  // };

  // const handleSaveTask = (index) => {
  //   if (valueName.trim()) {
  //     const list = [
  //       ...listTask,
  //       {
  //         name: valueName,
  //         age: valueAge,
  //         salary: valueSalary,
  //       },
  //     ];
  //     localStorage.setItem(LIST_TASK, JSON.stringify(list));
  //     setListTask(list);
  //   } else {
  //     setIndexEdit(null);
  //   }
  // };

  // const handleOnclick = () => {
  //   if (valueName.trim()) {
  //     const list = [
  //       ...listTask,
  //       {
  //         name: valueName,
  //         age: valueAge,
  //         salary: valueSalary,
  //       },
  //     ];
  //     setValueSalary('');
  //     setValueName('');
  //     setValueAge('');

  //     localStorage.setItem(LIST_TASK, JSON.stringify(list));
  //     setListTask(list);
  //   }
  // };

  const addTask = () => {
    const checkValue = listTask.some((item, index) => {
      return item.name === valueName;
    });
    if (checkValue) {
      setValueName('');
      return alert('Ten Item nay da ton tai');
    }
    if (valueName === '' || valueAge === '' || valueSalary === '') {
      return alert('Vui long nhap task');
    } else {
      dispatch(
        addListTask({
          name: valueName,
          age: valueAge,
          salary: valueSalary,
        })
      );
      setValueName('');
      setValueAge('');
      setValueSalary('');
    }
  };

  const resetTask = () => {
    setValueName('');
    setValueAge('');
    setValueSalary('');
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
          <button id="plus" onClick={addTask} type={'primary'}>
            Add
          </button>
          <button id="reset" onClick={resetTask}>
            Reset Form
          </button>
        </div>

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
              <TodoMain
                key={index}
                index={index}
                name={item.name}
                age={item.age}
                salary={item.salary}
                isDone={item.isDone}
                edit={() => setIndexEdit(index)}
                cancel={indexEdit ? () => setIndexEdit(null) : () => {}}

                // onClick={() => handleDelete(index)}
                // // onClick={handleFinish}
                // handleEdit={() => setIndexEdit(index)}
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

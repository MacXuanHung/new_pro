import { createSlice } from '@reduxjs/toolkit';

export const reducerSlice = createSlice({
  name: 'list',
  initialState: {
    data: [
      {
        name: 'tuan',
        age: '15',
        salary: '15usd',
      },
      {
        name: 'Minh',
        age: '15',
        salary: '15usd',
      },
    ],
  },

  reducers: {
    addListTask: (state, action) => {
      state.data.push(action.payload);
    },
    editTask: (state, action) => {
      const editData = {
        name: action.payload.name,
        age: action.payload.age,
        salary: action.payload.salary,
      };

      state.data.map((item, index) => {
        if (index === action.payload.index) {
          state.data.splice(index, 1, editData);
        }
      });
    },

    deleteTask: (state, action) => {
      state.data.map((item, index) => {
        if (index === action.payload) {
          state.data.splice(index, 1);
        }
      });
    },
  },
});

export const { addListTask, editTask, deleteTask } = reducerSlice.actions;

export default reducerSlice.reducer;

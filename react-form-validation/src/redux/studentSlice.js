import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  students: [
    { id: 1, maSV: '1', hoTen: 'Nguyễn Văn A', soDienThoai: '0938111111', email: 'nguyenvana@gmail.com' },
    { id: 2, maSV: '2', hoTen: 'Nguyễn Văn B', soDienThoai: '0938223232', email: 'nguyenvanb@gmail.com' },
  ],
  searchTerm: '',
};

const studentSlice = createSlice({
  name: 'students',
  initialState,
  reducers: {
    addStudent: (state, action) => {
      const newId = state.students.length > 0 ? Math.max(...state.students.map(s => s.id)) + 1 : 1;
      state.students.push({
        id: newId,
        ...action.payload,
      });
    },
    deleteStudent: (state, action) => {
      state.students = state.students.filter(student => student.id !== action.payload);
    },
    updateStudent: (state, action) => {
      const index = state.students.findIndex(student => student.id === action.payload.id);
      if (index !== -1) {
        state.students[index] = action.payload;
      }
    },
    setSearchTerm: (state, action) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { addStudent, deleteStudent, updateStudent, setSearchTerm } = studentSlice.actions;
export default studentSlice.reducer;

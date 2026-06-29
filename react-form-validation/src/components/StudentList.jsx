import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteStudent, setSearchTerm } from '../redux/studentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentList = () => {
  const dispatch = useDispatch();
  const allStudents = useSelector(state => state.students.students);
  const searchTerm = useSelector(state => state.students.searchTerm);
  const [filteredStudents, setFilteredStudents] = useState(allStudents);

  // Lifecycle hook - useEffect for filtering
  useEffect(() => {
    if (searchTerm.trim() === '') {
      setFilteredStudents(allStudents);
    } else {
      const filtered = allStudents.filter(student =>
        student.hoTen.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.soDienThoai.includes(searchTerm) ||
        student.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        student.maSV.includes(searchTerm)
      );
      setFilteredStudents(filtered);
    }
  }, [searchTerm, allStudents]);

  const handleSearch = (e) => {
    dispatch(setSearchTerm(e.target.value));
  };

  const handleDelete = (id) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa sinh viên này không?')) {
      dispatch(deleteStudent(id));
    }
  };

  return (
    <div className="mt-5">
      <h3 className="mb-4">Danh sách sinh viên</h3>
      
      {/* Search bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Tìm kiếm theo tên, số điện thoại, email hoặc mã SV..."
          value={searchTerm}
          onChange={handleSearch}
        />
      </div>

      {/* Student table */}
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover">
          <thead className="table-dark">
            <tr>
              <th>Mã SV</th>
              <th>Họ tên</th>
              <th>Số điện thoại</th>
              <th>Email</th>
              <th style={{ width: '100px' }}>Hành động</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.length > 0 ? (
              filteredStudents.map((student) => (
                <tr key={student.id}>
                  <td>{student.maSV}</td>
                  <td>{student.hoTen}</td>
                  <td>{student.soDienThoai}</td>
                  <td>{student.email}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => handleDelete(student.id)}
                    >
                      Xóa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center text-muted">
                  Không tìm thấy sinh viên nào
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <p className="text-muted">Tổng: {filteredStudents.length} sinh viên</p>
    </div>
  );
};

export default StudentList;

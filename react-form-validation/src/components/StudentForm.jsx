import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../redux/studentSlice';
import 'bootstrap/dist/css/bootstrap.min.css';

const StudentForm = () => {
  const [formData, setFormData] = useState({
    maSV: '',
    hoTen: '',
    soDienThoai: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const dispatch = useDispatch();

  // Validation function
  const validateForm = () => {
    let newErrors = {};

    // Mã SV validation
    if (!formData.maSV.trim()) {
      newErrors.maSV = 'Mã SV không được để trống';
    }

    // Họ tên validation
    if (!formData.hoTen.trim()) {
      newErrors.hoTen = 'Họ tên không được để trống';
    }

    // Số điện thoại validation
    if (!formData.soDienThoai.trim()) {
      newErrors.soDienThoai = 'Số điện thoại không được để trống';
    } else if (!/^[0-9]{10,11}$/.test(formData.soDienThoai)) {
      newErrors.soDienThoai = 'Số điện thoại phải có 10-11 chữ số';
    }

    // Email validation
    if (!formData.email.trim()) {
      newErrors.email = 'Email không được để trống';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Email không hợp lệ';
    }

    return newErrors;
  };

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const newErrors = validateForm();
    
    if (Object.keys(newErrors).length === 0) {
      dispatch(addStudent(formData));
      setFormData({
        maSV: '',
        hoTen: '',
        soDienThoai: '',
        email: '',
      });
      alert('Thêm sinh viên thành công!');
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="mb-5">
      <h3 className="mb-4">Thông tin sinh viên</h3>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Mã SV</label>
            <input
              type="text"
              className={`form-control ${errors.maSV ? 'is-invalid' : ''}`}
              name="maSV"
              value={formData.maSV}
              onChange={handleChange}
              placeholder="Nhập mã sinh viên"
            />
            {errors.maSV && <div className="invalid-feedback d-block">{errors.maSV}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Họ tên</label>
            <input
              type="text"
              className={`form-control ${errors.hoTen ? 'is-invalid' : ''}`}
              name="hoTen"
              value={formData.hoTen}
              onChange={handleChange}
              placeholder="Nhập họ tên"
            />
            {errors.hoTen && <div className="invalid-feedback d-block">{errors.hoTen}</div>}
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <label className="form-label">Số điện thoại</label>
            <input
              type="text"
              className={`form-control ${errors.soDienThoai ? 'is-invalid' : ''}`}
              name="soDienThoai"
              value={formData.soDienThoai}
              onChange={handleChange}
              placeholder="Nhập số điện thoại"
            />
            {errors.soDienThoai && <div className="invalid-feedback d-block">{errors.soDienThoai}</div>}
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Nhập email"
            />
            {errors.email && <div className="invalid-feedback d-block">{errors.email}</div>}
          </div>
        </div>

        <button type="submit" className="btn btn-success">
          Thêm sinh viên
        </button>
      </form>
    </div>
  );
};

export default StudentForm;

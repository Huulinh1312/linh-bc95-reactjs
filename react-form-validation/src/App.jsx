import { Provider } from 'react-redux';
import { store } from './redux/store';
import StudentForm from './components/StudentForm';
import StudentList from './components/StudentList';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <Provider store={store}>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h1 className="text-center mb-5">Quản lý Sinh viên</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <StudentForm />
            <StudentList />
          </div>
        </div>
      </div>
    </Provider>
  )
}

export default App

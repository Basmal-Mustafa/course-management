import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CourseListPage from './pages/CourseListPage';
import AddCoursePage from './pages/AddCoursePage';
import EditCoursePage from './Pages/EditCoursePage';
import CourseDetails from './components/Courses/CourseDetails';


function App() {


  return (
    <>
       <Router>
      <Routes>
        <Route path="/courses" element={<CourseListPage />} />
        <Route path="/courses/add" element={<AddCoursePage />} />
        <Route path="/courses/edit/:id" element={<EditCoursePage />} />
        <Route path="/courses/:id" element={<CourseDetails />} />
      </Routes>
    </Router>

    </>
  )
}

export default App

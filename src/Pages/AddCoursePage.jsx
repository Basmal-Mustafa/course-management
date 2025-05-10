import { useNavigate } from 'react-router-dom';
import { saveCourse } from '../utils/api';
//import CourseForm from '../components/Courses/CourseForm';
import CourseForm from '../components/Courses/CourseForm';

const AddCoursePage = () => {
  const navigate = useNavigate();

  const handleSubmit = (courseData) => {
    saveCourse(courseData);
    navigate('/courses');
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Add New Course</h1>
      <CourseForm 
        initialValues={{
          title: '',
          description: '',
          startDate: '',
          endDate: '',
          price: 0,
          image: null
        }}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default AddCoursePage;
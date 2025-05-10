import { useParams, useNavigate } from 'react-router-dom';
import { getCourses, saveCourse } from '../utils/api';
import { useEffect, useState } from 'react';
import CourseForm from '../components/Courses/CourseForm';

const EditCoursePage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const courses = getCourses();
    const foundCourse = courses.find(c => c.id === id);
    setCourse(foundCourse);
  }, [id]);

  const handleSubmit = (updatedCourse) => {
    saveCourse({ ...updatedCourse, id });
    navigate('/courses');
  };

  if (!course) return <div>Loading...</div>;

  return (
    <div>
      <h1>Edit Course</h1>
      <CourseForm 
        initialValues={course}
        onSubmit={handleSubmit}
      />
    </div>
  );
};

export default EditCoursePage;
import { useEffect, useState } from 'react';
import { getCourses, deleteCourse } from '../utils/api';
import CourseList from '../components/Courses/CourseList';

const CourseListPage = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = () => {
      const data = getCourses();
      setCourses(data);
      setLoading(false);
    };
    fetchCourses();
  }, []);

  const handleDelete = (id) => {
    deleteCourse(id);
    setCourses(getCourses()); // Refresh the list after deletion
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <h1>Course Management</h1>
      <CourseList courses={courses} onDelete={handleDelete} />
    </div>
  );
};

export default CourseListPage;
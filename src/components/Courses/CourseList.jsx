import React, { useState, useEffect } from 'react';
import { getCourses, deleteCourse } from '../../utils/api';
import CourseCard from './CourseCard';
import { useNavigate } from 'react-router-dom';

const CourseList = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    try {
      const coursesData = getCourses();
      setCourses(coursesData);
    } catch (err) {
      setError('Failed to load courses');
      console.error(err);
    } finally {
      setLoading(false);
    }
  }, []);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this course?')) {
      deleteCourse(id);
      setCourses(getCourses());
    }
  };

  if (loading) return <div style={{ padding: '20px' }}>Loading courses...</div>;
  if (error) return <div style={{ color: 'red', padding: '20px' }}>{error}</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Course Management</h1>
      <button 
        onClick={() => navigate('/add-course')}
        style={{
          padding: '10px 15px',
          marginBottom: '20px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '4px'
        }}
      >
        Add New Course
      </button>

      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px' 
      }}>
        {courses.length > 0 ? (
          courses.map(course => (
            <CourseCard 
              key={course.id} 
              course={course} 
              onDelete={handleDelete}
            />
          ))
        ) : (
          <p>No courses available. Please add a new course.</p>
        )}
      </div>
    </div>
  );
};

export default CourseList;
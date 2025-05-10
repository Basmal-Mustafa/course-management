import React from 'react';
import { useNavigate } from 'react-router-dom';

const CourseCard = ({ course, onDelete }) => {
  const navigate = useNavigate();

  return (
    <div className="course-card" style={{
      border: '1px solid #ddd',
      borderRadius: '8px',
      padding: '16px',
      margin: '10px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h3>{course.title}</h3>
      <img 
        src={course.image || '/placeholder-image.jpg'} 
        alt={course.title}
        style={{ width: '100%', height: '150px', objectFit: 'cover' }}
      />
      <p>{course.description.substring(0, 100)}...</p>
      <div>
        <span>Start: {new Date(course.startDate).toLocaleDateString()}</span>
        <span> | End: {new Date(course.endDate).toLocaleDateString()}</span>
      </div>
      <p>Price: ${course.price}</p>
      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button 
          onClick={() => navigate(`/edit-course/${course.id}`)}
          style={{ padding: '5px 10px' }}
        >
          Edit
        </button>
        <button 
          onClick={() => onDelete(course.id)}
          style={{ padding: '5px 10px', backgroundColor: '#ff4444', color: 'white' }}
        >
          Delete
        </button>
        <button 
          onClick={() => navigate(`/course/${course.id}`)}
          style={{ padding: '5px 10px' }}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default CourseCard;
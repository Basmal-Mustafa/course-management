import { useParams } from 'react-router-dom';
import { getCourses } from '../../utils/api';
import { useEffect, useState } from 'react';

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);

  useEffect(() => {
    const courses = getCourses();
    const foundCourse = courses.find(c => c.id === id);
    setCourse(foundCourse);
  }, [id]);

  if (!course) return <div>Loading...</div>;

  return (
    <div className="course-details">
      <img src={course.image} alt={course.title} />
      <h2>{course.title}</h2>
      <p>{course.description}</p>
      <div>
        <span>Start Date: {course.startDate}</span>
        <span>End Date: {course.endDate}</span>
      </div>
      <p>Price: ${course.price}</p>
    </div>
  );
};

export default CourseDetails;

export const getCourses = () => {
  const courses = localStorage.getItem('courses');
  return courses ? JSON.parse(courses) : [];
};

export const saveCourse = (course) => {
  const courses = getCourses();
  if (course.id) {
    // Update existing course
    const index = courses.findIndex(c => c.id === course.id);
    courses[index] = course;
  } else {
    // Add new course
    course.id = Date.now().toString();
    courses.push(course);
  }
  localStorage.setItem('courses', JSON.stringify(courses));
  return course;
};

export const deleteCourse = (id) => {
  const courses = getCourses().filter(course => course.id !== id);
  localStorage.setItem('courses', JSON.stringify(courses));
};
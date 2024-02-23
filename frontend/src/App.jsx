import React from 'react';
import NavBar from './components/NavBar';
import CourseCard from './components/CourseCard';
import CourseGroup from './components/CourseGroup';

export default function App() {
  const courseCode = ['COE838', 'ELE888', 'CEN800'];
  const courses = courseCode.map((code) => (
    {
      code: code,
      title: `Course Title for ${code}`,
      description: `Course description for ${code}`,
    }
  ));

  return (
    <>
      <NavBar />
      <CourseGroup title="4th Year" courses={courses}/>
    </>
  )
}

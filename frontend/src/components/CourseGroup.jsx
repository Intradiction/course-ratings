import React from 'react'
import CourseCard from './CourseCard'

const CourseGroup = ({ title, subGroups, courses }) => {
  return (
    <div>
      <div className='bg-gray-500'>{title}</div>
      {
        courses.map((course) => (
          <CourseCard course={course}/>
        ))
      }
    </div>
  )
}

export default CourseGroup

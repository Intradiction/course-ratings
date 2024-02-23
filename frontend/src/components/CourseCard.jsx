import React from 'react'

const CourseCard = ({ course }) => {
  return (
    <div className='m-2 p-4 rounded-md bg-gray-600'>{course.code}</div>
  )
}

export default CourseCard
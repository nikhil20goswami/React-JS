import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {

    const params = useParams()

    return (
        <div>
            <h1>{params.courseId} Course Detail</h1>
        </div>
    )
}

export default CourseDetail
function StudentCard({ course }) {
    return <>
        <h1>
            {(course.grade < 50 && !course.attending) ? "Course Is At Risk" : course.grade >= 85 ? "You are doing expecitonal" : null}
        </h1>
        <div>
            <hr />
            <p>Course Name: {course.name}</p>
            <p>Credits: {course.credits}</p>
            <p>Grade: {course.grade}</p>
            <p>{course.attending ? "You are attending" : "You are not attending"}</p>
            <p>Diffculty: {course.difficulty}</p>
            <hr />
        </div>
    </>
}

export default StudentCard;

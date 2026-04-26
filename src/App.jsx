import { useState } from "react";
import StudentCard from "./StudentCard";
import RegisterCourse from "./RegisterCourse";

function App() {

    const [courses, setCourses] = useState([
        { id: 1, name: "Client Side Programing", credits: 6, grade: 100, attending: true, difficulty: "Moderate" },
        { id: 2, name: "Linear Algebra", credits: 6, grade: 40, attending: false, difficulty: "Hard" },
        { id: 3, name: "Calculus", credits: 6, grade: 80, attending: false, difficulty: "Hard" },
    ]);

    let [selectedCourse, setSelectedCourse] = useState(courses[0]);
    function addCourse(newCourse) {
        setCourses([...courses, newCourse]);
    }

    return <>
        <h1>Arian Aziri, ID: 132814</h1>
        <h3>My courses: </h3>
        {
            courses.map((course) => {
                return <div key={course.id}>
                    <hr />
                    <p>Course Name: {course.name}</p>
                    <p>Credits: {course.credits}</p>
                    <p>Grade: {course.grade}</p>
                    <p>{course.attending ? "You are attending" : "You are not attending"}</p>
                    <p>Diffculty: {course.difficulty}</p>
                    <button onClick={() => setSelectedCourse(course)}>Show details for this course</button>
                    <hr />
                </div >
            })
        }
        <StudentCard course={selectedCourse} />
        <RegisterCourse onSubmit={addCourse} />
    </>

}

export default App;

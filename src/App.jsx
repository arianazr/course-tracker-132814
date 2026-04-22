import StudentCard from "./StudentCard";

function App() {

    const courses = [
        { id: 1, name: "Client Side Programing", credits: 6, grade: 100, attending: true, difficulty: "Moderate" },
        { id: 2, name: "Linear Algebra", credits: 6, grade: 70, attending: false, difficulty: "Hard" },
        { id: 3, name: "Calculus", credits: 6, grade: 80, attending: false, difficulty: "Hard" },
        { id: 4, name: "English For CST", credits: 3, grade: 60, attending: true, difficulty: "Easy" },
    ];

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
                    <hr />
                </div >
            })
        }
        <StudentCard course={courses[0]} />
    </>

}

export default App;

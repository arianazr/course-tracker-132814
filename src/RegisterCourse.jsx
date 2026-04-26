import { useState, useRef } from "react";

function RegisterCourse({ onSubmit }) {
    let [name, setName] = useState("");
    let [credits, setCredits] = useState(0);
    let [grade, setGrade] = useState(0);
    let [attending, setAttending] = useState(true);
    let [difficulty, setDiffuclty] = useState("Easy");
    // this will be used highlight error like grade being greater then 10 or less then 5
    const gradeInputRef = useRef(null);
    // this will be used for same thing
    const creditsInputRef = useRef(null);
    function resetValues() {
        setName("");
        setCredits(0);
        setGrade(0);
        setAttending(true);
        setDiffuclty("Easy");
    }
    function createCourse() {
        let newCourse = {
            id: Date.now(),
            name,
            credits,
            grade,
            attending,
            difficulty,
        };
        if (newCourse.credits > 6 || newCourse.credits < 0) {
            // maybe we should show the user some text
            console.log("Credits should be between 0 and 6");
            creditsInputRef.current.focus();
            return;
        }
        if (newCourse.grade > 10 || newCourse.grade < 5) {
            console.log("Grade should be between 5 and 10");
            gradeInputRef.current.focus();
            return;
        }
        onSubmit(newCourse);
        resetValues();
    }
    return <>
        <label htmlFor="name">Enter course name</label>
        <input type="text" name="name" id="name" value={name} onChange={(e) => setName(e.target.value)} />
        <label ref={creditsInputRef} htmlFor="credits">Enter course credits</label>
        <input type="number" name="credits" id="credits" value={credits} onChange={(e) => setCredits(e.target.value)} />
        <label ref={gradeInputRef} htmlFor="grade">Enter course grade</label>
        <input type="number" name="grade" id="grade" value={grade} onChange={(e) => setGrade(e.target.value)} />
        <label htmlFor="attending">Are you attending this course</label>
        <input type="checkbox" name="attending" id="attending" value={attending} onChange={(e) => setAttending(e.target.checked)} />
        <label htmlFor="difficulty">Course difficulty</label>
        <select name="Difficulty" id="difficulty" value={difficulty} onChange={(e) => setDiffuclty(e.target.value)}>
            <option value="Easy">Easy</option>
            <option value="Moderate">Moderate</option>
            <option value="Hard">Hard</option>
        </select>
        <button onClick={createCourse}>Add Course</button>
    </>
}
export default RegisterCourse;

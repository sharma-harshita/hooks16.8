import { createContext } from "react";

const studentDetails = {
    name : "Student 1",
    age : 24,
    course : "MERN",
}

const Context = createContext(studentDetails);

export default Context;


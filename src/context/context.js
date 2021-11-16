import { createContext } from "react";
// import React from 'react';

const studentDetails = {
    name : "Student 1",
    age : 24,
    course : "MERN",
}

const Context = createContext(studentDetails);
// const Context = React.createContext(studentDetails);

export default Context;


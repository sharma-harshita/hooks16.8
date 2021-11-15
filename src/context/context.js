import { createContext } from "react";
// import React from 'react';

const studentDetails = {
    name : "Aakash Pawar",
    age : 24,
    course : "Elevation Academy",
    tech : "MERN"
}

const Context = createContext(studentDetails);
// const Context = React.createContext(studentDetails);

export default Context;


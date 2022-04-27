import React, {createContext, useState} from "react";

export const UserContext = createContext();

function UserContextProvider (props) {

    const [users, setUsers] = useState({id: 1, name: "John", age: 23, dept:"ECE", salary:20000})

    return(
        <>
            <UserContext.Provider value={[users, setUsers]}>
                {props.children}
            </UserContext.Provider>
        </>
    )
}

export default UserContextProvider



// In this file we are creating a context for users.
// Very first step is that you need to create the context using createContext function.
// we will be creating a functional component which will return Context.Provider.  props.children is a component.
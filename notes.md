useState hook 

const [count, setCount] = useState(0);

useState hook is used to create state in functional component . It takes one argument which will be the initial value of the state variable. It returns two values first is the state variable name and function to update the state variable name.



useEffect : 
 
useEffect(()=>{
	
	return function cleanup(){

	}

}, [])

useEffect hook is a replacement of lifecycle methods . It take two arguments first is callback function another is dependency array. Also it returns a cleanup function which is used to clear the cache memory and during unmounting phase. 


Mounting : written in function only will be executed
Updating : written in function and cleanup function will be executed, some state variable should be present in dependency array.
Unmounting : clean funtion will be executed



useReducer : 

const reducerFun = (state, action) => {
	switch(action.type){
		case "ACTION_1":
			return {...state, name:action.payload.newValue}
		default :
			return state
	}
}

const [state, dispatch] =  useReducer(reducerFun , {id:1, name:"ABC"})

()=>dispatch({type:"ACTION_1", payload:{newValue:event.target.value}})

used for complex state variables or non-primitive data types. It should be used when the state in getting unmanagable within the component.
It will take two arguments first is reducer function and another is  initial value of the state variable.
And it returns two values as state and dispatch . This state variable can be used to access all the values and to update any state value you will have to dispatch an action which will take one argument which will be object having key value pairs as type and payload. 
reducer function : will take two parameters first will be state and another will be action , This function will be responsible t return the updated state variable value based on the action type.

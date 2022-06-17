**useState hook 
**
const [count, setCount] = useState(0);

useState hook is used to create state in functional component . It takes one argument which will be the initial value of the state variable. It returns two values first is the state variable name and function to update the state variable name.



**useEffect : 
** 
useEffect(()=>{
	
	return function cleanup(){

	}

}, [])

useEffect hook is a replacement of lifecycle methods . It take two arguments first is callback function another is dependency array. Also it returns a cleanup function which is used to clear the cache memory and during unmounting phase. 


Mounting : written in function only will be executed
Updating : written in function and cleanup function will be executed, some state variable should be present in dependency array.
Unmounting : clean funtion will be executed



**useReducer : 
**
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


**useRef: 
**
Controlled components are the ones where the data will be handled by the state variables. 
Uncontrolled are the ones where the data will be handled by ref variables.

Problem : Whenever we modify any state variable value then the dom gets rerendered, but I dont want my dom to be rendered on each state change.
Solution : you take a ref variable which will have the access or it will be a html dom element variable which will have the access of all the dom properties. when this variable value will be updated then we will not render the DOM.



const divRef = useRef(0);

<div ref={divRef}>Hello</div>


divRef.current.value
document.getElementById("id")


The ref variable returns you an object , this object will have a property named as current.

**useCallback**

It occurs when you are having Parent and child relationship. 
Problem : When are passing some state variable from Parent to child component then even when you are updating the state of parent component the child component will be rerendered because since the state has got updated so the completed dom has to be rerendered so child component will also be executed again. So avoid this we can create child component as pure component
But if we are passing functions also from parent to child then pure component means using memo will fail because of refrential quality. It says that whenever you are updating the dom the functions will be reallocated with the new memory location so memo will not work here. 

Solution : So to avoid this instead of passind normal function we need to pass the function which returned by useCallback hook 

Structure : This hook takes two arguments , first would be the callback function inside which you will execute or invoke your main function which was required to be passed as an props to child. another would be the dependency array.

const callbackedFun = useCallback(()=>fun(), [])



**useMemo**

Problem : When you are in a component and you are having a function and a state variable . Then whenever you will update the state variable this another defined function who is not having any relation with your state variable will also get executed since dom is getting rerendered because state has been updated. 
So if this function is making any heavy and expensive calculations then it is not good to execute the function on every render when it is not required to be executed.

SOlution : we will create and use a function returned by useMemo hook. Now this function will not be executed everytime any state value is getting changed . It will be executed only when the state which is present in its dependency array.
It will take two arguments , one is callback function in which you will execute the main function required and second would be the dependency array.

Structure : const memoizedFun = useMemo(()=>fun(), []) 



Props Drilling : When you are having a component which is Parent component and it is having some nested child components. Now if any of my child component like child3.js needs some state variable which is present in parent component then this variable has to be passed as a props through child1 and child2 component . This is known as props drilling.


Parent.js -> Child1.js -> child2.js -> child3.js

<div>
	<Child1/>
</div>


State Uplifting : If there is any state variable which is present in child component and this state variable is required by another child component then it is not even possible to send this data to child2.js . This is the problem which we have resolve by uplifting the state to one level and bring it to parent.js so that it can be passed to both child components. but it becomes complex during the time. So, we are having Context API.


Parent.js -> Child1.js
		  -> Child2.js



<div>
	<Child1/>
	<Child2/>
</div>


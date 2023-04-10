import React, { useState } from 'react';

const Person = (props) => {
    const [state, setState] = useState({
        age:props.age
    });
    const increaseAge = ()=> {
        setState({
            age:state.age+1
        });
    }
    return (
    <div>
       <h1>{props.lastName},{props.firstName}</h1> 
       <p>Age:{state.age}</p>
       <p>Hair Color:{props.hairColor}</p>
       <button onClick={increaseAge}>Birthday button for {props.firstName} {props.lastName}</button>
    </div>
    )
}

export default Person
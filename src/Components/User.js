import {useState} from "react";
const User=(props)=>{
    let [count]=useState(0)
    let [count2]=useState(1)
    let {name}=props;
    return <div className="user-card">
        <h2>Name: {name}</h2>
        <h3>Location: coimbatore</h3>
        <h4>Contact: pearasanc2319@gmail.com</h4>
        <p>count = {count}</p>
        <p>count2 : {count2}</p>
        <p>Function based component</p>
    </div>
}

export default User;
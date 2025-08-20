import {useState, useEffect} from "react";

function Home(){

    const [massage ,setmassage] = useState('');

    useEffect(()=>{

        fetch("http://localhost:5000/api/ms")
        .then((res) => res.json())
        .then((sms) =>  setmassage(sms))
        

    },[]);




    return(
        <div>   <h1>    Hello From home page {massage} </h1></div>
    )



}



export default Home;
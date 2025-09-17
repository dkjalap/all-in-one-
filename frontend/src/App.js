import {Navigate, Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
import Homepage from "./pages/dashboard";
//import  Userform from "./pages/userform"
function App() {

  return (  
    <div>
<Routes>
<Route path="/" element ={<Navigate to = "/login" />}  />
<Route path="/login" element={<Login />} />
<Route path="/signup" element ={<Signup />} />
<Route path="/homepage" element={<Homepage />} />


</Routes>
 
</div>
);
}

export default App;
import { Route, Routes } from "react-router-dom";
import Login from "./pages/login";
import Signup from "./pages/signup";
//import  Userform from "./pages/userform"
function App() {

  return (  
    <div>
<Routes>
<Route path="/" element ={<navigator to = "/login" />}  />
<Route path="/login" element={<Login />} />
<Route path="/signup" element ={<Signup />} />

</Routes>
 
</div>
);
}

export default App;
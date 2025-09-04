async function Post_Api(){

const response = await fetch("http://localhost:5000/user/api/login", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json" 
      }});

}



export default {
    Post_Api
}
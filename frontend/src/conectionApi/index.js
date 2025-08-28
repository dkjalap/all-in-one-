async function Post_Api(){

const response = await fetch("http://localhost:5000/user/api/signup", {
      method: "POST", // fetch.POST nahi, method: "POST" likhna hota hai
      headers: {
        "Content-Type": "application/json" // backend ko batata hai ki data JSON format me hai
      });

}



export default {
    Post_Api
}
import {Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 style={{background:"green", color:"white"}}>Sign up</h1>
      <Link to="/">Home</Link> <br />
      <Link to="/login">Login</Link> <br />
      <Link to="/checkout">Check out</Link> <br />
     
      <input type="text" name="" id="" />
      <button>Change</button>
    </div>
  )
}

export default Signup

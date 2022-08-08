// https://supertokens.com/blog/building-a-login-screen-with-react-and-bootstrap
import React, { useContext, useState } from "react"
import userService from "../../services/userService";
import './Login.css'
import UserContext from '../../store/UserContext';
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";


export default function (props) {
  let [authMode, setAuthMode] = useState("signin")
  const history=useHistory();
  const [newUser, setNewUser] = useState({ name: '', password: '', email: '' });
  const { currentUser, setUserContext } = useContext(UserContext)//get the curent user from the context

  const updateFormState = (event) => {
    setNewUser({
      ...newUser,
      [event.target.name]: event.target.value,
    });
  };

  const save = async () => {
    let result = await userService.signUp(newUser);
    if(result.ok)
        login({ ...newUser, id: result.insertId });
        else
    alert(result.message);

  }

  const login = (curUser) => {
    setUserContext(curUser);
    localStorage.setItem("currentUser", JSON.stringify(curUser));
    history.push('/home');
  }

  const changeAuthMode = () => {
    setAuthMode(authMode === "signin" ? "signup" : "signin")
  }

  const signIn = async() => {
    let result = await userService.signIn(newUser.email,newUser.password);
    if (result.ok)
      login(result.user)
    else alert(result.message);
  }
  // ----------------sign in-------------------------------------------------------------------------------
  if (authMode === "signin") {
    return (
      <div className="Auth-form-container">
        <form className="Auth-form">
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <div className="text-center">
              Not registered yet?{" "}
              <button className="btn-primary" onClick={changeAuthMode}>
                Sign In
              </button>
            </div>
            <div className="form-group mt-3">
              <label>Email address</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                value={newUser.email} name='email' onChange={updateFormState}
              />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                value={newUser.password} name='password' onChange={updateFormState}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="button" onClick={signIn} className="btn btn-primary">
                sign in
              </button>
            </div>
            <p className="text-center mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
      </div>
    )
  }


  // ----------------sign up-------------------------------------------------------------------------------
  return (
    <div className="Auth-form-container">
      <form className="Auth-form">
        <div className="Auth-form-content">
          <h3 className="Auth-form-title">Sign In</h3>
          <div className="text-center">
            Already registered?{" "}
            <span className="btn-primary" onClick={changeAuthMode}>
              Sign In
            </span>
          </div>
          <div className="form-group mt-3">
            <label>Full Name</label>
            <input
              value={newUser.name} name='name' onChange={updateFormState}
              className="form-control mt-1"
              placeholder="e.g Jane Doe"
            />
          </div>
          <div className="form-group mt-3">
            <label>Email address</label>
            <input
              type="email"
              className="form-control mt-1"
              placeholder="Email Address"
              value={newUser.email} name='email' onChange={updateFormState}
            />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input
              type="password"
              className="form-control mt-1"
              placeholder="Password"
              value={newUser.password} name='password' onChange={updateFormState}
            />
          </div>
          <div className="d-grid gap-2 mt-3">
            <button type="button" onClick={save} className="btn btn-primary">
              sign up
            </button>
          </div>
          <p className="text-center mt-2">
            Forgot <a href="#">password?</a>
          </p>
        </div>
      </form>
    </div>
  )
}
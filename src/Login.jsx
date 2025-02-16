import { useState } from "react";

function Login() {
  const [pwd1, setPwd1] = useState("");
  const [pwd2, setPwd2] = useState("");
  const [same, setSame] = useState(true);

  function handlepwd1Change(event) {
    setPwd1(event.target.value);
  }

  function handlepwd2Change(event) {
    setPwd2(event.target.value);

    if(pwd1 == event.target.value){
        setSame(true);
    }else{
        setSame(false);
    }
  }

  return (
    <>
      <form className="my-5" style={{ width: "50%", margin: "auto" }}>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control" />
        </div>
        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            value={pwd1}
            onChange={handlepwd1Change}
            type="password"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Re-enter Password</label>
          <input
            value={pwd2}
            onChange={handlepwd2Change}
            type="password"
            className="form-control"
          />
        </div>
        {!same && <p>Password don't Match</p>}
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
          />
          <label className="form-check-label">Check me out</label>
        </div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </>
  );
}

export default Login;

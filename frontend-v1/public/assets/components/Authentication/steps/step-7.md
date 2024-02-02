- Add the below code in *components/AuthCard/SignupCard.js* component:

```
import "./SignupCard.css";

export function SignupCard() {
  return (
    <div className="signup-card">
      <h4 className="card-label">Sign Up</h4>

      <div className="form-group">
        <input
          type="text"
          name="logname"
          className="form-style"
          placeholder="Your Full Name"
          id="logname"
          autoComplete="off"
        />
        <i className="input-icon uil uil-user"></i>
      </div>

      <div className="form-group mt-2">
        <i className="input-icon uil uil-at"></i>

        <input
          type="email"
          name="logemail"
          className="form-style"
          placeholder="Your Email"
          id="logemail"
          autoComplete="off"
        />
      </div>
      <div className="form-group mt-2">
        <input
          type="password"
          name="logpass"
          className="form-style"
          placeholder="Your Password"
          id="logpass"
          autoComplete="off"
        />
        <i className="input-icon uil uil-lock-alt"></i>
      </div>
      <a href="#" className="btn mt-4">
        submit
      </a>
      <p className="mb-0 mt-4 text-center">
        <a href="#0" className="link">
          Forgot your password?
        </a>
      </p>
    </div>
  );
}
```

- Add the below code in *components/AuthCard/SignupCard.css*

```
.signup-card {
  transform: rotateY(180deg);  
}
```

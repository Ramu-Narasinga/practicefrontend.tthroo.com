##### AuthHeader

- Add the below code in *components/AuthHeader.js*

```
import "./AuthHeader.css";

export function AuthHeader({ setCard }) {
  return (
    <div className="auth-header-container">
      <h6 className="auth-header">
        <span>Log In </span>
        <span>Sign Up</span>
      </h6>
      <input
        className="checkbox"
        type="checkbox"
        id="reg-log"
        name="reg-log"
        onClick={($event) =>
          setCard($event.target.checked ? "signup" : "login")
        }
      />
      <label htmlFor="reg-log"></label>
    </div>
  );
}
```

- Add the below CSS in ***components/AuthHeader.css***
 
```
@import url("https://unicons.iconscout.com/release/v2.1.9/css/unicons.css");

.auth-header-container {
  margin: 0 auto;
  margin-top: 4rem;
  text-align: center;
}

.auth-header {
  padding-bottom: 1rem !important;
  margin-bottom: 0 !important;
  font-size: 1rem;
}

.auth-header span {
  padding: 0 20px;
  text-transform: uppercase;
  font-weight: 700;
}

/* Checkbox related css */
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
.checkbox:checked + label,
.checkbox:not(:checked) + label {
  position: relative;
  display: block;
  text-align: center;
  width: 60px;
  height: 16px;
  border-radius: 8px;
  padding: 0;
  margin: 10px auto;
  cursor: pointer;
  background-color: #ffeba7;
}
.checkbox:checked + label:before,
.checkbox:not(:checked) + label:before {
  position: absolute;
  display: block;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: #ffeba7;
  background-color: #102770;
  font-family: "unicons";
  content: "\eb4f";
  z-index: 20;
  top: -10px;
  left: -10px;
  line-height: 36px;
  text-align: center;
  font-size: 24px;
  transition: all 0.5s ease;
}
.checkbox:checked + label:before {
  transform: translateX(44px) rotate(-270deg);
}
```
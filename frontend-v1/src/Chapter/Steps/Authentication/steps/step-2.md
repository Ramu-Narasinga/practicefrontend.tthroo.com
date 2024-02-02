# Step 2: Build a static version in React

#### `App` Component:

jsxCopy code

`// App component
import React, { useState } from 'react';
import Header from './Header';
import Authentication from './Authentication';

function App() {
  return (
    <div className="App">
      <Header />
      <Authentication />
    </div>
  );
}

export default App;` 

#### `Header` Component:

jsxCopy code

`// Header component
import React from 'react';
import Logo from './Logo';

function Header() {
  return (
    <div className="header">
      <Logo />
    </div>
  );
}

export default Header;` 

#### `Logo` Component:

jsxCopy code

`// Logo component
import React from 'react';

function Logo() {
  return (
    <a href="https://front.codes/" className="logo" target="_blank">
      <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
    </a>
  );
}

export default Logo;` 

#### `Authentication` Component:

jsxCopy code

`// Authentication component
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CardWrapper from './CardWrapper';

function Authentication() {
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="authentication">
      <ToggleSwitch isLogin={isLogin} onToggle={() => setLogin(!isLogin)} />
      <CardWrapper isLogin={isLogin} />
    </div>
  );
}

export default Authentication;` 

#### `ToggleSwitch` Component:

jsxCopy code

`// ToggleSwitch component
import React from 'react';

function ToggleSwitch({ isLogin, onToggle }) {
  return (
    <div className="toggle-switch">
      <input type="checkbox" id="reg-log" name="reg-log" checked={isLogin} onChange={onToggle} />
      <label htmlFor="reg-log"></label>
      <h6>
        <span>Log In </span>
        <span>Sign Up</span>
      </h6>
    </div>
  );
}

export default ToggleSwitch;` 

#### `CardWrapper` Component:

jsxCopy code

`// CardWrapper component
import React from 'react';
import LoginCard from './LoginCard';
import SignUpCard from './SignUpCard';

function CardWrapper({ isLogin }) {
  return (
    <div className="card-wrapper">
      {isLogin ? <LoginCard /> : <SignUpCard />}
    </div>
  );
}

export default CardWrapper;` 

#### `LoginCard` Component:

jsxCopy code

`// LoginCard component
import React from 'react';

function LoginCard() {
  return (
    <div className="card">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Log In</h4>
          <div className="form-group">
            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
            <i className="input-icon uil uil-at"></i>
          </div>  
          <div className="form-group mt-2">
            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <a href="#" className="btn mt-4">Submit</a>
          <p className="mb-0 mt-4 text-center"><a href="#0" className="link">Forgot your password?</a></p>
        </div>
      </div>
    </div>
  );
}

export default LoginCard;` 

#### `SignUpCard` Component:

jsxCopy code

`// SignUpCard component
import React from 'react';

function SignUpCard() {
  return (
    <div className="card">
      <div className="center-wrap">
        <div className="section text-center">
          <h4 className="mb-4 pb-3">Sign Up</h4>
          <div className="form-group">
            <input type="text" name="logname" className="form-style" placeholder="Your Full Name" id="logname" autoComplete="off" />
            <i className="input-icon uil uil-user"></i>
          </div>  
          <div className="form-group mt-2">
            <input type="email" name="logemail" className="form-style" placeholder="Your Email" id="logemail" autoComplete="off" />
            <i className="input-icon uil uil-at"></i>
          </div>  
          <div className="form-group mt-2">
            <input type="password" name="logpass" className="form-style" placeholder="Your Password" id="logpass" autoComplete="off" />
            <i className="input-icon uil uil-lock-alt"></i>
          </div>
          <a href="#" className="btn mt-4">Submit</a>
        </div>
      </div>
    </div>
  );
}

export default SignUpCard;` 

This breakdown provides a structured component hierarchy for your UI. Adjustments may be needed based on your specific styling and functionality requirements.
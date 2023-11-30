# Step 4: Identify where your state should live

### State Ownership Decision:

1.  **`App` Component:**
    
    -   **Reasoning:**
        -   The `App` component is the root component and typically manages higher-level application state.
        -   The minimal state data (toggle state `isLogin`) influences the entire authentication section, making it suitable for the `App` component.
2.  **`Authentication` Component:**
    
    -   **Reasoning:**
        -   The `Authentication` component is specifically focused on authentication-related UI elements.
        -   It encapsulates the toggle switch (`ToggleSwitch`) and the card wrapper (`CardWrapper`), making it a logical place for the state.

### Implementation:

jsxCopy code

`// App component
import React from 'react';
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

jsxCopy code

`// Authentication component
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CardWrapper from './CardWrapper';

function Authentication() {
  // State managed in Authentication component
  const [isLogin, setLogin] = useState(true);

  return (
    <div className="authentication">
      {/* ToggleSwitch component to toggle between Login and Sign Up */}
      <ToggleSwitch isLogin={isLogin} onToggle={() => setLogin(!isLogin)} />
      
      {/* CardWrapper component to display LoginCard or SignUpCard based on the toggle state */}
      <CardWrapper isLogin={isLogin} />
    </div>
  );
}

export default Authentication;` 

### Explanation:

-   **`App` Component:**
    
    -   The `App` component is the root component and doesn't contain specific authentication-related logic.
    -   It renders the `Header` and `Authentication` components.
-   **`Authentication` Component:**
    
    -   This component is focused on authentication-related UI elements.
    -   It owns and manages the toggle state (`isLogin`) using the `useState` hook.
    -   The `ToggleSwitch` and `CardWrapper` components receive the state and functions to update it as props.

### Why `Authentication` Component?

-   The `Authentication` component encapsulates the specific authentication-related UI and behavior.
-   It manages the toggle state, and this state is crucial for determining whether to show the login or sign-up form.
-   This design keeps the state and behavior related to authentication localized, making the code more maintainable and understandable.
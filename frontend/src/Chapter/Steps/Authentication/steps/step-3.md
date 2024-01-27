# Step 3: Find the minimal but complete representation of UI state
In "Thinking in React," the third step involves identifying the minimal but complete representation of UI state. This step is crucial for understanding what data your application needs to manage and how it should be structured. Let's analyze the provided code and determine the minimal UI state required.

### Minimal UI State:

1.  **Toggle State (Login or Sign Up):**
    -   In the given UI, there's a toggle switch between "Log In" and "Sign Up."
    -   This toggle switch controls which card (Login or Sign Up) is displayed.
    -   The state can be represented by a boolean value (`isLogin`), indicating whether the user is in the login state (`true`) or sign-up state (`false`).

### Implementation:

jsxCopy code

`// Authentication component
import React, { useState } from 'react';
import ToggleSwitch from './ToggleSwitch';
import CardWrapper from './CardWrapper';

function Authentication() {
  // Minimal UI state
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

-   **`isLogin` State:**
    
    -   This state is a boolean value (`true` for login, `false` for sign-up).
    -   It is used to determine which card to display—either the login card or the sign-up card.
-   **`setLogin` Function:**
    
    -   This function is responsible for updating the `isLogin` state based on user interaction with the toggle switch.
    -   When the user toggles between "Log In" and "Sign Up," it updates the state accordingly.

### Why Is This the Minimal State?

-   The `isLogin` state captures the essence of the UI behavior without unnecessary complexity.
-   It is sufficient to determine the primary mode of the UI—whether the user is logging in or signing up.
-   Additional state for form inputs, error messages, or other UI elements may be introduced as needed, but the `isLogin` state is the core representation of the toggle behavior.
# Step 1: Break the UI into a component hierarchy
There are n components on this screen:

 # Component Hierarchy:

1.  **`App` Component:**
    
    -   The root component that holds the entire UI.
2.  **`Header` Component:**
    
    -   Contains the logo.
3.  **`Logo` Component:**
    
    -   Represents the website logo.
4.  **`Authentication` Component:**
    
    -   Manages the login and sign-up sections.
        -   **`ToggleSwitch` Component:**
            -   Represents the switch between "Log In" and "Sign Up."
        -   **`CardWrapper` Component:**
            -   Wraps the 3D card components based on the toggle state.
                -   **`LoginCard` Component:**
                    -   Represents the login form.
                -   **`SignUpCard` Component:**
                    -   Represents the sign-up form.

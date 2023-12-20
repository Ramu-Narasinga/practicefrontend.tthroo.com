#### Add the below code
Cope the code below into App.js
```
import React, { useEffect } from "react";
import Sortable from "sortablejs";
import "./styles.css";

export default function App() {
  useEffect(() => {
    const dragAndDropItems = document.getElementById("team-members");

    new Sortable(dragAndDropItems, {
      animation: 350,
      chosenClass: "team-member-chosen",
      dragClass: "team-member-drag",
    });
  }, []); // Run the effect only once when the component mounts

  // Array of team members
  const people = [
    { name: "Alex Johnson", position: "Software Engineer" },
    { name: "Megan Parker", position: "Marketing Specialist" },
    { name: "Jordan Taylor", position: "Graphic Designer" },
    { name: "Taylor Mitchell", position: "Data Analyst" },
  ];

  return (
    <div id="team-members">
      {/* Map through each person in the 'people' array */}
      {people.map((person, index) => (
        <article key={index} className="team-member">
          {/* Team member avatar with dynamically generated source */}
          <img
            className="team-member-avatar"
            src={`https://eu.ui-avatars.com/api/?name=${person.name}&size=250`}
            alt="Team Member"
          />

          {/* Team member name and position */}
          <div className="team-member-name">
            <h3>{person.name}</h3>
            <p>{person.position}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
```

#### Explanation:

The code defines a React functional component named App, which represents the main application. This component renders a list of team members with drag-and-drop functionality.

##### 1. Import Statements:

`import React, { useEffect } from "react";
import Sortable from "sortablejs";
import "./styles.css";` 

-   **React**: Imports the React library, allowing the use of React components and features.
-   **useEffect**: Imports the `useEffect` hook, which is used to perform side effects in functional components.
-   **Sortable**: Imports the Sortable library, which is used for drag-and-drop functionality.
-   **"./styles.css"**: Imports the styles for the component.
##### 2. Add sortablejs dependency
Add the `"sortablejs":  "1.15.1"` in `dependenies` in `package.json`

##### 3. Component Definition:

`export default function App() {
  // ...
}` 

-   **`export default function App()`**: Defines the functional component named `App` and exports it as the default export.

##### 4. useEffect Hook:

    useEffect(() => {
      const dragAndDropItems = document.getElementById("team-members");
    
      new Sortable(dragAndDropItems, {
        animation: 350,
        chosenClass: "team-member-chosen",
        dragClass: "team-member-drag",
      });
    }, []); // Run the effect only once when the component mounts

-   **`useEffect`**: This hook is used for performing side effects in functional components. In this case, it's used to initialize the Sortable library when the component mounts.
    
-   **`document.getElementById("team-members")`**: Retrieves the DOM element with the id "team-members," which is the container for the team members.
    
-   **`new Sortable(dragAndDropItems, { ... })`**: Initializes the Sortable library on the specified element (`dragAndDropItems`) with some configuration options.
    
    -   **`animation: 350`**: Specifies the animation duration for the drag-and-drop effect.
    -   **`chosenClass: "team-member-chosen"`**: Defines the CSS class applied to the chosen (dragged) item.
    -   **`dragClass: "team-member-drag"`**: Defines the CSS class applied during dragging.
-   **`[]`**: The empty dependency array ensures that the `useEffect` runs only once when the component mounts.
    

##### 5. Data and Rendering:

    const people = [
      { name: "Alex Johnson", position: "Software Engineer" },
      { name: "Megan Parker", position: "Marketing Specialist" },
      { name: "Jordan Taylor", position: "Graphic Designer" },
      { name: "Taylor Mitchell", position: "Data Analyst" },
    ];
    
    return (
      <div id="team-members">
        {/* Map through each person in the 'people' array */}
        {people.map((person, index) => (
          <article key={index} className="team-member">
            {/* Team member avatar with dynamically generated source */}
            <img
              className="team-member-avatar"
              src={`https://eu.ui-avatars.com/api/?name=${person.name}&size=250`}
              alt="Team Member"
            />
    
            {/* Team member name and position */}
            <div className="team-member-name">
              <h3>{person.name}</h3>
              <p>{person.position}</p>
            </div>
          </article>
        ))}
      </div>
    ); 

-   **`const people = [...]`**: Defines an array of team members, each represented by an object with `name` and `position` properties.
    
-   **`<div id="team-members">...</div>`**: Renders a container with the id "team-members" to hold the team members.
    
-   **`{people.map((person, index) => ... )}`**: Maps over the `people` array, rendering an `<article>` element for each team member.
    
    -   **`<img className="team-member-avatar" src={...} alt="Team Member" />`**: Renders an image tag for the team member's avatar. The source is dynamically generated using the `ui-avatars.com` API.
        
    -   **`<div className="team-member-name">...</div>`**: Renders a div containing the team member's name and position.
        
        -   **`<h3>{person.name}</h3>`**: Displays the team member's name using an `<h3>` tag.
            
        -   **`<p>{person.position}</p>`**: Displays the team member's position using a `<p>` tag.
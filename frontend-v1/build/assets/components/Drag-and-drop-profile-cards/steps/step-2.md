##### Add the below code
Cope the code below into styles.css
```
:root {
  --background: #edeef7;
  --gray: #edeef7;
  --white: #ffffff;
  --poppins: "Poppins", sans-serif;
  --shadow-opacity: 0.3;
  --blur: 10px;
}

body {
  font-family: var(--poppins), sans-serif;
  font-size: 1rem;
  /* background-image: url("https://images.pexels.com/photos/13574114/pexels-photo-13574114.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"); */
  background-image: url("https://source.unsplash.com/a-wooden-tower-in-the-middle-of-a-forest-2V8RPSXWjw4");
  background-position: center center;
  background-size: cover;
  display: flex;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

*,
*:before,
*:after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

#team-members {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  max-width: 550px;
  margin: auto;
  padding: 50px;
  background: rgba(255, 255, 255, 0.25);
  backdrop-filter: blur(var(--blur));
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.08);
  filter: drop-shadow(0px 20px 10px rgba(0, 0, 0, var(--shadow-opacity)));
}

.team-member {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  min-height: 60px;
  padding: 16px;
  background-color: var(--white);
  border-radius: 24px;
  font-size: 16px;
  z-index: 1;
}

.team-member:hover {
  cursor: grab;
}

.team-member-avatar {
  width: 3.75rem;
  height: 3.75rem;
  object-fit: cover;
  border-radius: 50%;
}

.team-member-name {
  display: grid;
  gap: 0.125rem;
}

.team-member-name h3 {
  font-size: large;
}

.team-member-name p {
  font-size: smaller;
}

.team-member-chosen {
  box-shadow: 8px 8px 32px rgba(black, 0.3);
  opacity: 0.5;
}

.team-member-drag {
  opacity: 0.5;
}
```
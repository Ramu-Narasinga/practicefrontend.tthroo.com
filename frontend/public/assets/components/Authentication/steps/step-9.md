- Add the below code in *App.js*

```
import { useState } from "react";
import { AuthCard } from "./components/AuthCard/index";
import { AuthHeader } from "./components/AuthHeader";
import { Header } from "./components/Header";
import "./styles.css";

export default function App() {
  const [card, setCard] = useState("login");

  return (
    <div className="App">
      <Header />
      <AuthHeader setCard={setCard} />
      <AuthCard card={card} />
    </div>
  );
}
```

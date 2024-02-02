##### Header component

- Add the below code in *components/Header.js*
 
```
import "./Header.css";

export function Header() {
  return (
    <a href="https://front.codes/" className="logo" target="_blank">
      <img src="https://assets.codepen.io/1462889/fcy.png" alt="" />
    </a>
  );
}
```

- Add the below code in ***components/Header.css***

```
.logo {
  position: absolute;
  top: 30px;
  right: 30px;
  display: block;
  z-index: 100;
  transition: all 250ms linear;
}
 .logo img {
  height: 26px;
  width: auto;
  display: block;
}
```

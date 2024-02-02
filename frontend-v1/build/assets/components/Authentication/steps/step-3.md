Let's build these components in pure CSS

##### Apply global styles

- Add the following global styles that are common across the app in styles.css. 

```
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500,600,700,800,900");

 body {
     font-family: "Poppins", sans-serif;
     font-weight: 300;
     font-size: 15px;
     line-height: 1.7;
     color: #c4c3ca;
     background-color: #1f2029;
     overflow-x: hidden;
     margin: 0;
     padding: 0;
}
 a {
     cursor: pointer;
     transition: all 200ms linear;
}
 a:hover {
     text-decoration: none;
}
 .link {
     color: #c4c3ca;
}
 .link:hover {
     color: #ffeba7;
}
 p {
     font-weight: 500;
     font-size: 14px;
     line-height: 1.7;
}
 h4 {
     font-weight: 600;
}
 h6 span {
     padding: 0 20px;
     text-transform: uppercase;
     font-weight: 700;
}
 .section {
     position: relative;
     width: 100%;
     display: block;
}
 .full-height {
     min-height: 100vh;
}
 .mt-2 {
     margin-top: 0.5rem !important;
}
```
const heading =  React.createElement("div",{id : "parent"},React.createElement("div",{id : "child"},React.createElement("h1",{id : "heading"},"Hello world From react! using nested react")));
   
const root =  ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
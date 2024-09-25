const heading2 = React.createElement("h1",{},"Hello from React Js")
const parent = ReactDOM.createRoot(document.getElementById("root2"));
const heading = React.createElement("div",{id:"parent"},
           [   React.createElement("div",{id:"orange"},""),
               React.createElement("div" , {id:"white"},"India"),
               React.createElement("div" , {id:"green"},""),
        ]);

parent.render(heading);


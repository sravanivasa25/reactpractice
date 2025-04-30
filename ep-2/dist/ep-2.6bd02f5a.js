/**
 * <div id="parent">
 * <div id= "child">
 * <h1> this is h1 tag</h1>
 * </div>
 * </div> to develop like this structure we will like this
 */ const parent = React.createElement("div", {
    id: "parent"
}, [
    React.createElement("div", {
        id: "child"
    }, [
        React.createElement("h1", {}, "this is h1 tag"),
        /*to create sibling to h1 tag we will send as array  */ React.createElement("h2", {}, "this is h2 tag")
    ]),
    React.createElement("div", {
        id: "child1"
    }, [
        React.createElement("h1", {}, "this is h1 from child1 tag"),
        React.createElement("h2", {}, "this is h2 from child1 tag")
    ])
]);
const heading = React.createElement("h1", {
    id: "heading"
}, "hello world from React");
// Use Fragment to group without extra div
const container = React.createElement(React.Fragment, {}, parent, heading); /*to pass to objects to the root we will
will create another div and pass those two objects as child to that perticular div or simply we can use 
react.fragment without using extra div */ 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);

//# sourceMappingURL=ep-2.6bd02f5a.js.map

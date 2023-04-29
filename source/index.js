// JSX = Javascript XML 
// Renders into JSON which is then passed to webpage

// 'ClassName' instead of just 'class'
// Multiple elements can be put in if they are put inside a single parrent element

const page = (
    <div>
        <h1 className="header">Hello, everyone!</h1>
        <p>This is a paragraph</p>
    </div>
)
ReactDOM.render(
    page,
    document.getElementById("root")
);
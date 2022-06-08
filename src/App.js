import Header from "./Header";

const App = () => {
  // JSX
  return (
    // this is a fragment, it acts as a div in html but it is not a div
    // it lets us add elements outside the App div
    <>
      <Header text="Hello World" />
      <div className="container">
        <h1>My App</h1>
      </div>
    </>
  );
};

// exporting the app to the html root div
export default App;

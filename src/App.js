const App = () => {
  const title = "Blog Post";
  const body = "This is my blogpost";
  const comments = [
    {
      id: 1,
      text: "Comment one",
    },
    {
      id: 2,
      text: "Comment two",
    },
    {
      id: 2,
      text: "Comment three",
    },
  ];

  // JSX
  return (
    <div className="container">
      <h1>{title}</h1>
      <p>{body}</p>

      <div className="comments">
        <h3>Comments ({comments.length})</h3>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>{comment.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

// exporting the app to the html root div
export default App;

export default function Header(props) {
  return (
    <header>
      <div className="container">
        <h2>{props.text}</h2>
      </div>
    </header>
  );
}

export default function Home(props) {
  console.log("Home component rendered");
  function setState() {
    props.setHomeState((prevState) => !prevState);
    props.setCategoryState((prevState) => !prevState);
  }
  return (
    <div className="home-container" id="home-section-id">
      <h1>Quizzical</h1>
      <p>This is sample caption</p>
      <button onClick={setState}>Get Started</button>
    </div>
  );
}

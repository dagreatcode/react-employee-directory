import searchEmployee from "./components/searchEmployee";

function App(props) {
  return (
    <>
      <header
        style={{
          backgroundColor: "rgb(0,24,65)",
          height: 130,
          borderBottom: "5px solid red",
        }}
        className="header"
      >
        <h1
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Reem Kufi",
          }}
        >
          Employee Directory
        </h1>
        <p
          style={{
            color: "white",
            textAlign: "center",
            fontFamily: "Reem Kufi",
          }}
        >
          Use the search box to narrow
          your results.
        </p>
      </header>

      <div>
                 {/* <searchEmployee /> */}
      </div>
    </>
  );
}

export default App;
import "./App.css";
import NewBoxForm from "./NewBoxForm";
import BoxList from "./BoxList";

function App() {
  return (
    <div className="App">
      <NewBoxForm addBox={addBox}/>
      <BoxList />
    </div>
  );
}

export default App;

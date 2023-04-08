import "./App.css";
import Greet from "./components/Greet";
import Namestey from "./components/Namestey";
import Welcome from "./components/Welcome";
import Hello from "./components/Hello";
import Hi from "./components/Hi";
import Message from "./components/Message";
import Counter from "./components/Counter";
import FunctionClick from "./components/FunctionClick";

import ClassClick from "./components/ClassClick";
import EventBind from "./components/EventBind";
import ParentComponent from "./components/ParentComponent";

function App() {
  return (
    <div className="App">

<ParentComponent/>

    {/* <EventBind></EventBind> */}

      {/* <br />
      <hr />
      <FunctionClick></FunctionClick>
      <br />
      <hr />
      <ClassClick></ClassClick> */}


      {/* <Counter />
       <Message />
      <br />
      <hr />
      <Greet name="Bhuwan" heroName="Rijal"></Greet>
      <br />
      <hr />
      <Welcome name="Sujan" heroName="Rijal" /> */}

      {/* <br />
      <Namestey />
      <Welcome />
      <Hello />
      <Hi />
      <br />
      <hr />
      <br />
      <MyComponent name="Bhuwan" heroName="Rijal">
        <button>Action</button>
      </MyComponent>
      <Namestey name="Bhuwan" />
      <Welcome name="Kabi" heroName="Rijal" />
      <Hello name="Nuna">
        <p>This Child Element</p>
      </Hello>
      <Hi name="Suman" /> */}
      
    </div>
  );
}

export default App;

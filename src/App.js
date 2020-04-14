import React from 'react';
import './App.css';
import { Text } from "./components/primitives";

function App() {
  return (
    <div className="App">
      <Text text={"Heading 1"} variant={"h1"}/>
      <Text text={"Heading 2"} variant={"h2"}/>
      <Text text={"Heading 3"} variant={"h3"}/>
      <Text text={"Heading 4"} variant={"h4"}/>
      <Text text={"Heading 5"} variant={"h5"}/>
      <Text text={"Heading 6"} variant={"h6"}/>
      <Text text={"Paragraph"} variant={"p"}/>
      <Text text={"Paragraph"} variant={"p"} weight={"strong"}/>
    </div>
  );
}

export default App;

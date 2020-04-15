import React from "react";
import "./App.css";
import { Text } from "./components/primitives";
import { Button } from "./components/elements";
// import { Button } from "./components/elements";

function App() {
  return (
    <div className="App">
      <Text text={"Heading 1"} variant={"h1"} />
      <Text text={"Heading 2"} variant={"h2"} />
      <Text text={"Heading 3"} variant={"h3"} />
      <Text text={"Heading 4"} variant={"h4"} />
      <Text text={"Heading 5"} variant={"h5"} />
      <Text text={"Heading 6"} variant={"h6"} />
      <Text text={"Paragraph"} variant={"p"} />
      <Text text={"Paragraph Strong"} variant={"p"} strong />
      <Text text={"mono"} variant={"p"} mono />
      <Button text={"Primary"} variant={"primary"}/>
      <Button text={"Secondary"} variant={"secondary"}/>
      <Button text={"Success"} variant={"success"}/>
      <Button text={"Destructive"} variant={"destructive"}/>
      <Button text={"Ghost"} variant={"ghost"}/>
    </div>
  );
}

export default App;

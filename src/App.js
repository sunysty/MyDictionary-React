import React from "react";
import { Switch, Route } from "react-router-dom";

import MyDictionary from "./components/MyDictionary";
import AddWord from "./components/AddWord";
import NotFound from "./components/NotFound";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={MyDictionary} />
      <Route path="/add_word" component={AddWord} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default App;

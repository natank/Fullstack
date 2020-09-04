import React, { Component } from "react";
import { Link, Route, Switch } from "react-router-dom";
import stage1 from "./stage1";
import stage2 from "./stage2";
import stage3 from "./stage3";
import stage4 from "./stage4";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return pug`
      Switch
        Route(path="/" exact component=${stage1})
        Route(path="/stage2" component=${stage2})
        Route(path="/stage3" component=${stage3})
        Route(path="/stage4" component=${stage4})
      `;
  }
}

export default App;

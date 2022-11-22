import React from "react";
import Header from "../Header/Header";
import ResultsContainer from "../ResultsContainer/ResultsContainer";
import SearchBox from "../SearchBox/SearchBox";
import "./App.css";

const name = require("@rstacruz/startup-name-generator");

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      headerText: "Name It!",
      headerExpanded: true,
      suggestedNames: [],
    };
  }

  handleInputChange = (inputText) => {
    this.setState({
      headerExpanded: !inputText,
      suggestedNames: inputText ? name(inputText) : [],
    });
  };

  render() {
    return (
      <div>
        <Header
          headTitle={this.state.headerText}
          headerExpanded={this.state.headerExpanded}
        />
        <SearchBox onInputChange={this.handleInputChange} />
        <ResultsContainer suggestedNames = { this.state.suggestedNames }/>

        {/*         <h3>{this.state.headerText}</h3>
        <button
          onClick={() => {
            this.setState({
              headerText: "Wooaaa!!!",
            });
          }}
        >
          Click me!!!
        </button> */}
      </div>
    );
  }
}

export default App;

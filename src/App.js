import React, {Component} from 'react';
import './App.less';
import MyProfile from "./components/MyProfile";

class App extends Component  {
  render() {
    return (
      <main className="app">
        <MyProfile />       
      </main>
    );
  }
}

export default App;
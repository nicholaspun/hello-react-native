import React, { Component } from 'react';
import { AppRegistry, Text, View, Navigator } from 'react-native';

// Components
import Component1 from "./app/components/component1"; // Hello World + Basic Props
import Component2 from "./app/components/component2"; // StyleSheets + Touchables
import Component3 from "./app/components/component3"; // Input + Switch
import Component4 from "./app/components/component4"; // ListView
import Component5 from "./app/components/component5"; // Async, ListView
import Component6 from "./app/components/component6"; // Navigation, Button

export default class myapp extends Component {
  renderScene(route, navigator) {
    switch(route.id) {
      case 'component5':
        return <Component5 navigator={navigator} title="component5" />
      case 'component6':
        return <Component6 user={route.user} navigator={navigator} title="component6" />
    }
  }

  render() {
    console.log("'react-native log-android' is the command to open up a console for debugging!");
    // View is the equivalent of div
    return (
      <Navigator
        initialRoute={{id: 'component5'}}
        renderScene={this.renderScene}
        configureScreen={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom} />
    )
  }
}

AppRegistry.registerComponent("myapp", () => myapp);

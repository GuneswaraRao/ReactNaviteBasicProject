import React, { Component } from "react";
import { View, Text, Button } from "react-native";

//state example
export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Guna" };
  }

  render() {
    return (
      <View style={{ justfyContent: "center", alignItems: "center", flex: 1 }}>
        <View>{this.state.name}</View>
        <View>
          <Text>
            <Child data={"hello Guna"} />
          </Text>
          <Button
            title="Click Me"
            onPress={(e) => this.setState({ name: "texting" })}
          />
        </View>
      </View>
    );
  }
}
//props example
export class Child extends Component {
  render() {
    return (
      <View style={{ justfyContent: "center", alignItems: "center" }}>
        <Text>{this.props.data}</Text>
      </View>
    );
  }
}

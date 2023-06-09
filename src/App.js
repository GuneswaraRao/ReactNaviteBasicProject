import React from "react";
import { View } from "react-native";
import Index from "./Components/StateProps";
import Helloworld from "./Helloworld";
import { Child } from "./Helloworld";

const App = () => {
  return (
    <View style={{ flex: 1 }}>
      <Helloworld />
      <Index />
    </View>
  );
};
export default App;

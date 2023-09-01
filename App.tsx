import Home from "./src/pages/Home/index";
import { View, StatusBar, ScrollView } from "react-native";

export default function App() {
  return (
    <ScrollView>
      <StatusBar />
      <Home />
    </ScrollView>
  );
}

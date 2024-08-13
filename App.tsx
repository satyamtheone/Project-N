import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import "./global.css";
import StudentComponent from "./src/Pages/re";

export default function App() {
  return (
    <View className=" flex-1 justify-center items-center">
      <Text className="text-yellow-300 text-5xl">
        Open up App.tsx to start working on your app!
      </Text>
      <StatusBar style="auto" />
      <StudentComponent />
    </View>
  );
}

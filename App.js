import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { TailwindProvider, useTailwind } from "tailwind-rn";
import utilities from "./tailwind.json";

export default function App() {
  const tailwind = useTailwind();

  return (
    <TailwindProvider utilities={utilities}>
      <View>
        <Text style={tailwind("text-blue-600")}>Hello world</Text>
        <StatusBar style="auto" />
      </View>
    </TailwindProvider>
  );
}

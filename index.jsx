import { StyleSheet } from "react-native";
import ReadyForOperations from './screens/ReadyForOperations'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NameOperations from "./screens/NameOperations"
import OnBreak from "./screens/OnBreak"
import EndJobScreen from "./screens/EndJobScreen"
import ChangeJob from "./screens/ChangeJob"
import Logout from "./screens/Logout"

const Stack = createNativeStackNavigator();

export default function Index() {
  return (
      <Stack.Navigator>

        <Stack.Screen name="Home" component={ReadyForOperations}/>
        <Stack.Screen name="EndJob" component={EndJobScreen}/>
        <Stack.Screen name="Logout" component={Logout}/>
        <Stack.Screen name="Login" component={NameOperations}/>
        <Stack.Screen name="TakeBreak" component={OnBreak}/>
        <Stack.Screen name="ChangeJob" component={ChangeJob}/>
      
      </Stack.Navigator>
      
  );
}

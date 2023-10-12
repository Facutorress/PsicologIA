import {
  StyleSheet
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Menu from './Views/Menu'
import Chat from './Views/Chat'
import SignIn from './Views/SignIn';
import Mindfulness from './Views/Mindfulness'
import Lluvia from './Views/Lluvia'
import { enableScreens } from 'react-native-screens';
import { SafeAreaProvider } from 'react-native-safe-area-context';
enableScreens();
const Stack = createStackNavigator(); // Asegúrate de que esta línea esté presente

export default function App() {
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Landing">
        <Stack.Screen name="Landing" component={SignIn} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Chat" component={Chat} />
        <Stack.Screen name="Mindfulness" component={Mindfulness} />
         <Stack.Screen name="Lluvia" component={Lluvia} />
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

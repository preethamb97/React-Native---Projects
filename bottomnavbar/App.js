import { StyleSheet, Text, View } from 'react-native';;
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator>

        <Tab.Screen name={"Home"} component={HomeScreen}></Tab.Screen>
        <Tab.Screen name={"Settings"} component={SettingsScreen}></Tab.Screen>
        <Tab.Screen name={"Notification"} component={NofificationScreen}></Tab.Screen>
        </Tab.Navigator>
      </NavigationContainer>
  );
}

function SettingsScreen() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
      SettingsScreen
      </Text>
    </View>
  )
}

function HomeScreen() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
      HomeScreen
      </Text>
    </View>
  )
}

function NofificationScreen() {
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>
      NofificationScreen
      </Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

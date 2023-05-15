import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createAppContainer } from "react-navigation";
import Resturant from './Screen/Resturant';
import HomeChef from './Screen/HomeChef';
import TempleScreen from './Screen/TempleScreen';
import GroceryScreen from './Screen/GroceryScreen';
import ProductDetailsScreen from './Screen/ProductDetailsScreen';
import { MaterialIcons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Ionicons } from "@expo/vector-icons";
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
   <NavigationContainer>
    <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarIcon: ({focused,color,size}) =>{
        if(route.name === "Resturant"){
          return(
            <Ionicons name="restaurant" size={24} color={focused ? "#F79540" : 'grey'} />
          )
        }
        else if(route.name === "HomeChef"){
          return(
            <MaterialCommunityIcons name="chef-hat" size={24} color={focused ? "#F79540" : 'grey'}  />
          )
        }
        else if(route.name === "TempleScreen"){
          return(
            <MaterialCommunityIcons name="pyramid" size={24} color={focused ? "#F79540" : 'grey'}  />
          )
        }
        else if(route.name === "GroceryScreen"){
          return(
            <MaterialIcons name="local-grocery-store" size={24} color={focused ? "#F79540" : 'grey'}/>
          )
        }
      },
      tabBarInactiveTintColor: 'gray',
      tabBarActiveTintColor: '#F79540',
    })}
    
    >
      <Tab.Screen name="Resturant" component={Resturant}/>
      <Tab.Screen name="HomeChef" component={HomeChef}/>
      <Tab.Screen name="TempleScreen" component={TempleScreen}/>
      <Tab.Screen name="GroceryScreen" options={{headerShown: false}} component={ProductDetailsScreen}/>
    </Tab.Navigator>
   </NavigationContainer>
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

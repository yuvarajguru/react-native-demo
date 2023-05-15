import React from "react";
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    TouchableOpacity,
  } from 'react-native';
  import {createNativeStackNavigator} from '@react-navigation/native-stack';
  
import GroceryScreen from "./GroceryScreen";
import DemoScreen from './DemoScreen';
  const Stack = createNativeStackNavigator();

function ProductDetailsScreen () {
    return (
        <View style={styles.container}>
         
            <Stack.Navigator>
                <Stack.Screen 
                name="GroceryScreen"
                component={GroceryScreen}
                />
                <Stack.Screen 
                name="nestedscreen"
                component={DemoScreen}
                />
            </Stack.Navigator>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        textAlign:'center'
    }
});


export default ProductDetailsScreen;
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from '../../screens/Home/Home';


const Stack = createStackNavigator();

export default function HomeStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#700B97', 
            },

            headerTintColor: 'white',

            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold"
            },
          }}>
              
            <Stack.Screen
                name="home"
                component={Home}
                options={{title: "Home"}}
            />
        </Stack.Navigator>
    );
} 
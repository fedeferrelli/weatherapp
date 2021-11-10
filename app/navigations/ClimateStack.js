import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Climate from '../../screens/Climate';

const Stack = createStackNavigator();

export default function ClimateStack(){
    return(
        <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#F0A500', 
            },

            headerTintColor: 'white',

            headerTitleAlign: "center",

            headerTitleStyle: {
              fontSize: 18,
              fontWeight: "bold"
            },
          }}>
              
            <Stack.Screen
                name="climate"
                component={Climate}
                options={{title: "Ver Clima"}}
            />
        </Stack.Navigator>
    );
} 
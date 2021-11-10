import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Maps from '../../screens/Maps';

const Stack = createStackNavigator();

export default function MapsStack(){
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
                name="maps"
                component={Maps}
                options={{title: "Maps"}}
            />
        </Stack.Navigator>
    );
} 
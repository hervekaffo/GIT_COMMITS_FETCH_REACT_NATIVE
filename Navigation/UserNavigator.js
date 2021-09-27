import React from "react"
import { createStackNavigator } from '@react-navigation/stack'

import Login from '../Screens/Login'

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen 
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            
        </Stack.Navigator>
    )
}

export default function UserNavigator() {
    return <MyStack />
}
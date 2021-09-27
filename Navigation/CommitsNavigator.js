import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Commits from '../Screens/Commits';

const Stack = createStackNavigator()


function MyStack() {
    return(
        <Stack.Navigator>
            <Stack.Screen 
                name='Commits'
                component={Commits}
                options={{
                    headerShown: false,
                }}
            />
        </Stack.Navigator>
    )
    
}


export default function CommitsNavigator() {
    return <MyStack />;
}
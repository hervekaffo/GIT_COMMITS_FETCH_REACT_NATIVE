import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import Commits from '../Screens/Commits';
import CommitDetails from '../Screens/CommitDetails';

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
            <Stack.Screen 
                name='Commit Detail'
                component={CommitDetails}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    )
    
}


export default function CommitsNavigator() {
    return <MyStack />;
}
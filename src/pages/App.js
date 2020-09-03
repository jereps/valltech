import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import UserContextProvider from '../contexts/UserContext'

import LoginScreen from './LoginScreen'
import SelectValidation from './SelectValidation'
import Validacoes from './Validacoes'
import Can from './Can'

const Stack = createStackNavigator();
            
function MyStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Login" component={LoginScreen} options={styleNavigation}/>

            <Stack.Screen 
                name="SelectValidation" component={SelectValidation} options={styleNavigation}/>   

            <Stack.Screen 
            name="Validacoes" component={Validacoes} options={styleNavigation}/> 

            <Stack.Screen 
            name="Can" component={Can} options={styleNavigation}/> 

            </Stack.Navigator>
    );
}

export default function App() {
    return (
        <UserContextProvider>
            <NavigationContainer>
                    <MyStack />
            </NavigationContainer>
        </UserContextProvider>
    )
}

const styleNavigation = {
    title: "VALLTECH",
    headerStyle: {
        backgroundColor: '#b4b3b7',
        borderBottomWidth: 3,
        borderBottomColor: '#969499',
        elevation: 1,
    },
    headerTitleStyle: {
        fontWeight: 'bold',
        color: '#e96b00',
        fontSize: 30,
        flexGrow: 1,
        textAlign: 'center',
    },
}
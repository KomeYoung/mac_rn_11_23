import { createStackNavigator } from '@react-navigation/stack';
import React from "react";
import MyApp from "./ui_js/navigation/MyApp";
import PageView1 from "./ui_js/navigation/page/PageView1";
import {createAppContainer} from "react-navigation";
import {View} from "react-native";

const Stack = createStackNavigator();

function MyStack() {
    return (
        <Stack.Navigator
            initialRouteName="Home"
            headerMode="screen"
            screenOptions={{
                headerTintColor: 'white',
                headerStyle: { backgroundColor: 'tomato' },
            }}
        >
            <Stack.Screen
                name="Home"
                component={MyApp}
                options={{
                    title: 'Awesome app',
                }}
            />
            <Stack.Screen
                name="Profile"
                component={PageView1}
                options={{
                    title: 'My profile',
                }}
            />
            <Stack.Screen
                name="Settings"
                component={PageView1}
                options={{
                    gestureEnabled: false,
                }}
            />
        </Stack.Navigator>
    );
}

const AppNavigatorContainer  = createAppContainer(MyStack);
class StackNavigator extends React.Component {
    render(){
        return(
            <View style={{flex:1}}>
                <AppNavigatorContainer />
            </View>
        );
    }
}

export default StackNavigator;

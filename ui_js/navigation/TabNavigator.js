/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import * as React from 'react';
import { Component } from 'react';
import {Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import SettingsScreen from './SettingsScreen';
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
export default class App extends Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <NavigationContainer>
                <Stack.Navigator mode="modal">
                    <Stack.Screen name="home" options={{title:'首页'}} component={TabBar} />
                    <Stack.Screen name="userList" options={{title:'用户列表'}} component={HomeScreen}/>
                    <Stack.Screen name="allOrder" options={{title:'所有订单'}} component={SettingsScreen}/>
                    {/*<Stack.Screen name="TopNav" component={TopNav}/>*/}
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
};
function TabBar(){
    return(
        <Tab.Navigator
            screenOptions={({route})=>({
                tabBarIcon:({focused,size,color})=>{
                    let icon;
                    if(route.name==="首页"){
                        icon = focused ?
                            (
                                <Image
                                    source={ require('./images/home1.png') }
                                    style={{ width: 25, height: 25, }} />
                            ) : ( <Image
                                source={ require('./images/home.png') }
                                style={{ width: 25, height: 25, }} />)
                    }else if(route.name==="我的"){
                        icon = focused ? (
                            <Image
                                source={ require('./images/me1.png') }
                                style={{ width: 25, height: 25, }} />
                        ) : (<Image
                            source={ require('./images/me.png') }
                            style={{ width: 25, height: 25, }} />)
                    }
                    return icon;
                }
            })}
            tabBarOptions={{activeTintColor:"#07B5D1",inactiveTintColor:"gray"}}
        >
            <Tab.Screen name="首页" component={HomeScreen}/>
            <Tab.Screen name="我的" component={SettingsScreen}/>
        </Tab.Navigator>
    )
}

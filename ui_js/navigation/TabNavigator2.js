// import * as React from 'react';
// import { Component } from 'react';
// import {Button,Image} from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import TabNavigator from "react-native-tab-navigator";
// import defaults from "@babel/runtime/helpers/esm/defaults";
// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
// class MyHomeScreen2 extends React.Component {
//     static navigationOptions = {
//         tabBarLabel: 'Home',
//         // Note: By default the icon is only shown on iOS. Search the showIcon option below.
//         tabBarIcon: ({ tintColor }) => (
//             <Image
//                 source={require('./chats-icon.png')}
//                 style={[styles.icon, {tintColor: tintColor}]}
//             />
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.navigate('Notifications')}
//                 title="Go to notifications"
//             />
//         );
//     }
// }
//
// class MyNotificationsScreen2 extends React.Component {
//     static navigationOptions = {
//         tabBarLabel: 'Notifications',
//         tabBarIcon: ({ tintColor }) => (
//             <Image
//                 source={require('./notif-icon.png')}
//                 style={[styles.icon, {tintColor: tintColor}]}
//             />
//         ),
//     };
//
//     render() {
//         return (
//             <Button
//                 onPress={() => this.props.navigation.goBack()}
//                 title="Go back home"
//             />
//         );
//     }
// }
//
// const styles = StyleSheet.create({
//     icon: {
//         width: 26,
//         height: 26,
//     },
// });
//
// const MyApp22 = TabNavigator({
//     Home: {
//         screen: MyHomeScreen2,
//     },
//     Notifications: {
//         screen: MyNotificationsScreen2,
//     },
// }, {
//     tabBarPosition: 'top',
//     animationEnabled: true,
//     tabBarOptions: {
//         activeTintColor: '#e91e63',
//     },
// });
//

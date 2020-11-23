/**
 * @format
 */

import {AppRegistry, Button, Image} from 'react-native';
import App from './App';
import FlexUI from './ui_js/FlexUI';
import {name as appName} from './app.json';
// import { Navigation } from "react-native-navigation";
// import {Scene, Router} from 'react-native-router-flux'
import React from "react";
//----
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabNavigator from "react-native-tab-navigator";

//导入stack导航组件
// import { StackNavigator } from 'react-navigation';
import {
    StyleSheet
} from 'react-native';
import MyApp from "./ui_js/navigation/MyApp";
import StackNavigator from "./index3";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
// const SimpleApp = StackNavigator({
//     Home: { screen: MyApp },
// });
AppRegistry.registerComponent(appName, () => MyApp);
// Navigation.registerComponent('com.myApp.WelcomeScreen', () => App);
// Navigation.events().registerAppLaunchedListener(() => {
//        Navigation.setRoot({
//              root: {
//                stack: {
//                      children: [
//                            {
//                              component: {
//                                name: 'com.myApp.WelcomeScreen'
//                              }
//                        }
//                      ]
//                    }
//              }
//       });
//     });


// class App2 extends React.Component {
//     render() {
//         return <Router>
//             <Scene key="root">
//                 <Scene key="login" component={App} title="Login"/>
//                 <Scene key="register" component={FlexUI} title="Register"/>
//                 {/*<Scene key="home" component={Home}/>*/}
//             </Scene>
//         </Router>
//     }
// }

class MyHomeScreen2 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Home',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/ic_launcher_round.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen2 extends React.Component {
    static navigationOptions = {
        tabBarLabel: 'Notifications',
        tabBarIcon: ({tintColor}) => (
            <Image
                source={require('./image/ic_launcher_round.png')}
                style={[styles.icon, {tintColor: tintColor}]}
            />
        ),
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 26,
        height: 26,
    },
});

const MyApp22 = TabNavigator({
    Home: {
        screen: MyHomeScreen2,
    },
    Notifications: {
        screen: MyNotificationsScreen2,
    },
}, {
    tabBarPosition: 'top',
    animationEnabled: true,
    tabBarOptions: {
        activeTintColor: '#e91e63',
    },
});


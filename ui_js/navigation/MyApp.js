/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';
import Head from './Head';
import HomeScreen from "./HomeScreen";
import {NavigationContainer} from "@react-navigation/native";

export default class MyApp extends Component {
    constructor() {
        super();
        this.state = {
            selectedTab: '我的'
        }
    }

    render() {
        return (
            <NavigationContainer>
                <View style={styles.container}>
                    <Head title={this.state.selectedTab}/>
                    <TabNavigator tabBarStyle={{height: 60}} style={{flex: 1}}>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '首页'}
                            title="首页"
                            titleStyle={styles.tabText}
                            selectedTitleStyle={styles.selectedTabText}
                            renderIcon={() => <Image style={styles.icon}
                                                     source={require('../../image/icon_home_normal.png')}/>}
                            renderSelectedIcon={() => <Image style={styles.icon}
                                                             source={require('../../image/icon_home_press.png')}/>}
                            onPress={() => this.setState({selectedTab: '首页'})}>
                            {/*<HomeScreen/>*/}
                            <View style={styles.content}>
                                <Text>{this.state.selectedTab}</Text>
                            </View>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '应急'}
                            title="应急"
                            titleStyle={styles.tabText}
                            selectedTitleStyle={styles.selectedTabText}
                            renderIcon={() => <Image style={styles.icon} source={{uri: 'icon_menu_message'}}/>}
                            renderSelectedIcon={() => <Image style={styles.icon} source={{uri: 'icon_menu_message'}}/>}
                            onPress={() => this.setState({selectedTab: '应急'})}>
                            <View style={styles.content}>
                                <Text>{this.state.selectedTab}</Text>
                            </View>
                        </TabNavigator.Item>
                        <TabNavigator.Item
                            selected={this.state.selectedTab === '我的'}
                            title="我的"
                            titleStyle={styles.tabText}
                            selectedTitleStyle={styles.selectedTabText}
                            renderIcon={() => <Image style={styles.icon} source={{uri: 'icon_menu_user'}}/>}
                            renderSelectedIcon={() => <Image style={styles.icon} source={{uri: 'icon_menu_user'}}/>}
                            onPress={() => this.setState({selectedTab: '我的'})}>
                            <View style={styles.content}>
                                <Text>{this.state.selectedTab}</Text>
                            </View>
                        </TabNavigator.Item>
                    </TabNavigator>
                </View>
            </NavigationContainer>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabText: {
        color: "#666666",
        fontSize: 13
    },
    selectedTabText: {
        color: "#ff8a00",
        fontSize: 13
    },
    icon: {
        width: 25,
        height: 25
    },
    content: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    }
});


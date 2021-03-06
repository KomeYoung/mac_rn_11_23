// import React from "react";
// import TabNavigator from "react-native-tab-navigator";
//
// class MyHomeScreen extends React.Component {
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
// class MyNotificationsScreen extends React.Component {
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
// const MyApp = TabNavigator({
//     Home: {
//         screen: MyHomeScreen,
//     },
//     Notifications: {
//         screen: MyNotificationsScreen,
//     },
// }, {
//     tabBarPosition: 'top',
//     animationEnabled: true,
//     tabBarOptions: {
//         activeTintColor: '#e91e63',
//     },
// });

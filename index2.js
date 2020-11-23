import {AppRegistry, Button, View,Image} from 'react-native';
import React from "react";
import {createStackNavigator} from '@react-navigation/stack';
import MyApp from "./ui_js/navigation/MyApp";
import PageView1 from "./ui_js/navigation/page/PageView1";
import {createAppContainer} from "react-navigation";
const rootStack = createStackNavigator(
    // 路由页面
    {
        Page1: { screen: MyApp },
        Page2: { screen: PageView1, params: {}} // 第二个参数params为页面入参
    },
    // 路由其它信息
    {
        initialRouteName: 'Page1', // 初始页，必须是路由配置页面中的某一个
        initialRouteParams: {}, // 初始页入参
        // mode: '', // 系统的页面切换动画风格，目前只有默认card和模态风格modal两种。但本人3.X版本测试结果是仅剩modal一种，一般这个配置不做设置
        // headerMode: 'none' // none时表示隐藏头部的导航栏，默认情况下不做设置
        // 导航栏配置
        defaultNavigationOptions: {
            headerStyle:{}, // 导航栏样式
            headerTitle:'', // 或使用title，导航栏标题
            headerTitleStyle:{}, // 导航栏标题样式
            // headerLeft:(<View />), // 导航栏左边如返回等的显示容器
            // headerRight:(<View />), // 导航栏右边如工具等的显示容器
            gesturesEnabled: false, // 是否支持滑动返回手势，iOS默认支持，安卓默认关闭
        },
        // 自定义页面切换动画配置
        transitionConfig: () => ({
            // some code
        })
    }
);

const AppNavigatorContainer  = createAppContainer(rootStack);
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

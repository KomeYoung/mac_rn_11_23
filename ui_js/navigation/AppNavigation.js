import React from 'react';
import {createStackNavigator} from 'react-navigation';
import {Button} from 'react-native';

import HomePage from '../pages/home';
import CommentPage from '../pages/comment';
import ListPage from '../pages/list';
import LoginPage from '../pages/login';
import DetailPage from '../pages/detail';
import PersonPage from '../pages/person';

export const AppStackNavigator = createStackNavigator({
    HomePage: {
        screen: HomePage,
    },
    CommentPage: {
        screen: CommentPage,
        //在这里定义每个页面的导航属性，静态配置,
        navigationOptions: {
            title: 'This is CommentPage.',
        },
    },
    ListPage: {
        screen: ListPage,
        // 动态设置navigationOptions,代码中可以看出Page3的navigationOptions依赖于props这个变量所以是动态的，
        // 当props中的内容发生变化时，navigationOptions也会跟着变化
        navigationOptions: ({navigation}) => ({
            title: `${navigation.state.params.name}页面名`,
        }),
    },
    PersonPage: {
        screen: PersonPage,
        navigationOptions: props => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                title: params.title ? params.title : 'This is PersonPage.',
                headerRight: (
                    <Button
                        title={params.mode === 'edit' ? '编辑' : '保存'}
                        onPress={() =>
                            setParams({mode: params.mode === 'edit' ? '' : 'edit'})
                        }
                    />
                ),
            };
        },
    },
    LoginPage: {
        screen: LoginPage,
        navigationOptions: {
            title: 'This is LoginPage.',
        },
    },
    DetailPage: {
        screen: DetailPage,
        navigationOptions: {
            title: 'This is DetailPage.',
        },
    },
});

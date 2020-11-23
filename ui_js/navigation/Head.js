import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity
} from 'react-native';
import {Dimensions} from 'react-native'
export default class dh extends Component{
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.navBarStyle}>
                    {/* 中间标题 */}
                    <Text style={styles.navBarTitleStyle}>{this.props.title}</Text>
                </View>
            </View>
        );
    }

}




var styles = StyleSheet.create({
    container: {
        backgroundColor:'yellow',
    },

    navBarStyle: {
        width: Dimensions.get('window').width,
        // 尺寸
        // 当前系统为iOS时,导航栏高度为64
        height:Platform.OS === 'ios' ? 64 : 44,
        // 背景颜色
        backgroundColor:'rgba(255, 255, 255, 0.9)',
        // 底部分隔线
        borderBottomWidth:0.5,
        borderBottomColor:'gray',

        // 当前系统为iOS时,下次移动15
        paddingTop:Platform.OS === 'ios' ? 40 : 0
    },



    navBarTitleStyle: {
        // 字体大小
        fontSize:17,
        // 字体颜色
        color:'black',
        alignSelf: 'center',
        alignItems: 'center'
    }
});


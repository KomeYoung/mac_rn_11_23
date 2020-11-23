/**
 * @author lenovo
 * @date 2020-11-12 23:21
 */
import React, {Component} from 'react';
import {Text, Dimensions, ScrollView, Alert, Button, StyleSheet, View,Image} from 'react-native';
import {Card} from 'react-native-shadow-cards';
import Context from "react-native/Libraries/Image/ImageAnalyticsTagContext";

class FlexUI extends React.Component {
    render() {
        return (
            <ScrollView>
                <Image style={{width:100,height:100}} source={{uri:'https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=121352583,3553479540&fm=26&gp=0.jpg'}}/>
                {/*<Image style={{width:100,height:100}} source={{uri:'https://img.alicdn.com/tps/TB1OvT9NVXXXXXdaFXXXXXXXXXX-520-280.jpg'}}/>*/}
                <Image  source={require('../image/ic_launcher_round.png')}/>
                <Card style={{
                    backgroundColor: '#fff',
                    elevation: 24,
                    cornerRadius: 9,
                    opacity: .8,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    margin: 10,
                    width: Dimensions.get('window').width - 20,
                    flex: 1
                }}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'} style={{
                        flex: 1,
                        padding: 15,
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,

                    }}>
                        389839389839389839389839389839
                    </Text>
                </Card>
                <View style={{backgroundColor: '#f00'}}>
                    <Text numberOfLines={1} ellipsizeMode={'tail'}>738373898738373898738373898738373898738373898738373898738373898738373898738373898</Text>
                </View>
                <View style={styles.container}>
                    <View style={styles.button} title="Press Me" color="#841584" flex={1}/>
                    <Button style={styles.button} title="Press Me11" color="#841584"/>
                    <Button style={styles.button} title="Press Me11" color="#841584"/>
                </View>
                <View style={styles.container} backgroundColor={'#00ff00'}>
                    <Text style={styles.text1}>
                        1
                    </Text>
                    <Text style={styles.text2}>
                        1
                    </Text>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.text1}>
                        1
                    </Text>
                    <Text style={styles.text2}>
                        1
                    </Text>
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    {/*<Text style={{flex:1,backgroundColor:'red',textAlign: 'left',padding:10}} >*/}
                    {/*  paddingBottompaddingBottompaddingBottompad111dingBottompaddingBottompaddingBottompaddingBottompaddingBottompaddingBottom*/}
                    {/*</Text>*/}
                    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{backgroundColor: 'red', textAlign: 'left', padding: 10}}>
                            111
                        </Text>
                    </View>
                    <Text style={{
                        flex: 1,
                        backgroundColor: 'green',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,

                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        marginTop: 0,
                        borderStyle: 'dotted',
                        borderWidth: 10,
                        borderRadius: 18,
                        borderColor: 'red'
                    }}>
                        哈哈哈哈哈哈
                    </Text>
                    <Text style={{
                        backgroundColor: 'orange',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        1389308
                    </Text>
                </View>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'stretch',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start'
                }}>
                    {/*<Text style={{flex:1,backgroundColor:'red',textAlign: 'left',padding:10}} >*/}
                    {/*  paddingBottompaddingBottompaddingBottompad111dingBottompaddingBottompaddingBottompaddingBottompaddingBottompaddingBottom*/}
                    {/*</Text>*/}
                    <View style={{justifyContent: 'center', alignItems: 'center', width: 40}}>
                        <Text style={{backgroundColor: 'red', textAlign: 'left', padding: 10, flexWrap: 'nowrap'}}>
                            222
                        </Text>
                    </View>
                    <Text style={{
                        backgroundColor: 'green',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,
                        width: 40,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        marginTop: 10
                    }}>
                        111
                    </Text>
                    <Text style={{
                        marginTop: 10,
                        backgroundColor: 'orange',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10,
                        width: 40
                    }}>
                        1389308
                    </Text>
                </View>
                <View style={{flexDirection: 'column', alignItems: 'center', flexWrap: 'nowrap'}}>
                    {/*<Text style={{flex:1,backgroundColor:'red',textAlign: 'left',padding:10}} >*/}
                    {/*  paddingBottompaddingBottompaddingBottompad111dingBottompaddingBottompaddingBottompaddingBottompaddingBottompaddingBottom*/}
                    {/*</Text>*/}
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={{backgroundColor: 'red', textAlign: 'left', padding: 10, flexWrap: 'nowrap'}}>
                            111
                        </Text>
                    </View>
                    <Text style={{
                        backgroundColor: 'green',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        marginTop: 10
                    }}>
                        1117494489048440
                    </Text>
                    <Text style={{
                        marginTop: 10,
                        backgroundColor: 'orange',
                        textAlign: 'center',
                        textAlignVertical: 'center',
                        color: '#f0f',
                        fontSize: 40,
                        paddingTop: 10,
                        paddingBottom: 10,
                        paddingLeft: 10,
                        paddingRight: 10
                    }}>
                        1389308
                    </Text>
                </View>


            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff0000',
        borderLeftWidth: 30,
        width: 300,
        flexDirection: 'row',
    }, container2: {
        backgroundColor: '#00f',
        borderLeftWidth: 10,
        justifyContent: 'center',
        // flexDirection: 'column',
    },
    button: {
        width: 50,
        height: 50,
        borderLeftWidth: 10,
        borderLeftColor: 'red',
    },
    text1: {
        backgroundColor: '#fff',
        textAlign: 'center',
        textAlignVertical: 'center',
        width: 50,
        height: 50,
        fontStyle: 'italic',
    },
    text2: {
        backgroundColor: '#ff0',
        width: 50,
        height: 50,
        fontStyle: 'normal',
    },
});
export default FlexUI;

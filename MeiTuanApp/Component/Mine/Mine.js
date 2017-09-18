/**
 * Created by FineexMac on 2017/9/13.
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';

// 导入外部的组件
var MineCell = require('./MineCommonCell');
var MineMiddleView = require('./MineMiddleView');
var HeaderView = require('./MineHeaderView');

var Mine = React.createClass({
    render() {
        return (
            <ScrollView
                style={styles.scrollViewStyle}
                contentInset = {{top: -200}}
                contentOffset = {{y:200}}
            >
                {/*头部的View*/}
                <HeaderView />

                <View>
                    <MineCell
                        leftIconName="collect"
                        leftTitle="我的订单"
                        rightTitle="查看全部订单"
                    />
                    <MineMiddleView />
                </View>

                <View style={{marginTop:10}}>
                    <MineCell
                        leftIconName="draft"
                        leftTitle="美团钱包"
                        rightTitle="账户余额:¥1000"
                    />

                    <MineCell
                        leftIconName="like"
                        leftTitle="抵用券"
                        rightTitle="10张"
                    />
                </View>


                <View style={{marginTop:10}}>
                    <MineCell
                        leftIconName="card"
                        leftTitle="积分商城"
                    />
                </View>

                <View style={{marginTop:10}}>
                    <MineCell
                        leftIconName="new_friend"
                        leftTitle="今日推荐"
                        rightIconName="me_new"
                    />
                </View>

                <View style={{marginTop:10}}>
                    <MineCell
                        leftIconName="pay"
                        leftTitle="我要合作"
                        rightTitle="轻松开店,招财进宝"
                    />
                </View>
            </ScrollView>
        );
    }
});


const styles = StyleSheet.create({
    scrollViewStyle:{
        backgroundColor:'#f5f5f5'
    }
});

// 输出组件类
module.exports = Mine;

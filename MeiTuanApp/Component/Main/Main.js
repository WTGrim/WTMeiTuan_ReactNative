/**
 * Created by FineexMac on 2017/9/13.
 */



import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    Platform,  //判断当前运行的系统
    Navigator
} from 'react-native';


/**导入外部的组件类*/
import TabNavigator from 'react-native-tab-navigator';

var Home = require('../Home/Home')
var Shop = require('../Shop/Shop')
var Mine = require('../Mine/Mine')
var More = require('../More/More')

var Main =  React.createClass({

    //初始化函数(状态机)
    getInitialState(){
      return{
          selectedTab:'home'
      }
    },

    render() {
        return (
           <TabNavigator>
               {/**首页*/}
               {this.renderTabBarItem('首页', 'tab_activity_normal_27x27_', 'tab_activity_inverse_27x27_highlighted', 'home', '首页', Home)}

               {/**商家*/}
               {this.renderTabBarItem('商家', 'tab_trends_normal_27x27_', 'tab_trends_inverse_27x27_highlighted', 'shop', '商家', Shop)}

               {/**我的*/}
               {this.renderTabBarItem('我的', 'tab_my_normal_27x27_', 'tab_my_inverse_27x27_highlighted', 'mine', '我的', Mine)}

               {/**更多*/}
               {this.renderTabBarItem('更多', 'tab_find_normal_27x27_', 'tab_find_inverse_27x27_highlighted', 'more', '更多', More, '2')}

           </TabNavigator>
        );
    },

    //每一个TabBarItem
    renderTabBarItem(title, iconName, selecteIconName, selectedTab, componentName, component, badgeText){
        return(
            <TabNavigator.Item
                title={title}   //这里传递变量一定要加上大括号
                renderIcon={() => <Image source={{uri:iconName}} style={styles.iconStyle}/>}
                renderSelectedIcon={() => <Image source={{uri:selecteIconName}} style={styles.iconStyle}/>}
                onPress={() => {this.setState({selectedTab:selectedTab})}}
                selected={this.state.selectedTab === selectedTab}
                selectedTitleStyle={styles.selectedTitleStyle}
                badgeText={badgeText}
            >
                <Navigator
                    initialRoute={{name:componentName, component:component}}
                    configureScene={() => {
                        return Navigator.SceneConfigs.PushFromRight;
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return<Component {...route.passProps} navigator={navigator}/>
                    }}
                />

            </TabNavigator.Item>

        )
    }
});

const styles = StyleSheet.create({
    iconStyle:{
        width:Platform.OS === 'ios' ? 27 : 22,
        height:Platform.OS === 'ios' ? 27 : 22
    },

    selectedTitleStyle:{
        color:'rgba(39,198,214,1.0)'
    }

});

//输出组件
module.exports = Main;
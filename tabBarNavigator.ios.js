/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var ContextNavigator = require('./contextNavigator.ios');
var DummyScreen = require('./dummyScreen.ios');

var {
  StyleSheet,
  Component,
  Image,
  Navigator,
  TabBarIOS,
  View
} = React;



var ROUTE_STACK = [
  { 
    component: ContextNavigator,
    initialRoute: {
      name: 'Featured',
      component: DummyScreen,
      color: 'orange',
    } 
  },
  { 
    component: ContextNavigator,
    initialRoute: {
      name: 'History',
      component: DummyScreen,
      color: 'red'
    } 
  },
  { 
    component: ContextNavigator,
    initialRoute: {
      name: 'Bookmarks',
      component: DummyScreen,
      color: 'blue'
    } 
  },
  { 
    component: ContextNavigator,
    initialRoute: {
      name: 'Downloads',
      component: DummyScreen,
      color: 'green'
    } 
  },
];
var INIT_ROUTE_INDEX = 0;


var TabBarNav = React.createClass({

  getInitialState: function() {
    return {
      tabIndex: this.props.initTabIndex,
    };
  },

  render: function() {
    return (
      <View style={styles.tabs}>
      <TabBarIOS>

        <TabBarIOS.Item
          systemIcon="featured"
          selected={this.state.tabIndex === 0}
          onPress={() => {
            this.props.onTabIndex(0);
            this.setState({ tabIndex: 0, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="history"
          selected={this.state.tabIndex === 1}
          onPress={() => {
            this.props.onTabIndex(1);
            this.setState({ tabIndex: 1, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="bookmarks"
          selected={this.state.tabIndex === 2}
          onPress={() => {
            this.props.onTabIndex(2);
            this.setState({ tabIndex: 2, });
          }}>
          <View />
        </TabBarIOS.Item>

        <TabBarIOS.Item
          systemIcon="downloads"
          selected={this.state.tabIndex === 3}
          onPress={() => {
            this.props.onTabIndex(3);
            this.setState({ tabIndex: 3, });
          }}>
          <View />   
        </TabBarIOS.Item>
      </TabBarIOS>
      </View>
    );
  },

});


var TabBarNavigator = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    return (
      <Component 
        navigator={navigator} 
        route={route} 
        topNavigator={this.props.topNavigator}
        topOverlay={this.props.topOverlay}
        />
    );
  },

  render: function() {
    return (
      <Navigator
        debugOverlay={false}
        ref={(navigator) => { this.navigator = navigator; }}
        initialRoute={ROUTE_STACK[INIT_ROUTE_INDEX]}
        initialRouteStack={ROUTE_STACK}
        renderScene={this.renderScene}
        configureScene={() => ({
          ...Navigator.SceneConfigs.HorizontalSwipeJump,
          gestures: false
        })}
        navigationBar={
          <TabBarNav
            sceneStyle={styles.container}
            ref={(tabBar) => { this.tabBar = tabBar; }}
            initTabIndex={INIT_ROUTE_INDEX}
            routeStack={ROUTE_STACK}
            onTabIndex={(index) => {
              this.navigator.jumpTo(ROUTE_STACK[index]);
            }}
          />
        }
      />
    );
  }
});


var styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white'
  },
  tabs: { 
    // important! otherwise you tabs will magically flexbox their way up the screen
    height: 50,
  }

});

module.exports = TabBarNavigator;
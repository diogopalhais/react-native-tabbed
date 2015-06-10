/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var TabBarNavigator = require('./tabBarNavigator.ios');

var {
  AppRegistry,
  StyleSheet,
  Component,
  Navigator,
  View
} = React;



var App = React.createClass({

  renderScene: function(route, navigator) {
    var Component = route.component;
    console.log(this);
    return (
      <View style={styles.container}>
        <Component 
          route={route} 
          navigator={navigator} 
          topNavigator={navigator} 
          />
      </View>      
    );
  },

  render: function() {
    return (
      <View style={styles.container}>
        <Navigator
          sceneStyle={styles.container}
          ref={(navigator) => { this.navigator = navigator; }}
          renderScene={this.renderScene}
          configureScene={(route) => ({
            ...route.sceneConfig || Navigator.SceneConfigs.FloatFromBottom
          })}
          initialRoute={{ 
            component: TabBarNavigator
          }}

        />

      </View>
    );
  },

});


var styles = StyleSheet.create({
  container: {
    left: 0,
    flex: 1, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white'
  },
  navigator: {
    backgroundColor: 'white',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  }

});


AppRegistry.registerComponent('App', () => App);

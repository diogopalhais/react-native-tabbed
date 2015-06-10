/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

'use strict';

var React = require('react-native');
var NavigationBar = require('react-native-navbar');

var {
  StyleSheet,
  Component,
  Navigator,
  View
} = React;


var TabItemNavigator = React.createClass({

  renderScene: function(route, navigator) {

    var Component = route.component;
    var navBar = (
      <NavigationBar 
        title={route.name} 
        navigator={navigator}
        route={route}
        {...route.props} 
        />
    );

    return (
      <View style={styles.container}>
        {navBar}
        <Component 
          navigator={navigator} 
          route={route} 
          topNavigator={this.props.topNavigator}
          topOverlay={this.props.topOverlay}

          />

      </View>
    );
  },

  render: function() {
    return (
      <Navigator
        sceneStyle={styles.container}
        ref={(navigator) => { this.navigator = navigator; }}
        renderScene={this.renderScene}
        configureScene={(route) => ({
          ...route.sceneConfig || Navigator.SceneConfigs.FloatFromRight,
          gestures: Navigator.SceneConfigs.FloatFromRight.gestures
        })}
        initialRoute={this.props.route.initialRoute}
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
  navigator: {
    backgroundColor: 'white',
  }

});

module.exports = TabItemNavigator;
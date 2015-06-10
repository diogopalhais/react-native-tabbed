'use strict';
 
var React = require('react-native');

var {
  StyleSheet,
  View,
  Text,
  Component,
  TouchableOpacity,
} = React;


var DummyScreen = React.createClass({

  getDefaultProps: function(){
    return {
      color: 'black',
      index: 0
    };
  },

  render: function() {
    return (
      <View style={[styles.container, {justifyContent: 'center'}]}>
        <View style={{marginBottom: 16}}>
          <Text style={{textAlign: 'center'}}>Here is a screen</Text>
        </View>
        <View style={{marginBottom: 16}}>
          <TouchableOpacity
            onPress={()=>{
              this.props.navigator.push({
                component: require('./modalScreen.ios'),
                name: this.props.route.name,
                color: "black"
              });
            }}
            >
              <View style={{backgroundColor: this.props.route.color, padding: 8, borderRadius: 3}}>
                  <Text style={{color: 'white', textAlign: 'center'}}>Push a new screen</Text>
              </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    left: 0, // https://github.com/facebook/react-native/issues/1332
    backgroundColor: 'white',
    padding: 16
  },

});
 
module.exports = DummyScreen;
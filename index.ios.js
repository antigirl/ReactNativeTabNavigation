'use strict';

var React = require('react-native');
var Dimensions = require('Dimensions');
var window = Dimensions.get('window');
var Feed = require('./components/Feed');
var Settings = require('./components/Settings');
var Matches = require('./components/Matches');

var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  TouchableOpacity
} = React;

var ROUTE_STACK = [
    {
        name: 'settings'
    }, {
        name: 'feed'
    }, {
        name: 'matches'
    }
];
var NavigationBarRouteMapper = {

    LeftButton: function(route, navigator, index, navState) {
        var title = '';
        var previousRoute = navState.routeStack[index - 1];
        if (previousRoute) {
            title = previousRoute.name;

            return (
                <TouchableOpacity onPress={() => navigator.jumpBack()} style={styles.navBarLeftButton}>
                    <Text style={[
                        styles.navBarText, styles.navBarButtonText
                    ]}>
                        {title}
                    </Text>
                </TouchableOpacity>
            );
        }
    },

    RightButton: function(route, navigator, index, navState) {
        var title = '';
        var nextRoute = navState.routeStack[index + 1];
        if (nextRoute) {
            title = nextRoute.name;

            return (
                <TouchableOpacity onPress={() => navigator.jumpForward()} style={styles.navBarRightButton}>
                    <Text style={[
                        styles.navBarText, styles.navBarButtonText
                    ]}>
                        {title}
                    </Text>
                </TouchableOpacity>
            );
        }
    },

  Title: function(route, navigator, index, navState) {
    return (
      <Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.name.toUpperCase()}
      </Text>
    );
  },

};

var incident = React.createClass({
renderScene: function (route, navigator) {
    switch (route.name) {
        case 'settings':
        return <Settings navigator={navigator}/>
        break;

        case 'feed':
        return <Feed navigator={navigator}/>
        break;

        case 'matches':
        return <Matches navigator={navigator}/>
        break;
    }
},
configureScene: function(route) {
    if (route.sceneConfig) {
      return route.sceneConfig;
    }
    return Navigator.SceneConfigs.FloatFromRight;
},
  render: function() {
    return (
        <Navigator
        ref="nav"
        initialRoute={ROUTE_STACK[1]}
        initialRouteStack={ROUTE_STACK}
        renderScene={this.renderScene}
        configureScene={this.configureScene}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  navBar: {
     backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: 'blue',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
});

AppRegistry.registerComponent('incident', () => incident);

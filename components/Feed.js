var React = require('react-native');

var {
    View, Text, StyleSheet, Navigator, TouchableWithoutFeedback} = React;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#35478C'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    }
});

var Feed = React.createClass({
    render: function() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Feed</Text>
            </View>
        )
    }
});

module.exports = Feed;

var React = require('react-native');

var {
    View, Text, StyleSheet, Navigator, TouchableWithoutFeedback} = React;

var styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: 'red'
    },
    title: {
        marginBottom: 20,
        fontSize: 25,
        textAlign: 'center',
        color: '#fff'
    }
});

var Matches = React.createClass({
    render: function() {
        return (
            <View style={styles.mainContainer}>
                <Text style={styles.title}>Matches</Text>
            </View>
        )
    }
});

module.exports = Matches;

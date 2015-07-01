var React = require('react-native');
var { StyleSheet } = React;

var styles = Object.assign({}, {
    container: {
        height: 320,
        marginTop: 10
    },
    weeks: {
        flexDirection: 'column'
    },
    weekRow: {
        flexDirection: 'row'
    },
    dayWrapper: {
        width: 30,
        height: 20,
        margin: 5,
        backgroundColor: '#f00'
    },
    day: {
        alignSelf: 'center'
    },
    textEl: {
        width: 30,
        height: 30,
        margin: 5
    }
});

module.exports = StyleSheet.create(styles);
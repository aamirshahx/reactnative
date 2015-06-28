var React = require('react-native');
var { StyleSheet } = React;

var styles = Object.assign({}, {
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#ccc',
        backgroundColor: '#F5FCFF',
        borderWidth: 0.5,
        height: 80
    },
    loadingContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    rightContainer: {
        flex: 1,
        paddingLeft: 10,
        backgroundColor: '#F5FCFF'
    },
    title: {
        textAlign: 'left',
        fontWeight: 'bold',
        fontSize: 13,
        marginBottom: 8
    },
    year: {
        textAlign: "left",
        fontSize: 12
    },
    thumbnail: {
        width: 53,
        height: 72,
        marginLeft: 5
    },
    listView: {
        paddingTop: 20,
        backgroundColor: "#F5FCFF"
    },
    navigator: {
        flex: 1
    }
});

module.exports = StyleSheet.create(styles);
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var css = require('./src/styles/styles');
var {
    AppRegistry,
    Image,
    ListView,
    NavigatorIOS,
    Text,
    View
} = React;


var mockedData = [
    {
        title: "Title",
        year: "2015",
        poster: {
            thumbnail: 'http://i.imgur.com/UePbdph.jpg'
        }
    }
];

var REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json'

var myView = React.createClass({
    fetchData: function(){
        fetch(REQUEST_URL).then((response)=>response.json()).then((responseData) => {
            this.setState({
                loaded: true,
                dataSource: this.state.dataSource.cloneWithRows(responseData.movies)
            });
        }).done();
    },
    renderLoadingView: function(){
        return (
            <View style={css.loadingContainer}>
                <Text>Loading...</Text>
            </View>
        );
    },
    renderMovieView: function(movie){
        return (
            <View style={css.container}>
                <Image style={css.thumbnail} source={{uri: movie.posters.thumbnail}} />

                <View style={css.rightContainer}>
                    <Text style={css.title}>{movie.title}</Text>
                    <Text style={css.year}>{movie.year}</Text>
                </View>
            </View>
        );
    },
    onClick: function(){
        console.log('e')
    },
    getInitialState: function(){
        return {
            loaded: false,
            dataSource: new ListView.DataSource({
                rowHasChanged: (row1, row2) => row1 !== row2
            })
        }
    },
    componentDidMount: function(){
        this.fetchData()
    },
    render: function() {
        if(!this.state.loaded){
            return this.renderLoadingView();
        }
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderMovieView}
                style={css.listView}
                />
        );
    }
});
var reactNative = React.createClass({
    _handleBackButtonPress: function(){
        this.props.navigator.pop();
    },
    _handleNextButtonPress: function(){
        this.props.navigator.push(nextRoute);
    },
    render: function() {
        return (
            <NavigatorIOS
                initialRoute={{ component: myView, title: "The Movis" }}
                style={css.navigator}
            />
        );
    }
});
AppRegistry.registerComponent('reactNative', () => reactNative);

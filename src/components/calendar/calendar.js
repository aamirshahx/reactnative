'use strict';

var React = require('react-native');
var calendarService = require('../../service/calendar');

var {
    Text,
    View
} = React;

var Calendar = React.createClass({
    getInitialState: function(){
        return {}
    },
    componentDidMount: function(){},
    render: function() {
        var date = new Date();

        var year = date.getFullYear();
        var month = date.getMonth();

        var june = calendarService.fillMonth(month, year);

        return (
            <View>
                <Text></Text>
                <Text></Text>
                <Text>JUNE</Text>
                <Text>S M T W T F S</Text>
                <Text>{june.join('\n')}</Text>
            </View>
        );
    }
});

module.exports = Calendar;
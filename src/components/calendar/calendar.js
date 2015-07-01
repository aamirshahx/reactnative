'use strict';

var React = require('react-native');
var calendarService = require('../../service/calendar');
var css = require('../../styles/styles');

var {
    Text,
    View,
    TouchableOpacity
} = React;

var juneDate = new Date("06 01 2015");
var juneYear = juneDate.getFullYear();
var juneMonth = juneDate.getMonth();

var julyDate = new Date("07 01 2015");
var julyYear = julyDate.getFullYear();
var julyMonth = julyDate.getMonth();

var june = calendarService.fillMonth(juneMonth, juneYear);
var july = calendarService.fillMonth(julyMonth, julyYear);

var Day = React.createClass({
    getInitialState: function(){
        return {};
    },
    componentDidMount: function(){},
    render: function(){
        return (
            <View>
                <View>
                    <TouchableOpacity>
                        <Text style={css.textEl}>
                            {this.props.date}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
});

var Week = React.createClass({
    getInitialState: function(){
        return {};
    },
    render: function(){
        var weekData = this.props.week;
        var days = weekData.map(function(day, idx){
            return (<Day date={day} key={idx}/>);
        });
        return (
            <View style={{flexDirection: 'row'}}>
                {days}
            </View>
        );
    }
});

var Weeks = React.createClass({
    getInitialState: function(){
        return {};
    },
    componentDidMount: function(){},
    render: function(){
        var dataSrc = this.props.source;
        var weeksData = dataSrc.map(function(week, idx){
            return (<View><Week week={week} key={idx}/><Text></Text></View>);
        });
        return (
            <View>
                {weeksData}
            </View>
        );
    }
});

var Weekdays = React.createClass({
    render: function(){
        var days = calendarService.WeekdaysShort.map(function(day, Idx){
            return <Text key={Idx} style={css.textEl}>{day}</Text>
        });
        return (<View style={{flexDirection: 'row', backgroundColor: '#ccc'}}>{days}<Text></Text></View>)
    }
});

var Month = React.createClass({
    getInitialState: function(){
        return {}
    },
    componentDidMount: function(){},
    render: function(){
        var month = calendarService.MonthMapper[this.props.month];
        var year = this.props.year;
        var monthChart = calendarService.fillMonth(month + 1, year);

        return (
            <View>
                <Weekdays />
                <Weeks source={monthChart}/>
            </View>
        );

    }
});

var Calendar = React.createClass({
    getInitialState: function(){
        return {}
    },
    componentDidMount: function(){},
    render: function() {
        return (
            <View>
                <Text></Text>
                <Text></Text>
                <View style={css.weekRow}>
                    <Month month="June" year="2015"/>
                </View>
            </View>
        )
    }
});

module.exports = Calendar;
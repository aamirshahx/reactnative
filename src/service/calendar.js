var calendarService = {
    Weekdays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    WeekdaysShort: ["S", "M", "T", "W", "T", "F", "S"],
    Months: ["January", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    DayMapper: {
        "Sunday": "0",
        "Monday": "1",
        "Tuesday": "2",
        "Wednesday": "3",
        "Thursday": "4",
        "Friday": "5",
        "Saturday": "6",
        "0": "Sunday",
        "1": "Monday",
        "2": "Tuesday",
        "3": "Wednesday",
        "4": "Thursday",
        "5": "Friday",
        "6": "Saturday"
    },
    MonthMapper: {
        "January": "0",
        "Feburary": "1",
        "March": "2",
        "April": "3",
        "May": "4",
        "June": "5",
        "July": "6",
        "August": "7",
        "September": "8",
        "October": "9",
        "November": "10",
        "December": "11",
        "0": "January",
        "1": "Feburary",
        "2": "March",
        "3": "April",
        "4": "May",
        "5": "June",
        "6": "July",
        "7": "August",
        "8": "September",
        "9": "October",
        "10": "November",
        "11": "December"
    },

    fillMonth: function (month, year) {

        var lastDayPrevMonth = new Date(year, month, 0);
        var firstDayCurrMonth = new Date(year, month, 1);
        var lastDayCurMonth = new Date(year, month + 1, 0);

        var prevMonthLastDay = lastDayPrevMonth.getDate();
        var firstDayIdx = firstDayCurrMonth.getDay();
        var lastDayIdx = lastDayCurMonth.getDate();
        var array = [];
        var date = 1;
        var nextMonthDay = 1;

        for (var i = 0; i < 6; i++) {
            array[i] = [];
            for (var j = 0; j <= 6; j++) {
                if ((i * 6) + ((i + 1) * (j)) >= firstDayIdx && date <= lastDayIdx) {
                    array[i].push(date++)
                } else if (date > lastDayIdx) {
                    array[i].push(nextMonthDay++);
                } else if ((i + 1) * (j) < firstDayIdx) {
                    array[i].push((prevMonthLastDay - firstDayIdx) + 1 + (i + 1) * (j));
                }
            }
        }
        console.log(array, firstDayIdx, lastDayIdx);
        return array;
    }
};

module.exports = calendarService;
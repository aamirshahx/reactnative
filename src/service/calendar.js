var calendarService = {
    IdxToDayMapper: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    DayToIdxMapper: Object.keys(["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]),
    fillMonth: function(month, year){

        var lastDayPrevMonth = new Date(year, month, 0);
        var firstDayCurrMonth = new Date(year, month, 1);
        var lastDayCurMonth = new Date(year, month + 1, 0);

        var prevMonthLastDay = lastDayPrevMonth.getDate();
        var firstDayIdx = firstDayCurrMonth.getDay();
        var lastDayIdx = lastDayCurMonth.getDate();
        var array = [];
        var date = 1;
        var nextMonthDay = 1;

        for(var i=0;i<6;i++){
            array[i] = [];
            for(var j=0;j<=6;j++){
                if((i*6) + ((i+1)*(j)) >= firstDayIdx && date <= lastDayIdx){
                    array[i].push(date++)
                } else if(date > lastDayIdx){
                    array[i].push(nextMonthDay++);
                } else if((i+1)*(j) < firstDayIdx){
                    array[i].push((prevMonthLastDay - firstDayIdx) + 1 + (i+1)*(j));
                }
            }
        }
        return array;
    }
};

module.exports = calendarService;
var calendarService = require('../calendar');

var feb2014 = [
    [26, 27, 28, 29, 30, 31, 1],
    [2, 3, 4, 5, 6, 7, 8],
    [9, 10, 11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20, 21, 22],
    [23, 24, 25, 26, 27, 28, 1],
    [2, 3, 4, 5, 6, 7, 8]
];
var feb2015 = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14]
];
var april2014 = [
    [30, 31, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12],
    [13, 14, 15, 16, 17, 18, 19],
    [20, 21, 22, 23, 24, 25, 26],
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10]
];
var may2014 = [
    [27, 28, 29, 30, 1, 2, 3],
    [4, 5, 6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15, 16, 17],
    [18, 19, 20, 21, 22, 23, 24],
    [25, 26, 27, 28, 29, 30, 31],
    [1, 2, 3, 4, 5, 6, 7]
];
var june2014 = [
    [1, 2, 3, 4, 5, 6, 7],
    [8, 9, 10, 11, 12, 13, 14],
    [15, 16, 17, 18, 19, 20, 21],
    [22, 23, 24, 25, 26, 27, 28],
    [29, 30, 1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10, 11, 12]
];
var april2015 = [
    [29, 30, 31, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11],
    [12, 13, 14, 15, 16, 17, 18],
    [19, 20, 21, 22, 23, 24, 25],
    [26, 27, 28, 29, 30, 1, 2],
    [3, 4, 5, 6, 7, 8, 9]
];
var may2015 = [
    [26, 27, 28, 29, 30, 1, 2],
    [3, 4, 5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14, 15, 16],
    [17, 18, 19, 20, 21, 22, 23],
    [24, 25, 26, 27, 28, 29, 30],
    [31, 1, 2, 3, 4, 5, 6]
];
var june2015 = [
    [31, 1, 2, 3, 4, 5, 6],
    [7, 8, 9, 10, 11, 12, 13],
    [14, 15, 16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25, 26, 27],
    [28, 29, 30, 1, 2, 3, 4],
    [5, 6, 7, 8, 9, 10, 11]
];

describe('months', function () {
    it('should verify feb 2014', function () {
        var date = new Date("02 1 2014");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(feb2014);
    });
    it('should verify feb 2015', function () {
        var date = new Date("02 1 2015");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(feb2015);
    });
    it('should verify april 2014', function () {
        var date = new Date("04 1 2014");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(april2014);
    });
    it('should verify april 2015', function () {
        var date = new Date("04 1 2015");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(april2015);
    });
    it('should verify may 2014', function () {
        var date = new Date("05 1 2014");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(may2014);
    });
    it('should verify may 2015', function () {
        var date = new Date("05 1 2015");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(may2015);
    });

    it('should verify june 2014', function () {
        var date = new Date("06 1 2014");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(june2014);
    });
    it('should verify june 2015', function () {
        var date = new Date("06 1 2015");

        var year = date.getFullYear();
        var month = date.getMonth();

        expect(calendarService.fillMonth(month, year)).toEqual(june2015);
    });
});

/**
 * https://www.freecodecamp.com/challenges/friendly-date-ranges#?solution=%0Afunction%20makeFriendlyDates(arr)%20%7B%0A%20%20return%20arr%3B%0A%7D%0A%0AmakeFriendlyDates(%5B'2016-07-01'%2C%20'2016-07-04'%5D)%3B%0A
 *
 * @param {any} arr
 * @returns
 */
function makeFriendlyDates(arr) {
     var currentYear = new Date().getFullYear();
     var givenStartDate = arr[0].split("-");
     var givenStartObj = {
          year: Number(givenStartDate[0]),
          month: getMonthName(Number(givenStartDate[1])),
          day: getOrdinalDate(Number(givenStartDate[2]))
     };

     var givenEndDate = arr[1].split("-");
     var givenEndObj = {
          year: Number(givenEndDate[0]),
          month: getMonthName(Number(givenEndDate[1])),
          day: getOrdinalDate(Number(givenEndDate[2]))
     };
     var startString = "";
     var endString = "";
     var answer = [];


     // Additionally, if the date range begins in the current year
     // (i.e. it is currently the year 2016) and ends within one year,
     // the year should not be displayed at the beginning of the friendly range.
     if ((givenStartObj.year === currentYear) && (givenEndObj.year === currentYear + 1)) {
          delete givenStartObj.year;
          delete givenEndObj.year;
     }

     if (givenEndObj.year === givenStartObj.year) {
          delete givenEndObj.year;
          if(givenStartObj.year === currentYear){
                delete givenStartObj.year;
          }
          if (givenEndObj.month === givenStartObj.month) {
               delete givenEndObj.month;
               if (givenEndObj.day === givenStartObj.day) {
                    delete givenEndObj.day;
               }
          }
     }
     else if ((givenStartObj.year !== currentYear) &&
          (givenEndObj.year === givenStartObj.year + 1)) {
          if (givenEndObj.month === givenStartObj.month) {

               if (givenEndObj.day === givenStartObj.day) {
                    //delete givenEndObj.day;
               }
               else if (givenEndObj.day < givenStartObj.day) {
                    delete givenEndObj.year;
                    if (givenStartObj.year === currentYear) {
                         delete givenStartObj.year;
                    }
               }
          }
     }

     //put the start object together in a string
     startString += givenStartObj.month + " " + givenStartObj.day;
     if (givenStartObj.hasOwnProperty("year")) {
          startString += ", " + givenStartObj.year;
     }

     // put the end object together in a string
     if (givenEndObj.hasOwnProperty("month")) {
          endString += givenEndObj.month + " ";
     }
     if (givenEndObj.hasOwnProperty("day")) {
          endString += "" + givenEndObj.day;
     }
     if (givenEndObj.hasOwnProperty("year")) {
          endString += ", " + givenEndObj.year;
     }

     // put the strings into the answer array
     answer[0] = startString;
     if (endString !== "") {
          answer[1] = endString;
     }

     console.log(answer.join(" ").toString());
     return answer;
}

/**
 * getOrdinalDate
 *
 * @param {any} date
 * @returns - ordinal date; ex 1 = 1st
 */
function getOrdinalDate(i) {
     i = Number(i);
     var j = i % 10,
          k = i % 100;
     if (j == 1 && k != 11) {
          return i + "st";
     }
     if (j == 2 && k != 12) {
          return i + "nd";
     }
     if (j == 3 && k != 13) {
          return i + "rd";
     }
     return i + "th";
}

/**
 *
 *
 * @param {any} monthNumber
 * @returns - name of month given the month number; ex. 1 = "January"
 */
function getMonthName(monthNumber) {
     var months = ["January", "February", 'March', 'April', 'May',
          'June', 'July', 'August', 'September', 'October', 'November', 'December'];

     return months[monthNumber - 1];
}


makeFriendlyDates(["2016-07-01", "2016-07-04"]);
makeFriendlyDates(["2016-12-01", "2017-02-03"]);
makeFriendlyDates(["2016-12-01", "2018-02-03"]);
makeFriendlyDates(["2017-03-01", "2017-05-05"]);
makeFriendlyDates(["2018-01-13", "2018-01-13"]);
makeFriendlyDates(["2022-09-05", "2023-09-04"]);
makeFriendlyDates(["2022-09-05", "2023-09-05"]);
var dateDiffInDays = function (date1, date2) {
  //   write your code here
	const utcDate1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
    const utcDate2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());

    // Calculate the difference in days
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor((utcDate2 - utcDate1) / millisecondsInDay);

    return differenceInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date.");
const dateTwo = prompt("Enter End Date.");
alert(dateDiffInDays(dateOne, dateTwo));

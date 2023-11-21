var dateDiffInDays = function (date1, date2) {
    // Convert input strings to Date objects
    const parsedDate1 = new Date(date1);
    const parsedDate2 = new Date(date2);

    // Convert to UTC dates
    const utcDate1 = Date.UTC(parsedDate1.getFullYear(), parsedDate1.getMonth(), parsedDate1.getDate());
    const utcDate2 = Date.UTC(parsedDate2.getFullYear(), parsedDate2.getMonth(), parsedDate2.getDate());

    // Calculate the difference in days
    const millisecondsInDay = 24 * 60 * 60 * 1000;
    const differenceInDays = Math.floor((utcDate2 - utcDate1) / millisecondsInDay);

    return differenceInDays;
};

// Do not change the code below.
const dateOne = prompt("Enter Start Date (YYYY-MM-DD):");
const dateTwo = prompt("Enter End Date (YYYY-MM-DD):");
alert(dateDiffInDays(dateOne, dateTwo));

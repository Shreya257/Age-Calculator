function calculate() {
    let cd = document.getElementById('cd').value;
    let dob = document.getElementById('dob').value;

    let yr, month, day;

    let cDay = parseInt(cd.slice(8, 10), 10);
    let cMonth = parseInt(cd.slice(5, 7), 10);
    let cYear = parseInt(cd.slice(0, 4), 10);

    let bDay = parseInt(dob.slice(8, 10), 10);
    let bMonth = parseInt(dob.slice(5, 7), 10);
    let bYear = parseInt(dob.slice(0, 4), 10);

    if (cDay >= bDay) {
        day = cDay - bDay;
    } else {
        let daysInPreviousMonth = new Date(cYear, cMonth - 1, 0).getDate();
        day = cDay + daysInPreviousMonth - bDay;
        cMonth--;
    }

    if (cMonth >= bMonth) {
        month = cMonth - bMonth;
    } else {
        month = cMonth + 12 - bMonth;
        cYear--;
    }

    yr = cYear - bYear;

    if (yr < 0) {
        ageText.innerHTML = "Please enter correct date";
    } else {
        ageText.innerHTML = yr + " years, " + month + " months, " + day + " days";
    }
}
const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

const startingYear = 2020;


const generateAllData = (startingYear, yearNum) => {
    const ans = [];
    for (let year = startingYear; year < startingYear + yearNum; ++year) {
        for (let m = 1; m <= months.length; ++m) {
            const monthlyData = generateDataOfMonth(m);
            ans.push(...monthlyData);
        }
    }
    return ans;
}

const generateSurgery = (currTime, totalTime) => {
    const caseTime = (Math.random() > 0.5 ? 2 * 60 : 60) + Math.round((Math.random() - 1) * 10);
    const setUpTime = Math.random() > 0.5 ? 2 * 10 : 10;
    const turnoverTime = Math.random() > 0.5 ? 2 * 15 : 15;

    const startTime = Math.max(currTime + 10 + Math.round((Math.random() -1) * 20), 0);
    const setUpInterval = [startTime, startTime + setUpTime];
    const caseInterval = [setUpInterval[1], setUpInterval[1] + caseTime];
    const turnoverInterval = [caseInterval[1], caseInterval[1] + turnoverTime];
    return [setUpInterval, caseInterval, turnoverInterval];
}

const calculateUtilization = (surgeriesList, interval) => {
    let used = 0;
    for (let i = 0; i < surgeriesList.length; ++i) {
        used += surgeriesList[i][1][1] - surgeriesList[i][1][0];
    }
    return used / interval;
}

const generateDataOfMonth = (month) => {
    const ans = [];
    for (let i = 0; i < months[month - 1]; ++i) {
        const blockLen = Math.random() < 0.5 ? 4 * 60: 8 * 60;
        let surgeriesList = [];

        let currTime = 0;
        while (currTime < blockLen) {    
            const surgery = generateSurgery(currTime, blockLen);
            if (surgery[2][1] > blockLen)
                break;
            else {
                surgeriesList.push(surgery);
                currTime = surgery[2][1];
            }
        }
        
        surgeriesList = Math.random() < 0.1 ? [] : surgeriesList;

        ans.push({
            Date: month + "/" + (i + 1),
            interval: blockLen,
            surgeries: surgeriesList,
            Utilization_Rate: parseFloat(calculateUtilization(surgeriesList, blockLen).toFixed(3)),
        })
    }
    return ans;
}


const getIndexOfData = (datePicked) => {
    let ans = 0;
    const yDiff = datePicked.year - startingYear;
    ans += yDiff * 365;
    for (let m = 0; m  + 1 < datePicked.month; ++m) {
        ans += months[m];
    }
    ans += datePicked.day - 1;
    return ans; 
}

const calculateDate = (datePicked, daysToShow) => {
    const shallowCopy = {...datePicked};

    while (shallowCopy.day < daysToShow) {
        daysToShow -= shallowCopy.day;
        if (--shallowCopy.month == 0) {
            shallowCopy.month = months.length;
            shallowCopy.year--;
        }
        shallowCopy.day = months[shallowCopy.month - 1];
    }

    shallowCopy.day -= daysToShow - 1;
    return shallowCopy;
}



const allData = generateAllData(startingYear, 4);

export {allData, getIndexOfData, calculateDate};
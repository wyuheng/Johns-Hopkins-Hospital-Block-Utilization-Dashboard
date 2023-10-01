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

const generateData = () => {
    const ans = [];
    for (let i = 0; i < 30; ++i) {
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
            Date: "12/" + i + "/2023",
            interval: blockLen,
            surgeries: surgeriesList,
            Utilization_Rate: parseFloat(calculateUtilization(surgeriesList, blockLen).toFixed(3)),
        })
    }
    return ans;
}

const sampleData = generateData();

const getData = (days) => {
    return sampleData.slice(sampleData.length - days, sampleData.length);
}

const typeList = ['Prefix Time', 'Set Up Time', 'Case Time', 'Turnover Time'];

const processDataToStackedBar = (dataOfTheDay) => {
    console.log(dataOfTheDay);
    const surgeriesList = dataOfTheDay.surgeries;
    const ans = [];
    for (let t = 0; t < typeList.length; ++t) {
        for (let i = 0; i < surgeriesList.length; ++i) {
            ans.push({
                surgery: "Surgery " + (i + 1),
                length:  t == 0 ? surgeriesList[i][0][0] : 
                                surgeriesList[i][t - 1][1] - surgeriesList[i][t - 1][0],
                type: typeList[t],
            });
        }
    }
    return ans;
}


export {getData, processDataToStackedBar}
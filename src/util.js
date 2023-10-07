import { allData, getIndexOfData } from "./dataGenerate";


const getData = (datePicked, daysToShow) => {
    const idx = getIndexOfData(datePicked) + 1;
    const data = allData.slice(Math.max(idx - daysToShow, 0), idx);

    const dataMap = new Map();
    for (const entry of data) {
        dataMap.set(entry.Date, entry);
    }
    return [data, dataMap];
}

const typeList = ['Prefix Time', 'Set Up Time', 'Case Time', 'Clean Up Time'];

const processDataToStackedBar = (dataOfTheDay) => {
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

const processDataToPie = (generalReport) => {
    
    const ans = [];
    if (generalReport === null || generalReport === undefined)
        return;
    ans.push({
        type : 'Block Time Used',
        value : parseFloat((generalReport.totalCaseTime / 60).toFixed(1))
    });
    ans.push({
        type : 'Time Remained',
        value : parseFloat(((generalReport.totalBlockTime - generalReport.totalCaseTime) / 60).toFixed(1)),
    })

    return ans;
}


const userMap = new Map();

const checkPassword = (username, password) => {
    return userMap.get(username) === password;
}

const setPassword = (username, password) => {
    console.log("set password:" + username + " " + password);
    
    if (userMap.has(username)) {
        console.log("User existed!");
        throw new Error("User existed!");
    }
    userMap.set(username, password);
    console.log(userMap);
}

export {getData, processDataToStackedBar, checkPassword, processDataToPie, setPassword}
import BarChart from './BarChart';
import DateMenu from './DateMenu';
import RingGraph from './RingGraph';
import ReportBoard from './ReportBoard';
import { useEffect, useState } from 'react';


const Main = (props) => {
    const [showDays, setShowDays] = useState(7);
    const [datePicked, setDatePicked] = useState({
        year: 2023,
        month: 10,
        day: 4
    });
    const [data, setData] = useState([]);
    const [generalReport, setGeneralReport] = useState(null);


    const config = {
        showDays: showDays,
        setShowDays: setShowDays,
        datePicked: datePicked,
        setDatePicked: setDatePicked,
        isDrawerVisible: props.isDrawerVisible,
        setIsDrawerVisible: props.setIsDrawerVisible,
        setDataOfTheDay: props.setDataOfTheDay,

        data: data,
        setData : setData
    }

    useEffect(()=>{
        if (data === null)
            return;
        let totalBlockTime = 0, totalCaseTime = 0;

        console.log(data);

        for (let i = 0; i < data.length; ++i) {
            totalBlockTime += data[i].interval; 
            for (const surgery of data[i].surgeries) {
                totalCaseTime += surgery[1][1] - surgery[1][0];
            }
        }
        
        const report = {
            totalBlockTime : totalBlockTime,
            totalCaseTime : totalCaseTime,
            utilization : totalCaseTime / totalBlockTime,
        }
        setGeneralReport(report);
    }, [data]);

    return (

        <div className= "Main">
            <DateMenu {...config}/>
            
            <div>
                <BarChart {...config}/>
                <div className = "Report">
                    <RingGraph generalReport = {generalReport}/>
                    <ReportBoard generalReport = {generalReport}/>
                </div>
            </div>
        </div>
    );
}

export default Main;
import { Divider } from 'antd';
import AnimatedNumber from './AnimatedNumber';

const ReportBoard = ({generalReport}) => {
    return (
        <div className = "ReportBoard">
            
                <h2 className='BoardElement'>
                    <p>Total Allocated Time: </p> 
                    <h1 className = "NumberDisplayed">{generalReport == null ? null : <AnimatedNumber n = {generalReport.totalBlockTime / 60}/>}h </h1>
                </h2> 
            <Divider />
                <h2 className='BoardElement'>
                    <p>Total Block Utilization Time:</p>
                    <h1 className = "NumberDisplayed">{generalReport == null ? null : <AnimatedNumber n = {generalReport.totalCaseTime / 60}/>}h </h1>
                </h2>
            <Divider />
                <h2 className='BoardElement'>
                    <p>Total Block Utilization Rate:</p> 
                    <h1 className = "NumberDisplayed">{generalReport == null ? null : <AnimatedNumber n = {generalReport.utilization * 100}/>}%</h1>
                </h2>
        </div>
    );
}

export default ReportBoard;
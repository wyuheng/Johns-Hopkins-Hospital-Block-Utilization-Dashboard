import BarChart from './BarChart';
import DateMenu from './DateMenu';
import { useState } from 'react';


const Main = (props) => {
    const [showDays, setShowDays] = useState(7);

    const config = {
        showDays: showDays,
        setShowDays: setShowDays,
        isDrawerVisible: props.isDrawerVisible,
        setIsDrawerVisible: props.setIsDrawerVisible,
        setDataOfTheDay: props.setDataOfTheDay
    }

    return (

        <div className= "Main">
            <DateMenu {...config}/>
            <BarChart {...config}/>
        </div>
    );
}

export default Main;
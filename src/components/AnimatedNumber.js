
import {useSpring, animated} from 'react-spring';


const AnimatedNumber = (props)=> {
    const {number} = useSpring({
        from : {number : 0},
        number : props.n,
        delay : 100,
        config : {mass : 1, tension : 20, friction : 10},
    });
    //console.log("Number before rounding:", number);

    // Extract the numeric value from the 'number' object and round it
    const numericValue = number.to((n) => {
        //console.log("Rounded value:", n);
        return n.toFixed(1);
    });

    //console.log("Final numericValue:", numericValue);

    return <animated.div className = "AnimatedDivison" >{numericValue}</animated.div>;
}

export default AnimatedNumber;

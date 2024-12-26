import React, { useState, useEffect } from "react";

function DigitalClock() {
    const [time, setTime] = useState(new Date());
    useEffect(() => {
        const timeId = setInterval(() => {
            setTime(new Date());
        }, 1000);
        
        return () => clearInterval(timeId);
    }, []);
    function render() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridian = hours>=12 ? "PM" : "AM";
        hours = hours % 12 || 12;
        return (`${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridian}`);
    }
    function padZero(time)
    {
        return time<10? '0'+time: time;
    }
    return (
        <div className="clock-container">
            <div className="clock">
                <span>{render()}</span>
            </div>
        </div>
    );
}
export default DigitalClock;
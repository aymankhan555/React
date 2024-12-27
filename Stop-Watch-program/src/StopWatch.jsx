

function StopWatch() {
    return (
        <div className="stop-watch">
            <div className="time">
                <span>00:00:00</span>
            </div>
            <div className="controls">
                <button className="add-button">Start</button>
                <button className="stop-button">Stop</button>
                <button className="reset-button">Reset</button>
            </div>
        </div>
    );
}
export default StopWatch
const EndTyping = ({ score, onGame }) => {
  return (
    <div className="endTyping">
      <div className="result">
        <div>
          <div className="WPM">WPM</div>
          <div className="number">{score.count}</div>
        </div>
        <div>
          <div className="accuracy">Accuracy</div>
          <div className="number">{score.accuracy}%</div>
        </div>
        <div>
          <div className="wrongWord">Wrong Word</div>
          <div className="number">{score.wrong}</div>
        </div>
      </div>
      <button onClick={() => onGame("start")} className="btnPlay">
        Start Type Again
      </button>
      <button onClick={() => onGame("")} className="btnPlay">
        Home Page
      </button>
    </div>
  );
};
export default EndTyping;

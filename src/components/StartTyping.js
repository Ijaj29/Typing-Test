import { useEffect, useState } from "react";
const StartTyping = ({ onGame, onChangeScore }) => {
  const [defaultData] = useState(
    "Jim and Anne will be in charge of the spring field day to be held in early June. They will ask their friends aid to get set up. There will be games for the boys and girls. The children will want to hike, ride their bikes, and swim. This yearly event will be held in the new Peach Grove Park. Ruth has work to do on the plans for food for the day. Last year Ruth spent most of her time helping the two cooks with many snacks. Hot dogs, fries, soft drinks, ice cream, and candy apples were big sellers. Apple pie and ice cream sold well too. I hope Ruth serves the same food this year. George Long will hire the band and singer for the day. A great jazz band will ps mom leads the group. The jazz band is sure to be one of the big hits. George is to have them play from one to four and also in the evening. The fine songs they will play are sure to please all of us. Nice gifts will be given to all of the winners in each of the events. Local news coverage will include television and newspapers. Joyce Scott will take care of the pictures for the school paper and yearbook. Maybe the national news will do a short story on the tenth annual spring field day."
  );
  const [dataTyping, setDataTyping] = useState([]);
  const [text, setText] = useState("");
  const [textTyping, setTextTyping] = useState([]);
  const [timeLeft, setTimeLeft] = useState(60); // 60 seconds for 1 minute
  const [displayTime, setDisplayTime] = useState(0);

  const handleChangeTyping = (e) => {
    const valueInput = e.target.value;
    setText(e.target.value);
    setTextTyping(valueInput.split(" "));
    checkResult();
  };

  const checkResult = () => {
    let mismatchCount = 0;
    let matchCount = 0;
    let accuracy = 0;
    const dataCheck = dataTyping;
    for (let i = 0; i < textTyping.length; i++) {
      if (textTyping[i] !== dataTyping[i].value) {
        mismatchCount++;
        dataCheck[i].status = false;
      } else {
        matchCount++;
        dataCheck[i].status = true;
      }
    }
    accuracy = Math.round((matchCount / textTyping.length) * 100);

    setDataTyping(dataCheck);
    onChangeScore({
      wrong: mismatchCount,
      count: matchCount,
      accuracy: accuracy,
    });
  };

  const addWord = (quantityAdd = 70) => {
    const arrayDefaultData = defaultData.split(" ");
    const typingText = dataTyping;
    for (let index = 0; index < quantityAdd; index++) {
      const positionRandom = Math.floor(
        Math.random() * arrayDefaultData.length
      );
      typingText.push({
        value: arrayDefaultData[positionRandom],
        status: null,
      });
    }
    setDataTyping(typingText);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    setDisplayTime(`${mins}:${secs < 10 ? `0${secs}` : secs}`);
  };

  useEffect(() => {
    textTyping.length === dataTyping.length && addWord();
  }, []);

  useEffect(() => {
    formatTime(timeLeft);
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer); // Cleanup to avoid memory leaks
    }
    if (timeLeft == 0) {
      onGame("endTyping");
    }
  }, [timeLeft]);
  return (
    <>
      <div>
        <div class="main">
          <span class="first-span"></span>
          <span class="first-span">{displayTime}</span>
          <span class="first-span" style={{paddingRight: '50px'}} onClick={() => onGame("")}>X</span>
        </div>
        <div className="start">
          <ul className="list">
            {dataTyping.map((word, index) => (
              <li
                key={index}
                className={
                  word.status == true
                    ? "true"
                    : word.status == false
                    ? "false"
                    : ""
                }
              >
                {word.value}
              </li>
            ))}
          </ul>
          <div className="inputForm">
            <textarea
              className="input"
              type="text"
              rows="6"
              autoFocus
              value={text}
              onChange={(e) => handleChangeTyping(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default StartTyping;

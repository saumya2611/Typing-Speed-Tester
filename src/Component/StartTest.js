import React, { useEffect, useState } from "react";
import Button from "./Button";

const StartTest = ({ Active, setState }) => {
  // const [isActive, setIsActive] = useState(false);
  // const [timer, setTimer] = useState(0);
  // const [isRunning, setIsRunning] = useState(false);
  // const [wpm, setWpm] = useState(0);

  // const sampleTexts = [
  //   "Tekdbsjmsdskn j",
  //   "Technology continues to evolve at an astonishing pace, reshaping how we communicate and interact daily. Smartphones, smartwatches, and other devices keep us connected to the world in real time. However, with convenience comes responsibility. Managing screen time and ensuring data privacy are essential in the digital age. Balancing technology with real-life interactions can lead to a healthier, more fulfilling lifestyle, allowing people to harness its benefits without being overwhelmed.",
  //   "A forest is more than just a collection of trees; it is a thriving ecosystem teeming with life. Birds sing in the canopy while small creatures scurry along the forest floor. The air smells fresh, filled with the aroma of pine and earth. Forests play a vital role in regulating the planet’s climate and are home to countless species. Protecting these habitats ensures a better future for all living things.",
  //   "Traveling opens the mind to new cultures, cuisines, and perspectives. Exploring unfamiliar destinations allows people to step out of their comfort zones and experience the beauty of diversity. Every journey tells a unique story, from the bustling streets of a city to the serene landscapes of nature. While traveling can be thrilling, it also teaches patience and adaptability. These experiences enrich lives and create memories that last a lifetime.",
  //   "Rainy days often bring a sense of calm and nostalgia. The rhythmic sound of raindrops tapping against windows creates a soothing melody. For some, it is the perfect time to curl up with a book or enjoy a warm cup of tea. Rain nurtures the earth, replenishing rivers and streams, and giving life to plants. While storms may seem inconvenient, they remind us of nature’s power and its vital role in our lives.",
  // ];
  // const [typing, setTyping] = useState("");
  // const [randomValue, setRandomValue] = useState(-1);
  // const randomValue = Math.floor(Math.random() * 5);
  // console.log("randomValue=====>", sampleTexts[randomValue], randomValue);

  // useEffect(() => {
  //   const randomNumber = Math.floor(Math.random() * 5);
  //   // console.log("randomNumber============>", randomNumber);
  //   setRandomValue(randomNumber);
  // }, []);

  // Start the timer
  // useEffect(() => {
  //   let interval;
  //   if (isRunning === true) {
  //     interval = setInterval(() => {
  //       setTimer((prev) => prev + 1);
  //     }, 1000);
  //   }
  //   return () => clearInterval(interval);
  // }, [isRunning]);

  // useEffect(() => {
  //   const wordsTyped = typing.trim().split(/\s+/).length; // Count words
  //   const timeInMinutes = timer / 60;
  //   const currentWPM = Math.round(wordsTyped / timeInMinutes);
  //   if (currentWPM !== Infinity) {
  //     setWpm(currentWPM);
  //   }
  // }, [timer]);

  // const generateText = (text, ind) => {
  //   if (
  //     typing.length >= sampleTexts[randomValue]?.length &&
  //     isActive === false
  //   ) {
  //     setIsActive(true);
  //     setIsRunning(false);
  //   }

  //   console.log("text === ", text === " ");

  //   if (text === " ") return <span className="px-1" />;

  //   if (typing[ind] === text) {
  //     console.log("typing[ind] ==========>", typing[ind], "text", text);

  //     return <span className="text-green-400">{text} </span>;
  //   } else if (typing[ind] === undefined) {
  //     return <span className="text-slate-800">{text} </span>;
  //   } else if (typing[ind] !== text) {
  //     return <span className="text-red-400">{text} </span>;
  //   }
  // };

  // useEffect(() => {
  //   return () => {
  //     console.log("Active============>", Active);
  //   };
  // }, []);

  const sampleTexts = [
    "Tekdbsjmsdskn j",
    "Technology continues to evolve at an astonishing pace, reshaping how we communicate and interact daily. Smartphones, smartwatches, and other devices keep us connected to the world in real time. However, with convenience comes responsibility. Managing screen time and ensuring data privacy are essential in the digital age. Balancing technology with real-life interactions can lead to a healthier, more fulfilling lifestyle, allowing people to harness its benefits without being overwhelmed.",
    "A forest is more than just a collection of trees; it is a thriving ecosystem teeming with life. Birds sing in the canopy while small creatures scurry along the forest floor. The air smells fresh, filled with the aroma of pine and earth. Forests play a vital role in regulating the planet’s climate and are home to countless species. Protecting these habitats ensures a better future for all living things.",
    "Traveling opens the mind to new cultures, cuisines, and perspectives. Exploring unfamiliar destinations allows people to step out of their comfort zones and experience the beauty of diversity. Every journey tells a unique story, from the bustling streets of a city to the serene landscapes of nature. While traveling can be thrilling, it also teaches patience and adaptability. These experiences enrich lives and create memories that last a lifetime.",
    "Rainy days often bring a sense of calm and nostalgia. The rhythmic sound of raindrops tapping against windows creates a soothing melody. For some, it is the perfect time to curl up with a book or enjoy a warm cup of tea. Rain nurtures the earth, replenishing rivers and streams, and giving life to plants. While storms may seem inconvenient, they remind us of nature’s power and its vital role in our lives.",
  ];

  const [isActive, setIsActive] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [randomValue, setRandomValue] = useState(-1);
  const [typing, setTyping] = useState("");
  const [timer, setTimer] = useState(0);
  const [wpm, setWpm] = useState(0);
  const [reset, setReset] = useState(false);
  const [accuracy, setAccuracy] = useState(100); // Accuracy percentage

  useEffect(() => {
    const randonNumber = Math.floor(Math.random() * 5);
    setRandomValue(randonNumber);
    // console.log("randonNumber==========>", randonNumber);
  }, []);

  useEffect(() => {
    let interval;
    if (isRunning === true) {
      interval = setInterval(() => {
        setTimer((prv) => prv + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  useEffect(() => {
    const wordsTyped = typing.trim().split(" ").length;
    const timeInMinutes = timer / 60;
    const currentWPM = Math.round(wordsTyped / timeInMinutes);
    if (currentWPM !== Infinity) {
      setWpm(currentWPM);
    }
    // Calculate Accuracy
    const correctCharacters = calculateCorrectCharacters(
      sampleTexts[randomValue],
      typing
    );
    const totalCharacters = typing.length;
    const accuracy = Math.round(
      (correctCharacters / totalCharacters || 0) * 100
    );
    setAccuracy(accuracy);
  }, [timer]);

  const calculateCorrectCharacters = (sample, userText) => {
    let correctCount = 0;
    for (let i = 0; i < userText.length; i++) {
      if (userText[i] === sample[i]) {
        correctCount++;
      }
    }
    return correctCount;
  };

  const generateText = (text, ind) => {
    // console.log("text=========>", text, "ind=======>", ind);
    if (
      typing.length >= sampleTexts[randomValue].length &&
      isActive === false
    ) {
      setIsActive(true);
      setIsRunning(false);
      setReset(true);
    }
    if (text === " ") return <span className="px-1" />;
    console.log("typing[ind] === undefined ", typing[ind] === undefined);
    if (typing[ind] === text) {
      return <span className="text-green-500">{text}</span>;
    } else if (typing[ind] === undefined) {
      return <span className="text-slate-800">{text}</span>;
    } else if (typing[ind] !== text) {
      return <span className="text-red-500">{text}</span>;
    }
  };

  const restart = () => {
    const randomNum = Math.floor(Math.random() * 5);
    setRandomValue(randomNum);
    setIsActive(false);
    setIsRunning(false);
    setTyping("");
    setTimer(0);
    setWpm(0);
    setReset(false);
  };

  return (
    <div>
      <div className="bg-white h-[100vh] flex items-center justify-center px-[4rem]">
        <div className="bg-white border border-neutral-200 rounded-md py-[2rem] shadow-lg w-full">
          <h1 className="text-black text-3xl font-bold">Typing Speed Tester</h1>
          <div className="w-[300px]border border-gray-900 mt-[3rem]">
            <h1 className="text-xl text-justify ml-[4rem]">
              Type the following text:
            </h1>
          </div>
          {/* {console.log("sampleTexts[randomValue]", sampleTexts[randomValue])} */}
          <div className="py-2 px-[4rem]">
            <p className="bg-slate-100 px-5 py-2 rounded-sm text-left text-lg flex flex-wrap">
              {sampleTexts[randomValue]?.split("").map((item, ind) => {
                return generateText(item, ind);
              })}
            </p>
          </div>

          <div className="px-16 mt-[1rem]">
            <textarea
              className="border border-slate-300 w-full px-5 py-4 text-xl tracking-wide not-italic"
              rows={"5"}
              placeholder="Start Typing Here........."
              value={typing}
              onChange={(ev) => {
                if (isRunning === false) {
                  setIsRunning(true);
                }
                setTyping(ev.target.value);
              }}
              disabled={isActive}
            ></textarea>
          </div>
          <div className="text-lg text-left px-16 pt-5">Speed WPM: {wpm}</div>
          <div className={`text-lg text-left px-16 pt-5 `}>
            Accuracy:{" "}
            <span
              className={`${
                accuracy >= 85 ? "text-green-400" : "text-red-400"
              }`}
            >
              {accuracy}%
            </span>
          </div>
          {reset === true ? (
            <Button
              title={"Restart"}
              className={`px-5 py-2 bg-slate-600 text-white hover:bg-slate-500 rounded-sm border-none`}
              onClick={restart}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default StartTest;

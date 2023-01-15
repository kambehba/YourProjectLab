import React, { useState, useRef, useEffect } from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";
import "./Multiply.css";
import correctImage from "../../images/i1.png";
import wrongImage from "../../images/i2.png";
import successSound from "../../sounds/success.mp3";
import failSound from "../../sounds/fail.mp3";
function Multiply() {
  let questionSection = null;
  let answerSection = null;
  let indicatorSection = null;
  let numbersSections = null;

  let successAudio = new Audio(successSound);
  let failAudio = new Audio(failSound);

  const [showQuestion, setShowQuestion] = useState(false);
  const [showNumbersSection, setShowNumbersSection] = useState(true);
  const [refresh, setRefresh] = useState(false);
  const [showIndicator, setShowIndicator] = useState(false);
  const [indicatorImage, setIndicatorImage] = useState("");
  //const [questions, setQuestions] = useState([3, 6, 4, 7, 2, 8, 5, 9, 12]);
  const [answers, setAnswers] = useState([0]);
  const [notification, setNotification] = useState("");
  const selectedNumber = useRef(0);
  const questions = useRef([3, 6, 4, 7, 2, 8, 5, 9, 12]);
  const wrongAnswers = useRef([]);
  const question = useRef(0);
  const buttonStyle = useRef("btn btn-danger multiply_s3");

  useEffect(() => {
    //setQuestions([3, 6, 4, 7, 2, 8, 5, 9, 12]);

    question.current = questions.current.pop();
  }, []);

  const processAnswer = (n) => {
    let answer = selectedNumber.current * question.current;
    if (answer === n) {
      console.log("A:" + wrongAnswers.current);
      let v = wrongAnswers.current.findIndex((x) => x === question.current);
      console.log("v:" + v);
      if (v !== -1) {
        wrongAnswers.current = wrongAnswers.current.splice(v, 1);
        console.log("B:" + wrongAnswers.current);
      }

      successAudio.play();
      setIndicatorImage(correctImage);
      //setNotification("GOOD");
      setShowIndicator(true);
    } else {
      wrongAnswers.current.push(question.current);
      console.log(wrongAnswers.current);
      failAudio.play();
      setIndicatorImage(wrongImage);
      setShowQuestion(false);
      //setNotification("WRONG");
      setShowIndicator(true);
    }

    setTimeout(() => {
      setShowIndicator(false);
      setShowQuestion(true);
      question.current = getNextQuestion();
      generateAnswers();

      setRefresh(!refresh);
    }, 1000);
  };

  const getNextQuestion = () => {
    if (questions.current.length > 0)
      question.current = questions.current.pop();
    else if (wrongAnswers.current.length > 0) {
      questions.current = wrongAnswers.current;
      console.log("C:" + wrongAnswers.current);
      console.log("D:" + questions.current);
      question.current = questions.current.pop();
    } else {
      setShowQuestion(false);
      setShowNumbersSection(true);
      alert("Great Job ! You Mastered number :" + " " + selectedNumber.current);
      questions.current=[3, 6, 4, 7, 2, 8, 5, 9, 12];
      buttonStyle.current="btn btn-success multiply_s3";
      setRefresh(!refresh);
    }

    let answer = selectedNumber.current * question.current;
    let ap = Math.floor(Math.random() * 4);
    let h = [answer, answer - 1, answer + 1, answer + 2];
    let h1 = h[0];
    let h2 = h[ap];
    h[ap] = h1;
    h[0] = h2;
    setAnswers(h);
    return question.current;
  };

  if (showNumbersSection) {
    numbersSections = (
      <div className="multiply_s1">
        <div className="multiply_s2">
          <Button
            className= {buttonStyle.current}
            onClick={() => handleNumberClick(2)}
          >
            <h1>2</h1>
          </Button>

          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(3)}
          >
            <h1>3</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(4)}
          >
            <h1>4</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(5)}
          >
            <h1>5</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(6)}
          >
            <h1>6</h1>
          </Button>
        </div>
        <div className="multiply_s2">
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(7)}
          >
            <h1>7</h1>
          </Button>

          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(8)}
          >
            <h1>8</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(9)}
          >
            <h1>9</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(11)}
          >
            <h1>11</h1>
          </Button>
          <Button
            className="btn btn-danger multiply_s3"
            onClick={() => handleNumberClick(12)}
          >
            <h1>12</h1>
          </Button>
        </div>
      </div>
    );
  }

  if (showQuestion) {
    questionSection = (
      <div className="multiply_s9">
        <div>
          <h1 className="multiply_s6">
            {selectedNumber.current} X {question.current}
          </h1>
        </div>
      </div>
    );

    answerSection = (
      <div className="multiply_s6">
        <Button
          className="multiply_s8"
          onClick={() => processAnswer(answers[1])}
        >
          <h1>{answers[1]}</h1>
        </Button>
        <Button
          className="multiply_s8"
          onClick={() => processAnswer(answers[3])}
        >
          <h1>{answers[3]}</h1>
        </Button>
        <Button
          className="multiply_s8"
          onClick={() => processAnswer(answers[0])}
        >
          <h1>{answers[0]}</h1>
        </Button>
        <Button
          className="multiply_s8"
          onClick={() => processAnswer(answers[2])}
        >
          <h1>{answers[2]}</h1>
        </Button>
      </div>
    );
  }

  if (showIndicator) {
    indicatorSection = (
      <div>
        <h1>{notification}</h1>
        <img src={indicatorImage} />
      </div>
    );
  }

  const generateAnswers = () => {
    let answer = selectedNumber.current * question.current;
    let ap = Math.floor(Math.random() * 4);
    let h = [answer, answer - 1, answer + 1, answer + 2];
    let h1 = h[0];
    let h2 = h[ap];
    h[ap] = h1;
    h[0] = h2;
    setAnswers(h);
  };

  const handleNumberClick = (n) => {
    selectedNumber.current = n;
    generateAnswers();
    setShowNumbersSection(false);
    setShowQuestion(true);
  };

  return (
    <div className="multiply_s1">
      <div className="multiply_s4">
        <h1>Build Your Multiplication SKILLS </h1>
      </div>
      {numbersSections}

      <div className="multiply_s1">
        {questionSection}
        {answerSection}
      </div>
      <div className="multiply_s4"> {indicatorSection}</div>
    </div>
  );
}

export default Multiply;
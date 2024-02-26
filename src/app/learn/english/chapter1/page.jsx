'use client';

import '@/app/util/transition.css';
import {React, useState, useEffect} from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import chapter from '@/app/assets/chapter1.json';

export default function Chapter1 () {
  // Load Korean & English words data from the JSON file
  const kor = [];
  const eng = [];
  for (let i = 0; i < chapter.length; i++) {
    kor[i] = chapter[i].kor;
  }
  for (let i = 0; i < chapter.length; i++) {
    eng[i] = chapter[i].eng;
  }

  // Generate random numbers
  let randomNumbers = [];
  for (let i = 0; i < 4; i++) {
    let randomNumber = Math.floor (Math.random () * chapter.length);
    if (randomNumbers.indexOf (randomNumber) === -1) {
      randomNumbers.push (randomNumber);
    } else {
      i--;
    }
  }

  // Shuffle random numbers' array (Fisher-Yates Shuffle)
  useEffect (() => {
    try {
      function shuffle (array) {
        for (let i = array.length - 1; i > 0; i--) {
          let j = Math.floor (Math.random () * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
      }
      shuffle (randomNumbers);
    } catch (e) {
      console.log ('Failed to shuffle array data');
    }
  });

  // Set the question and options
  let [question, setQuestion] = useState (null);
  let [option1, setOption1] = useState ('option1');
  let [option2, setOption2] = useState ('option2');
  let [option3, setOption3] = useState ('option3');
  let [option4, setOption4] = useState ('option4');
  let randomNum = Math.floor (Math.random () * 4);
  let indexQuestion = randomNumbers[randomNum];
  useEffect (() => {
    try {
      const setData = () => {
        setQuestion (eng[randomNumbers[randomNum]]);
        setOption1 (kor[randomNumbers[0]]);
        setOption2 (kor[randomNumbers[1]]);
        setOption3 (kor[randomNumbers[2]]);
        setOption4 (kor[randomNumbers[3]]);
      };
      setData ();
    } catch (e) {
      console.log ('Failed to load data');
    }
  }, []);

  // Event Handler (onClick) : Check the answer
  let [answer, setAnswer] = useState ('');
  let [result, setResult] = useState (0);
  let indexOption1 = randomNumbers[0];
  let indexOption2 = randomNumbers[1];
  let indexOption3 = randomNumbers[2];
  let indexOption4 = randomNumbers[3];
  const clickOption1 = () => {
    setAnswer (option1);
    if (indexOption1 === indexQuestion) {
      setResult (1);
    } else {
      setResult (0);
    }
  };
  const clickOption2 = () => {
    setAnswer (option2);
    if (indexOption2 === indexQuestion) {
      setResult (1);
    } else {
      setResult (0);
    }
  };
  const clickOption3 = () => {
    setAnswer (option3);
    if (indexOption3 === indexQuestion) {
      setResult (1);
    } else {
      setResult (0);
    }
  };
  const clickOption4 = () => {
    setAnswer (option4);
    console.log (result);
    if (indexOption4 === indexQuestion) {
      setResult (1);
    } else {
      setResult (0);
    }
  };

  // Option 클릭 시에 setResult 적용이 안됨!
  console.log ('문제 : ' + indexQuestion);
  console.log (indexOption1);
  console.log (indexOption2);
  console.log (indexOption3);
  console.log (indexOption4);

  return (
    <main className={`${styles.main} animated fade_1`}>
      <div className={styles.section}>
        {/* Question */}
        <div className={`${styles.question} animated fade_2`}>
          <h1>{question}</h1>
        </div>
        {/* Answer */}
        <div className={`${styles.answer} animated fade_3`}>
          <div className={styles.options} onClick={clickOption1}>
            {option1}
          </div>
          <div className={styles.options} onClick={clickOption2}>
            {option2}
          </div>
          <div className={styles.options} onClick={clickOption3}>
            {option3}
          </div>
          <div className={styles.options} onClick={clickOption4}>
            {option4}
          </div>
          <h1>{answer}</h1>
          <h1>{result}</h1>
        </div>
      </div>
    </main>
  );
}

//TODO: STEP 1 - Import the useState hook.
import React, { useState, useEffect } from "react";
import "./App.css";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [ homeScore, setHomeScore ] = useState(0);
  const [ awayScore, setAwayScore ] = useState(0);
  const [ homeTeam, setHomeTeam ] = useState('Lions');
  const [ awayTeam, setAwayTeam ] = useState('Tigers');
  const [ quarter, setQuarter ] = useState(1)

  // const time = 0;

  const scoreHandler = (name, amount) => {
    name == homeTeam ?
    setHomeScore(homeScore + amount) :
    setAwayScore(awayScore + amount)
  }

  // startClock = (time) => {

  // }

  // useEffect(() => {
  //     setTimeout(setClock(),)
  // }

  return (
    <div className="container">
      <Scoreboard 
        homeScore={homeScore}
        awayScore={awayScore}
        homeTeam={homeTeam}
        awayTeam={awayTeam}
       />
      <Buttons 
        homeTeam={homeTeam}
        awayTeam={awayTeam}
        scoreHandler={scoreHandler}
      />
    </div>
  );
}

const Scoreboard = ({homeScore, awayScore, homeTeam, awayTeam}) => {
  return (
    <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">{homeTeam}</h2>
              <div className="home__score">{homeScore}</div>
            </div>
            <div className="timer">00:00</div>
            <div className="away">
              <h2 className="away__name">{awayTeam}</h2>
              <div className="away__score">{awayScore}</div>
            </div>
          </div>
          <BottomRow />
        </section>
  )
}

const Buttons = ({homeTeam, awayTeam, scoreHandler}) => {
  const [touchdown, fieldGoal] = [7, 3]

  return (
    <section className="buttons">
      <div className="homeButtons">
        <button className="homeButtons__touchdown" onClick={() => scoreHandler(homeTeam, touchdown)}>Home Touchdown</button>
        <button className="homeButtons__fieldGoal" onClick={() => scoreHandler(homeTeam, fieldGoal)}>Home Field Goal</button>
      </div>
      <div className="awayButtons">
        <button className="awayButtons__touchdown" onClick={() => scoreHandler(awayTeam, touchdown)}>Away Touchdown</button>
        <button className="awayButtons__fieldGoal" onClick={() => scoreHandler(awayTeam, fieldGoal)}>Away Field Goal</button>
      </div>
    </section>
  )
}

export default App;

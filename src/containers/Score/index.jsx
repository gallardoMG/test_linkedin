import React from 'react';
import {
  WrapperScore,
  TimeRemaining,
  Status,
  WinsLoses,
  Wins,
  Loses,
  Solve,
  Circle,
  TextEdit,
} from './ScoreElements';

const Score = () => {
  return (
    <WrapperScore>
      <h2>Score</h2>
      <TimeRemaining>Time remeaning 13:56:32</TimeRemaining>
      <Status>
        <p>RATING</p>
        <TextEdit>4.3</TextEdit>
        <p>64% wins</p>
        <WinsLoses>
          <Wins>
            <p>WINS</p>
            <TextEdit>77</TextEdit>
          </Wins>
          <Loses>
            <p>LOSES</p>
            <TextEdit color={'red'}>33</TextEdit>
          </Loses>
        </WinsLoses>
      </Status>
      <Solve>
        Solve <Circle>3</Circle>
      </Solve>
    </WrapperScore>
  );
};

export default Score;

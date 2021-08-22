import React, { useState } from 'react';
import {
  WrapperLeader,
  Info,
  ContainerTable,
  Title,
  ViewAll,
} from './LeaderBoardElements';
import { dataLeader } from './data';
import TableLeader from './TableLeader';

const LeaderBoard = () => {
  const [data] = useState(dataLeader);
  const listData = () =>
    data.map(el => (
      <TableLeader
        id={el.id}
        key={el.id}
        photo={el.photo}
        today={el.today}
        week={el.week}
      />
    ));
  return (
    <WrapperLeader>
      <Title>
        <h2>Leader board</h2>
        <ViewAll>View all</ViewAll>
      </Title>
      <Info>
        <p>Name</p>
        <p>Today</p>
        <p>Week</p>
      </Info>
      <ContainerTable>{listData()}</ContainerTable>
    </WrapperLeader>
  );
};

export default LeaderBoard;

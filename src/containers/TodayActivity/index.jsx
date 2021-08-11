import React, { useState } from 'react';
import TableStatus from '../../components/TableStatus';
import { dataUsers } from './data';
import {
  ContainerActivity,
  HeaderTable,
  Info,
  Wraper,
  Color,
} from './TodayActivityElements';

const TodayActivity = () => {
  const [data, setData] = useState(dataUsers);
  const list = () =>
    data.map(el => (
      <TableStatus
        key={el.id}
        id={el.id}
        table={el.table}
        sent={el.sent}
        average={el.average}
        negative={el.negative}
        time={el.time}
        drink={el.drink}
        status={el.status}
        button={el.button}
        solution={el.solution}
        photo={el.photo}
      />
    ));
  return (
    <Wraper>
      <Info>
        <p>Today activity</p>
        <p>
          Sort by: <Color>Time sent</Color>
        </p>
      </Info>
      <HeaderTable>
        <p>Info</p>
        <p>Rating</p>
        <p>Tag</p>
        <p>Status</p>
      </HeaderTable>
      <ContainerActivity>{list()}</ContainerActivity>
    </Wraper>
  );
};

export default TodayActivity;

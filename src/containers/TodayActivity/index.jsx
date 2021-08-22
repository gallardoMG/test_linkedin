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
  const [data] = useState(dataUsers);
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
      <table>
        <thead>
          <HeaderTable>
            <td>Info</td>
            <td>Rating</td>
            <td>Tag</td>
            <td>Status</td>
          </HeaderTable>
        </thead>
      </table>
      <ContainerActivity>{list()}</ContainerActivity>
    </Wraper>
  );
};

export default TodayActivity;

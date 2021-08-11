import React from 'react';
import {
  TableContainer,
  Status,
  Button,
  PhotoUser,
  Line,
  Circle,
  CircleUser,
} from './TableStatusElements';

const TableStatus = ({
  id,
  table,
  sent,
  average,
  negative,
  time,
  drink,
  status,
  button,
  solution,
  photo,
}) => {
  return (
    <>
      <TableContainer>
        <tbody>
          <tr>
            <td rowSpan='4' valign='top'>
              <CircleUser>9</CircleUser>
              <figure>
                <PhotoUser src={photo} alt='photo user' />
                <figcaption>Name</figcaption>
              </figure>
            </td>
          </tr>
          <tr>
            <td valign='top'>
              Table <br /> {table}
              <br />
              <br />
              S.send <br />
              <Status status={status} changeSize={false}>
                {sent}
              </Status>
            </td>
            <td rowSpan={negative.length} valign='top'>
              <Status status={status}>{average} </Status>
              <br />
              Average
            </td>
            <td valign='top'>
              {negative.map((el, i) => (
                <p key={`${id + i}-neg`}>{el}</p>
              ))}
            </td>
            <td valing='top' align='center'>
              <Status status={status}>{status}</Status> <br />
              {button ? <Button>Solve</Button> : ''}
              {solution.map((el, i) => (
                <p key={`${id + i}-sol`}>{el}</p>
              ))}
            </td>
          </tr>
          <tr>
            <td colSpan='2'>
              <Circle drink={drink} />
              {time}
            </td>
            <td>
              <Circle drink={drink} />
              {drink}
            </td>
          </tr>
        </tbody>
      </TableContainer>
      <Line />
    </>
  );
};

export default TableStatus;

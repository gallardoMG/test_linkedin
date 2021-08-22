import React from 'react';
import {
  Table,
  EndPositions,
  ContainerMedal,
  EidtText,
  Line,
} from './LeaderBoardElements';

const TableLeader = ({ photo, today, week, id }) => {
  return (
    <>
      <Table>
        <tbody>
          <tr>
            <td align='right'>
              <ContainerMedal>
                {id === 1 ? (
                  <i
                    className='fas fa-award'
                    id={id}
                    style={{ color: '#D4AF37' }}
                  />
                ) : id === 2 ? (
                  <i
                    className='fas fa-award'
                    id={id}
                    style={{ color: '#e3e4e5' }}
                  />
                ) : id === 3 ? (
                  <i
                    className='fas fa-award'
                    id={id}
                    style={{ color: '#CD7F32' }}
                  />
                ) : (
                  <EndPositions>{id}</EndPositions>
                )}
                <img src={photo} alt='user' />
              </ContainerMedal>
              Name
            </td>
            <td align='center'>
              <EidtText>{today[0]}</EidtText>
              <br />
              {today[1]}
            </td>
            <td align='center'>
              <EidtText>{week[0]}</EidtText> <br />
              {week[1]}
            </td>
          </tr>
        </tbody>
      </Table>
      <Line />
    </>
  );
};

export default TableLeader;

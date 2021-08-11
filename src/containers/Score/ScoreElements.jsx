import styled from 'styled-components';

export const WrapperScore = styled.section`
  width: 17rem;
  overflow: hidden;
  color: white;
  display: grid;
  p {
    padding: 0;
    margin: 0.5rem;
  }
  h2 {
    font-size: 1rem;
    color: black;
  }
`;

export const TimeRemaining = styled.div`
  background-color: #04243c;
  border-radius: 20px 20px 0 0;
  text-align: center;
  padding: 1rem;
`;

export const Status = styled.div`
  font-size: 1.5rem;
  text-align: center;
  background-color: #304152;
`;

export const WinsLoses = styled.div`
  text-align: center;
  justify-content: center;
  display: flex;
`;

export const Wins = styled.div`
  border-right: 1px solid white;
  padding: 0 0.9rem;
`;

export const Loses = styled.div`
  padding: 0 0.9rem;
`;

export const Solve = styled.div`
  background-color: #304152;
  justify-content: flex-end;
  padding: 0.6rem 1rem;
  display: flex;
  color: #3b8af9;
  font-weight: 600;
  border-radius: 0 0 20px 20px;
`;

export const Circle = styled.div`
  border-radius: 50%;
  width: 1rem;
  height: 1rem;
  background-color: whitesmoke;
  color: black;
  display: grid;
  place-content: center;
  font-size: 0.8rem;
  font-weight: 600;
  margin: 0 0.8rem;
`;
export const TextEdit = styled.span`
  font-size: 4rem;
  font-weight: 600;
  color: ${({ color }) => (color === 'red' ? '#fc748c' : '#9fdb8a')};
`;

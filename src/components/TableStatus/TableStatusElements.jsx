import styled from 'styled-components';

export const TableContainer = styled.table`
  display: grid;
  width: 100%;
  color: #e1e4e0;
  td {
    /* border: 1px solid black; */
    padding: 0 0.2rem 1rem 0;
    width: 20%;
  }
`;
export const Status = styled.span`
  color: ${({ status }) => (status === 'WIN!' ? '#9fdb8a' : '#e26e80')};
  font-size: ${({ changeSize }) => (changeSize === false ? '1rem' : '2rem')};
  font-weight: bold;
`;

export const Button = styled.button`
  margin: 0.8rem 0;
  background-color: #3b8bf9;
  color: white;
  border: 1px solid transparent;
  border-radius: 5px;
  padding: 0.9rem 2.5rem;
  &:hover {
    background-color: whitesmoke;
    color: #3b8bf9;
    border: 1px solid #3b8bf9;
  }
`;
export const PhotoUser = styled.img`
  width: 3rem;
  padding-bottom: 0.5rem;
`;

export const Line = styled.div`
  width: 95%;
  height: 1px;
  background-color: #eaeaea;
  margin: 1rem 1.2rem;
`;
export const Circle = styled.p`
  position: relative;
  right: 1.2rem;
  top: 2rem;
  border-radius: 50%;
  width: 0.8rem;
  height: 0.8rem;
  background-color: ${({ drink }) =>
    drink === 'With drink' ? '#9fdb8a' : '#e26e80'};
`;

export const CircleUser = styled.p`
  width: 1rem;
  height: 1rem;
  border: 1px solid #ebebeba2;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  color: #ebebeba2;
  margin: 0.5rem;
  position: relative;
  top: 3rem;
`;

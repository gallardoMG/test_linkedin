import styled from 'styled-components';

export const WrapperLeader = styled.section`
  width: 17rem;
  height: 25rem;
  overflow: hidden;
  color: whitesmoke;
  font-size: 0.8rem;
  border-radius: 0 0 20px 20px;
`;

export const Info = styled.div`
  display: grid;
  border-radius: 20px 20px 0 0;
  padding-left: 3rem;
  background-color: #04243c;
  grid-template-columns: repeat(3, 1fr);
`;

export const ContainerTable = styled.div`
  background-color: #304152;
  overflow: scroll;
  height: 80%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  td {
    width: 30%;
  }
  width: 100%;
`;

export const EndPositions = styled.span`
  width: 1rem;
  height: 1rem;
  border: 1px solid #ebebeba2;
  border-radius: 50%;
  font-size: 1rem;
  color: #ebebeba2;
  margin-right: 0.5rem;
  display: grid;
  place-content: center;
`;

export const ContainerMedal = styled.div`
  justify-content: center;
  display: flex;
  i {
    font-size: 2rem;
    padding-right: 0.5rem;
  }
`;
export const EidtText = styled.span`
  font-size: 1.3rem;
  color: #aeeb98;
`;

export const Line = styled.div`
  justify-self: center;
  text-align: center;
  width: 89%;
  height: 1px;
  background-color: #eaeaea;
  margin: 1rem 1rem;
`;

export const Title = styled.span`
  display: flex;
  justify-content: space-between;
  color: black;
  h2 {
    font-size: 1rem;
  }
`;

export const ViewAll = styled.p`
  color: #3b8af9;
  font-weight: 600;
`;

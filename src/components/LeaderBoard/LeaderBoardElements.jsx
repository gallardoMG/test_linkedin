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
  grid-template-columns: 4.5rem 6rem auto;
`;

export const ContainerTable = styled.div`
  background-color: #304152;
  overflow: scroll;
  height: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Table = styled.table`
  width: 100%;
  td {
    /* border: 1px solid white; */
    width: 33%;
  }
`;

export const EndPositions = styled.p`
  width: 1rem;
  height: 1rem;
  border: 1px solid #ebebeba2;
  border-radius: 50%;
  display: grid;
  place-items: center;
  font-size: 0.8rem;
  color: #ebebeba2;
`;

export const ContainerMedal = styled.div`
  position: relative;
  right: 3.5rem;
  top: 2rem;
  i {
    font-size: 1.5rem;
    /* color: ${({ id }) =>
      id === 1 ? '#efb810' : id === 2 ? '#e3e4e5' : '#CD7F32'}; */
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

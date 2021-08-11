import styled from 'styled-components';

export const Wraper = styled.section`
  width: 50rem;
  height: 130vh;
`;
export const ContainerActivity = styled.section`
  background-color: #304152;
  width: 100%;
  height: 83%;
  border-radius: 0 0 20px 20px;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const HeaderTable = styled.table`
  border-radius: 20px 20px 0 0;
  background-color: #04243c;
  padding-left: 10rem;
  display: grid;
  color: white;
  grid-template-columns: 9.7rem 10rem 10.5rem auto;
`;
export const Info = styled.div`
  padding: 0 1rem;
  display: flex;
  justify-content: space-between;
  font-weight: 600;
`;

export const Color = styled.span`
  color: #3b8af9;
`;

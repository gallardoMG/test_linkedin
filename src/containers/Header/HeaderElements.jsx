import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  display: grid;
  align-items: center;
  grid-template-columns: 20% 50% 30%;
  background-color: white;
  height: 4rem;
  border-radius: 0 0 25px 25px;
  padding: 0 4rem;
`;
export const Checklists = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  font-weight: 600;
  p {
    margin-right: 1rem;
  }
`;
export const WrapperIcon = styled.div`
  width: 5rem;
  border-radius: 10px;
  font-size: 0.85rem;
  height: 2rem;
  background-color: ${({ img }) =>
    img === 'open' ? '#b9ff9f6a' : img === 'mid' ? '#fc748d45' : '#ebebeb9d'};
  display: flex;
  align-items: center;
  font-weight: 100;
  margin: 0 0.3rem;
`;
export const Img = styled.img`
  padding: 0 0.2rem;
  width: 1.2rem;
`;
export const ContainerDate = styled.div`
  display: grid;
  text-align: end;
  position: relative;
  align-items: center;
  height: 2rem;
`;
export const Date = styled.input`
  outline: none;
  border: 1px solid transparent;
  width: 100%;
  height: 100%;
  ::-webkit-calendar-picker-indicator {
    width: 100%;
    opacity: 0;
    height: 100%;
  }
`;
export const DateText = styled.div`
  font-size: 1.5rem;
  padding: 0.2rem 0;
  position: absolute;
  top: 0;
  right: 0;
  color: #74aeff;
  background: white;
  pointer-events: none;
`;
export const Host = styled.div`
  display: flex;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
  i {
    font-size: 1rem;
    padding-right: 1.5rem;
  }
`;

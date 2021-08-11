import React from 'react';
import {
  Checklists,
  HeaderWrapper,
  Img,
  Date,
  ContainerDate,
  DateText,
  Host,
  WrapperIcon,
} from './HeaderElements';
import mid from '../../assets/mid.svg';
import close from '../../assets/close.svg';
import open from '../../assets/open.svg';

const Header = () => {
  return (
    <HeaderWrapper>
      <Host>
        <i className='fas fa-arrow-left' />
        Host
      </Host>
      <Checklists>
        <p>Checklists</p>
        <WrapperIcon img={'open'}>
          <Img src={open} />
          Open
        </WrapperIcon>
        <WrapperIcon img={'mid'}>
          <Img src={mid} /> Mid
        </WrapperIcon>
        <WrapperIcon img={'close'}>
          <Img src={close} />
          Close
        </WrapperIcon>
      </Checklists>
      <ContainerDate>
        <Date type='date' defaultValue='2021-01-11' />
        <DateText>Mon, Jan 11, 2021</DateText>
      </ContainerDate>
    </HeaderWrapper>
  );
};

export default Header;

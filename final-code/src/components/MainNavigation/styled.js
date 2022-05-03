import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledMainNavigation = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  flexFlow: 'wrap',
  borderBottom: '1px solid #717281',
  height: '85px',
  margin: '0 8px',
  ' > div': {
    flex: '0 1 50%'
  }
});

export const NavBarLinks = styled.div({
  paddingBottom: '27px',
  width: '100%'
});

export const Menu = styled.ul({
  paddingLeft: 0,
  margin: 'auto'
});

export const MenuItem = styled(Link)`
  float: left;
  margin-right: 28px;
  list-style-type: none;
  font-size: 11px;
  line-height: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Spartan', sans-serif;
  font-weight: bold;
  opacity: 0.75;
  text-decoration: none;
  padding-top: 33px;
  width: 60px;
  color: white;

  &:hover {
    border-top: 4px solid rgb(95 217 255);
    padding-top: 29px;
  }
`;

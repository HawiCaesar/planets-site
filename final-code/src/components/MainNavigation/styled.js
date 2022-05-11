import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const StyledHeader = styled.header({
  display: 'flex',
  flexDirection: 'row',
  paddingLeft: '2em',
  paddingRight: '2em',
  borderBottom: '1px solid #717281',
  justifyContent: 'space-between'
});

export const StyledH1 = styled.h1({
  textTransform: 'uppercase',
  fontFamily: '"Antonio",sans-serif',
  fontWeight: 500,
  fontSize: '2em'
});

export const Menu = styled.ul({
  display: 'flex',
  justifyContent: 'center',
  margin: 0,
  gridGap: '1.5rem',
  gap: '1.2rem'
});

export const PlantSelector = styled.nav({
  position: 'relative',
  top: 'unset',
  left: 'unset',
  height: '100%',
  overflow: 'auto'
});

export const MenuItem = styled(Link)`
  list-style-type: none;
  line-height: 25px;
  text-transform: uppercase;
  letter-spacing: 1px;
  font-family: 'Spartan', sans-serif;
  font-weight: 700;
  text-decoration: none;
  padding-top: 33px;
  color: hsla(0, 0%, 100%, 0.5);

  > span {
    font-size: 0.75rem;
  }
  &:hover {
    border-top: 4px solid rgb(95 217 255);
    padding-top: 29px;
  }
`;

export const NavBarTitle = styled.div({
  width: '100%'
});

export const HamburgerIcon = styled.img({
  display: 'none'
});

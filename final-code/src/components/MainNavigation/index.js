import { StyledMainNavigation, Menu, MenuItem, NavBarLinks } from './styled';
export const MainNavigation = () => {
  return (
    <StyledMainNavigation>
      <div className='navbar-title'>
        <h1 className='title'>The Planets</h1>
        <img
          src='assets/icon-hamburger.svg'
          width='24'
          height='17'
          className='hambuger-mobile'
        />
      </div>
      <NavBarLinks>
        <Menu>
          <MenuItem to='/mercury'>
            <span>Mercury</span>
            <span className='arrow-planet'></span>
          </MenuItem>
          <MenuItem to='/venus'>Venus</MenuItem>
          <MenuItem to='/earth'>Earth</MenuItem>
          <MenuItem to='/mars'>Mars</MenuItem>
          <MenuItem to='/jupiter'>Jupiter</MenuItem>
          <MenuItem to='/saturn'>Saturn</MenuItem>
          <MenuItem to='/uranus'>Uranus</MenuItem>
          <MenuItem to='/neptune'>Neptune</MenuItem>
        </Menu>
      </NavBarLinks>
    </StyledMainNavigation>
  );
};

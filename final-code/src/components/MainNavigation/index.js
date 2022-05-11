import {
  StyledHeader,
  Menu,
  MenuItem,
  PlantSelector,
  HamburgerIcon,
  StyledH1
} from './styled';
export const MainNavigation = () => {
  return (
    <StyledHeader>
      {/* <div className='navbar-title'> */}
      <StyledH1 className='title'>The Planets</StyledH1>
      <HamburgerIcon src='assets/icon-hamburger.svg' width='24' height='17' />
      {/* </div> */}
      <PlantSelector>
        <Menu>
          <MenuItem to='/mercury'>
            <span>Mercury</span>
            <span className='arrow-planet'></span>
          </MenuItem>
          <MenuItem to='/venus'>
            <span>Venus</span>
          </MenuItem>
          <MenuItem to='/earth'>
            <span>Earth</span>
          </MenuItem>
          <MenuItem to='/mars'>
            <span>Mars</span>
          </MenuItem>
          <MenuItem to='/jupiter'>
            <span>Jupiter</span>
          </MenuItem>
          <MenuItem to='/saturn'>
            <span>Saturn</span>
          </MenuItem>
          <MenuItem to='/uranus'>
            <span>Uranus</span>
          </MenuItem>
          <MenuItem to='/neptune'>
            <span>Neptune</span>
          </MenuItem>
        </Menu>
      </PlantSelector>
    </StyledHeader>
  );
};

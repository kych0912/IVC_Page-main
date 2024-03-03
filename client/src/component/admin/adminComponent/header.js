import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';

const lightColor = 'rgba(255, 255, 255, 0.7)';

function Header(props) {
  const { onDrawerToggle,handleTabsValue,tabsValue } = props;

  return (
    <React.Fragment>
      <AppBar
        component="div"
        color="primary"
        position="sticky"
        elevation={0}
        sx={{ zIndex: 1,backgroundColor:'primary' }}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs>
              <Typography color="inherit" variant="h5" component="h1">
                Inha Venture Club
              </Typography>
            </Grid>
            
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar color="primary" component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
        <Tabs value={tabsValue} onChange={handleTabsValue} textColor="inherit">
          <Tab label="제출 링크 수정" />
          <Tab label="지원서 수정" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
import { Box, AppBar, Tabs, Tab, Typography } from '@mui/material';
import React from 'react';
import Url from "../adminComponent/editURL"
import File from "../adminComponent/editFile"

function TabPanel(props) {
    const { children,value, index, ...other } = props;
  
    return (
      <Box 
        component="main" 
        sx={{ flex: 1, py: 6, px: 4, bgcolor: '#eaeff1' }}
        role="tabpanel"
        hidden={value !== index}
        aria-labelledby={`simple-tab-${index}`}
      >
        {value === index && (
          children
        )}
      </Box>
    );
  }

export default function Edit(props){
    const [tabsValue,setTabsValue] = React.useState(0);

    const handleTabsValue = (event, newValue) => {  
        setTabsValue(newValue);
    }

    return(
        <>
            <AppBar color="primary" component="div" position="static" elevation={0} sx={{ zIndex: 0 }}>
                <Tabs value={tabsValue} onChange={handleTabsValue} textColor="inherit">
                <Tab label="제출 링크 수정" />
                <Tab label="지원서 수정" />
                </Tabs>
            </AppBar>
            <TabPanel value={tabsValue} index={0}>
                <Url/>
            </TabPanel>
            <TabPanel value={tabsValue} index={1}>
                <File/>
            </TabPanel>
        </>
    )
}
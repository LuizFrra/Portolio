import React from 'react';
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-scroll';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bolder',
    fontStyle: 'italic',
    fontFamily: 'Montserrat'
  },
}));

const MyTab = ({orientation = 'horizontal', tabsOptions, selectedOption, selectedOptionChanged}) => {

  function handleTabsChange(event, value) {
    selectedOptionChanged(value); 
  }
  
  const classes = useStyles();

  const tabs = tabsOptions.map((e, i) => {
    return (
      <Tab component={Link} to={e.toLowerCase()} duration={500} smooth={true} spy={true} className={classes.root} key={e} value={i} label={e} />
    );
  })
  
  return (
    <Tabs indicatorColor='secondary' orientation={orientation} value={selectedOption} onChange={(event, value) => handleTabsChange(event, value)}>
      {tabs}
    </Tabs>
  )
}

export default MyTab;
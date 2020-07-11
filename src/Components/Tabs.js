import React from 'react';
import { Tabs, Tab } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: 'bolder',
    fontStyle: 'italic',
    fontFamily: 'Montserrat'
  },
}));

const MyTab = ({orientation = 'horizontal', tabsOptions}) => {
  
  const classes = useStyles();

  const tabs = tabsOptions.map((e, i) => {
    return <Tab className={classes.root} key={e} value={i} label={e} />
  })
  
  return (
    <Tabs indicatorColor='secondary' orientation={orientation} value={2}>
      {tabs}
    </Tabs>
  )
}

export default MyTab;
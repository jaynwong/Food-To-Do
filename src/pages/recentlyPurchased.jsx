import React from 'react';
// import "./nextShop.css";
// import skipback from "./skip-back.png";
import Navbar from '../components/navbar';
import { Grid } from "@material-ui/core";
import { IconButton } from '@mui/material';
import RecentlyPurContent from '../components/recentlyPurContent';
import Typography from "@material-ui/core/Typography";
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';

const RecentlyPurchased = () => {
  return (
    <Grid container direction="column">
      <Grid item gutterBottom>
        <Navbar/>
      </Grid>
    
    <Grid container direction="row">
      <IconButton aria-label='skip-back' href='/dashboard'>
        <SkipPreviousIcon sx={{ fontSize: 50}}/>
      </IconButton>
      
      <Grid item>
        <Typography variant='h3' component="h3" gutterBottom>
          Recent Purchased
        </Typography>
      </Grid>

    </Grid>
      
      
      <Grid item container>
        <Grid item xs={false} sm={2}/>
        <Grid item xs={12} sm={8}>
          <RecentlyPurContent />
        </Grid>
        <Grid item xs={false} sm={2} />
      </Grid>

      {/* <Grid container direction='row' justifyContent='center' sx={{pt: 2}}>
        <Typography variant='caption text'>
          Made with love by Team Sushi
        </Typography>
      </Grid> */}
    </Grid>
  );
};

export default RecentlyPurchased;

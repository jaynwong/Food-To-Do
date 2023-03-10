import React from "react";
import CoffeCard from "./CoffeCard";
// import { CardActionArea, CardContent, Grid, Typography } from "@material-ui/core";

// import {Card} from "@mui/material"
// import CardHeader from "@material-ui/core/CardHeader";
// import {CardMedia} from "@material-ui/core";

import {Card, CardMedia, CardActionArea, CardContent, Grid, Typography} from "@mui/material";

// To show the items in the database such as all-items, categorized items etc. -> not user based

const ItemContent = ({allItems}) => {

  const myTheme = {
    cardHeaderStylePref:{
       height: 200,
       padding: 20
     }
  }

  return (

    <Grid container spacing={4}>
      {allItems.map((item) => (
        <Grid item xs={12} sm={3}>
          <CardActionArea href={`/item/${item._id}`}>
            <Card>
              <CardMedia style={myTheme.cardHeaderStylePref} image={item.itemImageURL} />
              {/* <CardHeader title={item.itemName} variant="h8" noWrap
                style={{ textAlign: 'center', fontSize: '100px'}}/> */}
              <CardContent style={{backgroundColor: '#FFE6DC'}}>
                <Typography gutterBottom noWrap variant="h6" component="div" style={{textAlign:'center'}}>
                  {item.itemName}
                </Typography>
              </CardContent>
            </Card>
          </CardActionArea>
        </Grid>
      )
      )}
    </Grid>
  );
};

// ItemContent.defaultProps = {
//   allItems: [],
// }

export default ItemContent;

import React from 'react';
import "./nextShop.css";
// import { Grid } from "@material-ui/core";
// import Header from "./components/Header";
// import Content from "./components/nextShopContentDisplay";
import skipback from "./skip-back.png";
import Navbar from '../components/navbar';

const NextShop = () => {
  return (

    // <Grid container direction="column">
    //   <Grid item>
    //     <Header />
    //   </Grid>
    //   <Grid item container>
    //     <Grid item xs={false} sm={2} />
    //     <Grid item xs={12} sm={8}>
    //       <Content />
    //     </Grid>
    //     <Grid item xs={false} sm={2} />
    //   </Grid>
    // </Grid>
      <div className="next-shopping-list-desktop">
        <Navbar />
        <div className="next-shopping-list-title-group">
          <img className="skip-back-icon" alt="" src={skipback} />
          <div className="next-shopping-list">Next Shopping List</div>
        </div>

        <div className="content-div">
          <div className="demo-items-group">
            <div className="items-row-group">
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
              <div className="demo-items-row-1">
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
                <div className="item-demo-1">
                  <div className="rectangle-div" />
                  <div className="item-name-div">Item Name</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="made-with-by-teamsushi">
          <span>{`Made with `}</span>
          <span className="span">♥</span>
          <span> by TeamSushi</span>
        </div>
      </div>
  );
};

export default NextShop;

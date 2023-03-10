import React from 'react'
import { useEffect } from 'react';
import axios from "axios";
import DashboardHeader from '../components/DashboardHeader';
import Navbar from '../components/navbar';
import '../components/navbar.css';
import '../pages/dashboard-final.css';

import UserProfileHeader from '../components/UserProfileHeader';

import DashboardCarousel from '../components/DashboardCarousel';
import { useState } from 'react'
import DashboardCarouselHeader from '../components/DashboardCarouselHeader';
import DashboardCarouselHeaderEmpty from '../components/DashboardCarouselHeaderEmpty';
import { useNavigate } from "react-router-dom";



function Dashboard() {
    const navigate = useNavigate();

    useEffect(() => {
        async function useAuth() {
            // https://ftd-server.herokuapp.com/user/protected
            // http://localhost:3012/user/protected
          await axios.get('https://ftd-server.herokuapp.com/user/protected', { withCredentials: true }).then((res) => {
            if (res.data === false) {
              navigate("/login");
            }
          })  
        }
        useAuth();
      }, []);

    var usernameURL = 
    "https://ftd-server.herokuapp.com/user/getName";
    // "http://localhost:3012/user/getName";

    var shoppingListURL =
    "https://ftd-server.herokuapp.com/item/shoppingList";
    // "http://localhost:3012/item/shoppingList";

    var recentlyBoughtItemsURL =
    "https://ftd-server.herokuapp.com/item/recentlyBought";
    // "http://localhost:3012/item/recentlyBought";
    
    var favouritesURL =
    "https://ftd-server.herokuapp.com/item/favorites";
    // "http://localhost:3012/item/favorites";

    const [shoppingList, setShoppingList] = useState([]);
    const [recentlyBoughtItems, setRecentlyBoughtItems] = useState([]);
    const [favourites, setFavourites] = useState([]);
    const [username, setUsername] = useState('');

    useEffect(() => {
        axios
            .get(shoppingListURL, {withCredentials:true})
            .then((response) => {
            setShoppingList(response.data)
            })

        axios
            .get(usernameURL, {withCredentials:true})
            .then((response) => {
            setUsername(response.data)
            })

        axios
            .get(recentlyBoughtItemsURL, {withCredentials:true})
            .then((response) => {
            setRecentlyBoughtItems(response.data)
            })
        
        axios
            .get(favouritesURL, {withCredentials:true})
            .then((response) => {
            setFavourites(response.data)
            })    
    }, []);
    

    return (
        <div>
            <Navbar />
            <div className='dashboard-page-background'>
                <UserProfileHeader username={username}/>
                <DashboardHeader />
                
                {shoppingList.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Next Shopping List'} ListArray={shoppingList}/>
                        <DashboardCarousel UserItems={shoppingList} ListName={'Next Shopping List'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Next Shopping List'}/>}
                
                {recentlyBoughtItems.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Recently Purchased'}/>
                        <DashboardCarousel UserItems={recentlyBoughtItems} ListName={'Recently Purchased'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Recently Purchased'}/>}
                
                {favourites.length > 0 ? (
                    <div>
                        <DashboardCarouselHeader ListName={'Favourites'}/>
                        <DashboardCarousel UserItems={favourites} ListName={'Favourites'}/>
                    </div>
                ) : <DashboardCarouselHeaderEmpty ListName={'Favourites'}/>}
            </div>

            
        </div>

    )

}

export default Dashboard;
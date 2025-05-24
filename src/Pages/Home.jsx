import React from 'react';
import Hero from '../Components/Hero/Hero';
import Stats from '../Components/Hero/Stats';
import Goals from '../Components/Hero/Goals';
import FeaturedRoomMate from '../Components/Featured RoomMate/FeaturedRoomMate';


const Home = () => {
    return (
        <div>
         <Hero></Hero>
         <FeaturedRoomMate></FeaturedRoomMate>
         <Stats></Stats>
         <Goals></Goals>
        </div>
    );
};

export default Home;
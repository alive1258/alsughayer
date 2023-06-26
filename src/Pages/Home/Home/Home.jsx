import React from 'react';
import Banner from '../Banner/Banner';
import Partner from '../Partner/Partner';
import Services from '../Services/Services';
import OurValue from '../OurValue/OurValue';
import OurProject from '../OurProject/OurProject';
import Team from '../Team/Team';
import ContactusHome from '../ContactusHome/ContactusHome';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <Partner></Partner>
           <Services></Services>
           <OurValue></OurValue>
           <OurProject></OurProject>
           <Team></Team>
           <ContactusHome></ContactusHome>
        </div>
    );
};

export default Home;
import React from 'react';
import AboutBanner from '../AboutBanner/AboutBanner';
import SuccessValue from '../successValue/SuccessValue';
import Clients from '../Clients/Clients';
import ATeam from '../ATeam/ATeam';
import Testemonial from '../Testimonial/Testemonial';
import ContactusHome from '../../Home/ContactusHome/ContactusHome';

const Aboutus = () => {
    return (
        <div>
            <AboutBanner></AboutBanner>
            <SuccessValue></SuccessValue>
            <Clients></Clients>
            <ATeam></ATeam>
            <Testemonial></Testemonial>
            <ContactusHome></ContactusHome>
        </div>
    );
};

export default Aboutus;
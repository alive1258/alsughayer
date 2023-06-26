import React from 'react';
import SBanner from '../SBanner/SBanner';
import DetailService from '../DetailService/DetailService';
import TeamDo from '../TeamDo/TeamDo';
import AskQuestion from '../AskQuestion/AskQuestion';
import ContactusHome from '../../Home/ContactusHome/ContactusHome';

const Services = () => {
    return (
        <div>
         <SBanner></SBanner>
         <DetailService></DetailService>
         <TeamDo></TeamDo>
         <AskQuestion></AskQuestion>
         <ContactusHome></ContactusHome>
        </div>
    );
};

export default Services;
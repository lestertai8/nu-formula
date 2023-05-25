import * as React from 'react';
import Typography from '@mui/material/Typography';
import DonateStep from '../components/DonateStep.jsx'
// import Footer from '../components/Footer.js'

const Donate = () => {
    return(
        <div>
            <Typography>Please contact us at nfr@u.northwestern.edu if you have any questions!</Typography>
            <DonateStep step={1} instructions={'Go to https://www.northwestern.edu/giving/'} image={"../images/Slice 1.png"}/>
            {/* <Footer/> */}
        </div>
        
    )
};

export default Donate
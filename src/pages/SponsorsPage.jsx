import * as React from 'react';
import Grid from '@mui/material/Grid';

import CustomHeader from "../components/CustomHeader";
import img from "../fsae.jpeg";
import SponsorHeading from "../components/SponsorHeading";
import SponsorCard from "../components/SponsorCard";


import Platinum1 from "../assets/sponsors/platinum/mitsubishi.jpg"
import Platinum2 from "../assets/sponsors/platinum/mathworks.jpg"
import Platinum3 from "../assets/sponsors/platinum/boeing.jpg"
import Platinum4 from "../assets/sponsors/platinum/dassault.jpg"
import Platinum5 from "../assets/sponsors/platinum/siemens.jpg"
import Platinum6 from "../assets/sponsors/platinum/BMR-Suspension.jpg"
import Platinum7 from "../assets/sponsors/platinum/Ln-Engineering.png"
import Gold1 from "../assets/sponsors/gold/woodward.jpg"
import Gold2 from "../assets/sponsors/gold/altec.jpg"
import Gold3 from "../assets/sponsors/gold/skf.jpg"
import Gold4 from "../assets/sponsors/gold/miller.jpg"
import Gold5 from "../assets/sponsors/gold/calspan.png"
import Gold6 from "../assets/sponsors/gold/Hesse.jpeg"
import Gold7 from "../assets/sponsors/gold/Milwaukee_Tool.webp"
import Gold8 from "../assets/sponsors/gold/tesla.png"
import Gold9 from "../assets/sponsors/gold/urw.png"
import Silver1 from "../assets/sponsors/silver/AA.jpg"
import Silver2 from "../assets/sponsors/silver/BorggWarner.png"
import Silver3 from "../assets/sponsors/silver/Simpson.png"
import Silver4 from "../assets/sponsors/silver/Schaltbau.png"
import Silver5 from "../assets/sponsors/silver/rapid-harness.png"
import Silver6 from "../assets/sponsors/silver/Green-Watt-Power-.png"
import Silver7 from "../assets/sponsors/silver/Sondors.jpeg"
import Silver8 from "../assets/sponsors/silver/altair.jpg"
import Silver9 from "../assets/sponsors/silver/ricardo.jpg"
import Silver10 from "../assets/sponsors/silver/innomaker.jpg"
import Silver11 from "../assets/sponsors/silver/diaedge.jpg"
import Silver12 from "../assets/sponsors/silver/durabar.jpg"
import Silver13 from "../assets/sponsors/silver/imc.jpg"
import Silver14 from "../assets/sponsors/silver/jaz.jpg"
import Silver15 from "../assets/sponsors/silver/moldino.jpg"
import Silver16 from "../assets/sponsors/silver/motec.jpg"
import Silver17 from "../assets/sponsors/silver/ptg.jpg"
import Bronze1 from "../assets/sponsors/bronze/hoosier.jpg"
import Bronze2 from "../assets/sponsors/bronze/goodson.jpg"
import Bronze3 from "../assets/sponsors/bronze/fibreglast.jpg"
import Bronze4 from "../assets/sponsors/bronze/dw.jpg"
import Bronze5 from "../assets/sponsors/bronze/Rockwest.jpg"
import Bronze6 from "../assets/sponsors/bronze/vr3.jpg"
import Bronze7 from "../assets/sponsors/bronze/susa.jpg"
import Bronze8 from "../assets/sponsors/bronze/rapidcut.jpeg"
import Bronze9 from "../assets/sponsors/bronze/azul.jpeg"
import Bronze10 from "../assets/sponsors/bronze/Hakko.jpeg"
import Bronze11 from "../assets/sponsors/bronze/Klairmont.jpeg"
import Bronze12 from "../assets/sponsors/bronze/united.jpg"







const Sponsors = () => {
    const bg_style = {
        background: "#141316",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
    return(
        <div style = {bg_style}>
            <CustomHeader name = "Sponsors" img = {img}></CustomHeader>
            <SponsorHeading title="Platinum"/>
                <div style={{display: 'flex', justifyContent: 'center', padding: '25px 100px'}}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum1} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum2} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum3} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum4} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum5} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum6} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Platinum7} link="https://www.mmus.com/"/>
                        </Grid>
                    </Grid>
                </div>
                

            <SponsorHeading title="Gold"/>
                <div style={{display: 'flex', justifyContent: 'center', padding: '25px 100px'}}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold1} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold2} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold3} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold4} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold5} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold6} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold7} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold8} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Gold9} link="https://www.mmus.com/"/>
                        </Grid>
                    </Grid>
                </div>

            <SponsorHeading title="Silver"/>
                <div style={{display: 'flex', justifyContent: 'center', padding: '25px 100px'}}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver1} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver2} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver3} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver4} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver5} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver6} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver7} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver8} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver9} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver10} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver11} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver12} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver13} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver14} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver15} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver16} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Silver17} link="https://www.mmus.com/"/>
                        </Grid>
                    </Grid>
                </div>

            <SponsorHeading title="Bronze"/>
                <div style={{display: 'flex', justifyContent: 'center', padding: '25px 100px'}}>
                    <Grid container spacing={4} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze1} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze2} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze3} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze4} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze5} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze6} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze7} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze8} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze9} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze10} link="https://www.mmus.com/"/>
                        </Grid >
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze11} link="https://www.mmus.com/"/>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4} lg={3}>
                            <SponsorCard image={Bronze12} link="https://www.mmus.com/"/>
                        </Grid>
                    </Grid>
                </div>
        </div>
    )
};

export default Sponsors
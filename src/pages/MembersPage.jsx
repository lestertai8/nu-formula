import * as React from 'react';
import Grid from '@mui/material/Grid';

import CustomHeader from "../components/CustomHeader";
import img from "../fsae.jpeg";
import MemberCard from "../components/MemberCard"
import mem1 from "../assets/people/Sarah Yung.jpg";
import mem2 from "../assets/people/Christopher Uustal.png";
import mem3 from "../assets/people/Jake Silacci.jpg";
import mem4 from "../assets/people/Drew Hill.jpg";
import mem5 from "../assets/people/Jurgen Tisza.jpg";
import mem6 from "../assets/people/Trystan Cheung.png";
import mem7 from "../assets/people/Isabella Menendez.jpeg";
import mem8 from "../assets/people/Isabel Zhong.JPG";
import mem9 from "../assets/people/Skye Garcia.jpg";

const Members = () => {
    const bg_style = {
        background: "#141316",
    }
    return(
        <div style = {bg_style}>
            <CustomHeader name = "Members" img = {img}></CustomHeader>
            <div style={{display: 'flex', justifyContent: 'center', padding: '25px 60px'}}>
                <Grid container spacing={6} sx={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Sarah Yung" title="Project Manager" image={mem1} bio="Sarah is a third-year mechanical engineering student hailing from Mountain View, California. After designing the undertray and managing the aerodynamics subteam, she is thrilled to lead such a talented and dedicated team through this exciting transition. Sarah also works in the university's machine shop and sings with Treblemakers A Cappella. In her free time, she enjoys all things creative, like knitting, woodworking, and writing poetry." />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Chris Uustal" title="Chief Electrical Engineer" image={mem2} bio="Chris is a masters student studying computer & electrical engineering. From Morristown, NJ, he’s serving as the team's electrical chief engineer and is focusing on implementing our first electric drivetrain while also improving education and reliability. He enjoys cooking, climbing things, and walking around in the forest aimlessly for hours until he finds himself on top of a mountain or, less ideally, in Canada." />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Jacob Silacci" title="Chief Mechanical Engineer" image={mem3} bio="Jacob is a senior pursuing a master's and bachelor's degree in mechanical engineering at Northwestern’s McCormick School of Engineering and Applied Sciences. He is originally from Boston, Massachusetts. After transferring into Northwestern, he joined the team his sophomore year as part of the aerodynamics subteam working on the rear wing. Outside of Formula, Jacob is an avid tennis player and skier, and he enjoys playing the guitar in his free time." />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Drew Hill" title="Chassis Lead" image={mem4} bio="Drew is a senior studying mechanical engineering with a concentration in aerospace as well as a Segal Design Certificate from Madrid, Spain. He joined the team his sophomore year, working on jigging and packaging, then moving the next year to design and manufacture the frame of the car. While he is generally in Ford almost every single day, outside of said building and Formula, Drew can be found reading, enjoying bread, DJing, playing video games, and playing tennis." />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Jurgen Tisza" title="Hardware Lead" image={mem5} bio="Jurgen is a junior from York, PA doing a BS/MS in computer engineering. He enjoys zooming on his skateboard and going to the gym when he's free (never). He joined the team freshman year as part of the electronics subteam, and then sophomore year as part of the EV transition subteam, and is now leading and educating the hardware team to build the team’s first electric car." />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Trystan Cheung" title="Aerodynamics Lead" image={mem6} bio="Trystan is studying mechanical engineering in the McCormick School of Engineering. A junior from Topeka, Kansas, Trystan joined the aerodynamics subteam his freshman year and has remained on the subteam ever since. Some of the projects he has worked on include rear wing mounting and undertray. On the rare occasions that you find him outside of the Ford Engineering Design Center, he is most likely looking for food, meandering around campus, or playing soccer." />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Isabella Menendez" title="Suspension Lead" image={mem7} bio="Isabella is a junior from London, pursuing a BS/MS in mechanical & biomedical engineering. She joined the suspension subteam her freshman year, committing to late nights of machining and was in charge of steering this past year. She can’t wait to help her team finally adopt some healthy sleeping habits and improve education by running training sessions with them. In her (nonexistent) free time, she loves to sing, play ukulele & bake." />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Isabel Zhong" title="Software Lead" image={mem8} bio="Isabel is a junior from Sunnyvale, CA studying biomedical engineering and computer science. She joined Formula working on the data acquisition module in freshman year and leading telemetry the following year. Outside of Formula, Isabel likes to dance, eat good food, and watch sunsets ヽ(・∀・)ﾉ" />

                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={4}>
                        <MemberCard name="Skye Garcia" title="Powertrain Lead" image={mem9} bio="Skye is a sophomore studying journalism at Northwestern's Medill School of Journalism, Media, Integrated Marketing Communications. She is originally from the Bronx, New York. She joined the powertrain subteam freshman year and helped design and manufacture the fuel tank. Outside of Formula, you can find Skye painting, writing for the Daily Northwestern, and stealing croissants and muffins from Allison Hall." />
                    </Grid>
                </Grid>
            </div>
        </div>
    )
};

export default Members
import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const SponsorCard = ({image, link}) => {
    return(
        <Card
        sx={{
            borderRadius: "12px",
            width: "228px",
            height: "162px",
            objectFit: "cover",
        }}>
            <a href={link} style={{ display: 'block', width: '100%', height: '100%' }}>
                <CardMedia component="img" src={image} sx={{ objectFit: 'contain', width: '85%', height: '85%', display: 'block', marginLeft: 'auto',
            marginRight: 'auto' }}/>
            </a>
        </Card>
    )
};

export default SponsorCard
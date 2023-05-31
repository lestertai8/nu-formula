import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const SponsorCard = ({image, link}) => {
    return(
        <Card
        sx={{
            background: '#FDFCFF',
            border: '0.2px solid #FDFCFF',
            boxShadow: '2px 2px 6px rgba(20, 19, 22, 0.1)',
            borderRadius: '12px',
            width: 300,
            height: 200
        }}>
            <a href={link} style={{ display: 'block', width: '100%', height: '100%' }}>
                <CardMedia component="img" src={image} sx={{ objectFit: 'contain', width: '85%', height: '85%', display: 'block', marginLeft: 'auto',
            marginRight: 'auto' }}/>
            </a>
        </Card>
    )
};

export default SponsorCard
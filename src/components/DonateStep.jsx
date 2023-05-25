import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';

const DonateStep = ({step, instructions, image}) => {
    return(
        <div>
            <Typography>{step}</Typography>
            <Typography>{instructions}</Typography>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt="Step 1"
                    height="140"
                    image={image}
                />
            </Card>
        </div>
        
    )
};

export default DonateStep
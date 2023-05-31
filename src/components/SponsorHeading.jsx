import * as React from 'react';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const SponsorHeading = ({title}) => {
    return(
        <Card
        sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '10px',
            gap: '10px',
            width: '900px',
            height: '60px',
            background: 'linear-gradient(90deg, rgba(79, 44, 132, 0) 0%, #4F2C84 48.78%, rgba(79, 44, 132, 0) 98.81%)',
            borderRadius: '100px'
          }}>
            <CardContent>
                <Typography gutterBottom variant="h5"
                style={{
                    fontFamily: 'Helvetica',
                    fontStyle: 'normal',
                    fontWeight: 700,
                    fontSize: '32px',
                    lineHeight: '37px',
                    textAlign: 'center',
                    color: '#FDFCFF',
                    margin: "0px"
                }}>
                    {title}
                </Typography>
            </CardContent>
        </Card>
    )
};

export default SponsorHeading
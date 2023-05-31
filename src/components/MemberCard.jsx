import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';


const MemberCard = ({name, title, image, bio}) => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };

    return(
        <div>
            <Card
            sx={{
                borderRadius: '8px',
                width: 450, // Set the desired width
                height: 650, // Set the desired height
            }}>
                <CardMedia component="img" src={image} alt={name} onClick={handleOpen} sx={{cursor: 'pointer', width: '100%', height: '80%', objectFit: 'cover'}}/>
                <CardContent>
                    <Typography variant="h6">{name}</Typography>
                    <Typography variant="h8">{title}</Typography>
                </CardContent>
            </Card>
            <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                    {name}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {bio}
                </Typography>
                </Box>
            </Modal>
        </div>
    )
};

export default MemberCard
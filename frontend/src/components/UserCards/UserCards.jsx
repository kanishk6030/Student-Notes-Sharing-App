import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({
    username=null,
    email=null,
    department=null,
    semester=null,
    university=null,
    imageUrl="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
}) {
  return (
    <Card sx={{ maxWidth: 225 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageUrl}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {username}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {email}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {department}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {semester}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {university}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Profile</Button>
        {/* <Button size="small"></Button> */}
      </CardActions>
    </Card>
  );
}

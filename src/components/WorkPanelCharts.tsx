import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import { ICardPreview } from '../interfaces/ICardPreview';

export default function CardPreview(card: ICardPreview) {
  return (
    <Card sx={{ maxWidth: 60, minWidth: 50, margin: "10px", height: 50}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="30"          
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {card.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {card.content}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
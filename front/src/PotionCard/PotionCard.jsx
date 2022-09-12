import "./PotionCard.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { IconButton, Button, CardActionArea, CardActions } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function PotionCard(potion) {
    return (
        <div className="card-size">
            <Card sx={{ maxWidth: 345 }}  id="card-background">
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="140"
                        image={ potion.img }
                        alt={ potion.name }
                    />
                    <CardContent id="desc">
                        <Typography gutterBottom variant="h5" component="div">
                            <img src={ require("../assets/img/purple-potion.png") } alt="Purple potion" className="potion-type"/>
                            <h4>{potion.nb + 1 || 0}. { potion.name }</h4>
                            <span className="potion-type resize">{ potion.price }$</span>
                        </Typography>
                        <div className="desc-overflow">
                            <Typography variant="body2">
                                { potion.desc }
                            </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
                <CardActions className="actions" id="buttons">
                    <div>
                        <Button size="small" color="primary" aria-label="Buy this potion" disabled>
                            Buy
                        </Button>
                    </div>
                    <div>
                        <IconButton size="small" aria-label="Edit this potion" disabled>
                            <EditIcon />
                        </IconButton>
                        <IconButton size="small" aria-label="Delete this potion" onClick={() => potion.setToDelete(potion.nb)}>
                            <DeleteIcon />
                        </IconButton>
                    </div>
                </CardActions>
            </Card>
        </div>
    );
}

export default PotionCard;
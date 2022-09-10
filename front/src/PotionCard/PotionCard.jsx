import "./PotionCard.css";
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

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
                            <img src={require("../assets/img/purple-potion.png")} width="50vh" alt="Purple potion" className="potion-type"/>
                            <h4>{potion.nb + 1 || 0}. { potion.name }</h4>
                            <span className="potion-type resize">{ potion.price }$</span>
                        </Typography>
                        <Typography variant="body2">
                            { potion.desc }
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions className="actions" id="desc">
                    <div>
                        <Button size="small" color="primary" disabled>
                            Buy
                        </Button>
                    </div>
                    <div>
                        <Button size="small" color="primary" disabled>
                            Share
                        </Button>
                    </div>

                </CardActions>
            </Card>
        </div>
    );
}

export default PotionCard;
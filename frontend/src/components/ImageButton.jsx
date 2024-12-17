import { Card, CardActionArea, CardContent, CardMedia, Typography } from "@mui/material";




export default function ImageButton({img,onClick,imageHeight,minHeight,label,description,props}) {


    return (
        <Card sx={{minHeight: minHeight || "64px"}}>
            <CardActionArea onClick={onClick}>
                <CardMedia 
                    sx={{height: imageHeight || '180px'}}
                    image={img}
                    title={label}
                    alt="ddd"
                />
                <CardContent>
                    <Typography variant='h5' textAlign='center'>
                        {label}
                    </Typography>
                    {description && <Typography variant='body1'>{description}</Typography>}
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
import { Box, Stack, Typography } from "@mui/material";
import SomeRooms from "../../../templateItems/SomeRooms";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import RoomSmallCard from "../../../components/RoomSmallCard";

export default function MostPopularHotels(props) {

    return (
        <Stack direction='column' spacing={2}>
            <Typography variant="h4">
                Самые популярные отели
            </Typography>
            <Box sx={{display: {xs: 'none',sm:'none',md:'block',lg:'block'}}}>
                <Carousel infiniteLoop centerMode swipeScrollTolerance={50} centerSlidePercentage={30} showThumbs={false} animation='slide' autoPlay={true} interval={4000} showStatus={false} showIndicators={false}>
                    {SomeRooms.map(room => 
                        <RoomSmallCard room={room} key={room.title} />
                    )}
                </Carousel>
            </Box>
            <Box sx={{display: {xs: 'block',sm:'block',md:'none',lg:'none'}}}>
                <Carousel infiniteLoop centerMode centerSlidePercentage={70} showThumbs={false} animation='slide' autoPlay={true} interval={4000} showStatus={false} showIndicators={false}>
                    {SomeRooms.map(room => 
                        <RoomSmallCard room={room} key={room.title} />
                    )}
                </Carousel>
            </Box>
        </Stack>
    )

}
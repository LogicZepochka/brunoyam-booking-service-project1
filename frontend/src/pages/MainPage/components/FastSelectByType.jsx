import { Grid2, Stack, Typography } from "@mui/material"
import ImageButton from "../../../components/ImageButton"
import { createSearchParams, useNavigate } from "react-router-dom"



export default function FastSelectRoomByType(props) {

    const navigate = useNavigate();

    const goToSearchByType = (type) => {
            navigate({
                pathname: "search",
                search: createSearchParams({
                    type: type
                }).toString()
            })
    }

    return (
        <Stack direction='column' spacing={2}>
            <Typography variant='h4'>
                Поиск по типу помещения
            </Typography>
            <Grid2 container columns={4} spacing={3}>
                <Grid2 size={{xs: 4, sm: 4, md: 2, lg: 1}}>
                    <ImageButton label="Гостиницы и отели" img="/images/roomTypes/hotel.webp" onClick={() => goToSearchByType("HOTEL")}/>
                </Grid2>
                <Grid2 size={{xs: 4, sm: 4, md: 2, lg: 1}}>
                    <ImageButton label="Квартиры" img="/images/roomTypes/mnogoKomnat.jpg" onClick={() => goToSearchByType("APART")}/>
                </Grid2>
                <Grid2 size={{xs: 4, sm: 4, md: 2, lg: 1}}>
                    <ImageButton label="Комната" img="/images/roomTypes/studia.webp" onClick={() => goToSearchByType("ROOM")}/>
                </Grid2>
                <Grid2 size={{xs: 4, sm: 4, md: 2, lg: 1}}>
                    <ImageButton label="Офисное помещение" img="/images/roomTypes/office.jpg" onClick={() => goToSearchByType("OFFICE")}/>
                </Grid2>
            </Grid2>
        </Stack>
    )
}
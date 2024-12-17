﻿import { Box, Button, Container, Stack, Toolbar, Typography } from '@mui/material';
import FastSelectRoomByType from './components/FastSelectByType';
import FastSearch from './components/FastSearchComponent';
import SpecialBlogBlock from './components/SpecialBlogBlock';
import MostPopularHotels from './components/MostPopularHotels';

export default function MainPage({...props}) {


    return (
        <Stack direction='column'>
            <Box flex
                sx={{
                    display: {xs: 'none', sm: 'none', md: 'block', lg: 'block'},
                    width: '100%',
                    height: '450px',
                    backgroundImage: `url("/images/MainPageHeader.jpg")`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    justifyContent: 'end',
                    color: '#002a53'
                }}
            >
                <Container fixed sx={{paddingTop: '50px'}}>
                    <Typography variant='h3' align='left'>
                        Всё в одном месте
                    </Typography>
                    <Typography variant='h5' align='left'>
                        От уютной квартиры до просторного офиса
                    </Typography>
                    <Box sx={{
                        display: 'flex',
                        justifyContent: 'flex-start',
                        paddingTop: '4px'
                    }}>
                        <Button variant='contained'>
                            Выбрать помещение для аренды
                        </Button>
                    </Box>
                </Container>
            </Box>

            <Container>
                <Stack direction='column' spacing={2} paddingTop={2}>
                    <FastSearch />
                    <FastSelectRoomByType />
                    <MostPopularHotels />
                    <SpecialBlogBlock />
                    <Toolbar /> {/* Просто чтобы футер не "присасывался к элементам" */}
                </Stack>
            </Container>
        </Stack>
    )
}
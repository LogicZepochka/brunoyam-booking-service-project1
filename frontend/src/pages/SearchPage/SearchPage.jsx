import { Container, Paper, Stack, Toolbar, Typography } from "@mui/material";
import { useSearchParams } from "react-router-dom";
import SearchFields from "./components/SearchFields";
import SearchContextProvider from "../../context/SearchContext/SearchProvider";
import RoomList from "./components/RoomList";


export default function SearchPage(props) {

    return (
        <Container fixed>
                <SearchContextProvider>
                    <SearchFields />
                    <Paper variant='outlined' sx={{borderRadius: "0px 0px 16px 16px", minHeight:'50vh'}}>
                        <RoomList />
                    </Paper>
                </SearchContextProvider>
        </Container>
    )
}
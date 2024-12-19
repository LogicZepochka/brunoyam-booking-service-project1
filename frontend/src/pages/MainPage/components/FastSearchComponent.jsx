import { Box, Button, Card, Paper, Stack, TextField } from "@mui/material";
import { useState } from "react";
import { createSearchParams, useNavigate } from "react-router-dom";



export default function FastSearch(props) {

    const [searchText,setSearchText] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchText.length > 0) {
            navigate({
                pathname: "search",
                search: createSearchParams({
                    query: searchText
                }).toString()
            })
        }
    }

    return (
        <Paper 
            variant='outlined'
            sx={{
                borderRadius: '14px',
                padding: '12px',
                display: 'flex',
                borderColor: 'primary.secondary'
            }}
        >
            <Box flex flexGrow={1}>
                <Stack component='form' direction='row' spacing={1}>
                    <TextField label="Быстро найти помещение просто - начните вводить адрес" fullWidth value={searchText} onChange={(e) => setSearchText(e.target.value)} size="small"/>
                    <Button type="submit" variant='contained' onClick={handleSearch}>Поиск</Button>
                </Stack>
            </Box>
        </Paper>
    )
}
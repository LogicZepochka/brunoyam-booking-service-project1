import { Box, Button, Paper, Stack, TextField, Typography } from "@mui/material";
import { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import SearchContext from "../../../context/SearchContext/SearchContext";



export default function SearchFields({value,onChange = (searchParams) => {console.log(searchParams)}}) {
    
    const {searchParams, setSearchParams} = useContext(SearchContext);
    const [searchText,setSearchText] = useState(searchParams.get('query') || "");
    const [searchType,setSearchType] = useState(searchParams.get('type') || null);

    useEffect(() => {
        //setSearchText(query.get("query"));
    },[]);

    const handleSearch = (e) => {
        e.preventDefault();
        if(searchText.length > 0) 
        {
            searchParams.set('query',searchText)
        }
        else {
            searchParams.delete('query');
        }
        setSearchParams(searchParams);
        onChange(searchParams);
    }

    const clearFilters = () => {
        setSearchText("");
        setSearchType(null);
        let keysStr = [];
        for (const [key, value] of searchParams.entries()) {
            keysStr.push(key);
        }
        for(let key of keysStr) {
            searchParams.delete(key);
        }
        setSearchParams(searchParams);
        onChange(searchParams);
    }

    return (
    <Paper variant="outlined" sx={{borderRadius:'16px 16px 0px 0px', marginTop:'16px'}}>
        <Stack component="form" direction='column' padding={2} spacing={1}>
            <Typography variant="h6" paddingLeft={2}>
                    Поиск помещения
            </Typography>
            <TextField fullWidth size="small" label="Ключевые слова" value={searchText} onChange={(e) => {setSearchText(e.target.value)}} />
            
            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent:'flex-end'
                }}
            >
                <Button variant="secondary" onClick={clearFilters} >Сбросить фильтр</Button>
                <Button type="submit" onClick={handleSearch}>поиск</Button>
            </Box>
        </Stack>
    </Paper>)
}
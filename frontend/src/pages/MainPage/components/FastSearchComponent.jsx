import { Box, Button, Card, Paper, Stack, TextField } from "@mui/material";



export default function FastSearch(props) {


    return (
        <Paper 
            variant='outlined'
            sx={{
                borderRadius: '14px',
                padding: '12px',
                display: 'flex'
            }}
        >
            <Box flex flexGrow={1}>
                <Stack component='form' direction='row' spacing={1}>
                    <TextField label="Быстро найти помещение просто - начните вводить адрес" fullWidth size="small"/>
                    <Button type="submit" variant='contained'>Поиск</Button>
                </Stack>
            </Box>
        </Paper>
    )
}
import { Box, Paper, Skeleton, styled, Table, TableBody, TableCell, tableCellClasses, TableContainer, TableHead, TableRow, Typography } from "@mui/material";

const FillerRow = () => {
    return (
        <TableRow hover>
            <TableCell>
                <Skeleton />
            </TableCell>
            <TableCell align="right">
                <Skeleton />
            </TableCell>
                <TableCell align="right">
            <Skeleton />
                </TableCell>
            <TableCell align="right">
                <Skeleton />
            </TableCell>
        </TableRow>
    )
}

export default function RoomTable({rooms}) {


    return (
        <Paper variant="outlined">
            <TableContainer>
                <Table size='small'>
                    <TableHead>
                        <TableRow>
                            <TableCell>
                                Адрес
                            </TableCell>
                            <TableCell align="center">
                                Тип
                            </TableCell>
                            <TableCell align="right">
                                Площадь
                            </TableCell>
                            <TableCell align="right">
                                Стоимость в месяц, руб.
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {!rooms ? 
                        <>
                            <FillerRow />
                            <FillerRow />
                            <FillerRow />
                            <FillerRow />
                        </> : 
                            (rooms?.length > 0 && rooms.map(room => <TableRow hover>
                                <TableCell>
                                    {rooms.address}
                                </TableCell>
                                <TableCell align="right">
                                    {rooms.type}
                                </TableCell>
                                <TableCell align="right">
                                    {rooms.square}
                                </TableCell>
                                <TableCell align="right">
                                    {rooms.constPerMonth}
                                </TableCell>
                            </TableRow>))
                        }
                    </TableBody>
                </Table>
            </TableContainer>
            {rooms?.length <= 0 && <Box flex flexGrow={1} alignItems='center' textAlign='center'
                                sx={{width: '100% !important'}}>
                                    <Typography color="textDisabled">Помещений в аренду нет</Typography>
            </Box>}
        </Paper>
    )
}
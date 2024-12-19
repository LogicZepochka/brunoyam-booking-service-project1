import { useContext, useEffect, useState } from "react";
import SearchContext from "../../../context/SearchContext/SearchContext";
import { Box, Button, CircularProgress, List, Typography } from "@mui/material";
import SomeRooms from "../../../templateItems/SomeRooms";
import RoomCard from "../../../components/RoomCard";
import API from "../../../services/API/API";
import RoomCardSkeleton from "../../../components/RoomCardSkeleton";


export default function RoomList(props) {

    const { searchParams } = useContext(SearchContext); 
    const [rooms,setRooms] = useState([]);
    const [fetching,setFetching] = useState(false);
    const [chunkId, setChunkId] = useState(0);
    const [endReached,setEndReached] = useState(false);


    const fetchRooms = (chunk = 0) => {
        searchParams.set('chunk',chunk)
        setFetching(true);
        API.Rooms.GetAllRooms(searchParams.toString(),(err,result) => {
            if(!err) {
                console.log(err,endReached,result);
                if(result.data.length == 0) {
                    console.log('END REACHED');
                    setEndReached(true);
                    setFetching(false);
                    return;
                }
                console.log(result.data);
                let filtered = filteredRooms(result.data);
                setFetching(false);
                console.log(filtered);
                let targetRooms = filtered;
                if(chunk!=0) {
                    setRooms([...rooms,...targetRooms]);
                }
                else {
                    setRooms(targetRooms);
                }
                let nextChunk = chunk+1;
                setChunkId(nextChunk);
                console.log(chunkId,endReached);
            }
        })
    }

    const filteredRooms = (startArray) => {
        let result = startArray;
        console.log()
        let name = searchParams.get('query');
        let type = searchParams.get('type');
        
        if(name) result = result.filter(d => String(d.title).toLocaleLowerCase().includes(name.toLocaleLowerCase()));
        if(type) result = result.filter(d => d.type === type);

        return result;
    }

    useEffect(() => {
        setChunkId(0);
        setEndReached(false);
        setRooms([]);
        fetchRooms(0);
    },[searchParams]);
    

    return (
        <>
            <List>
                {rooms.map((room,index) => <RoomCard key={room.title+index} room={room}/>)}
                {(!endReached && !fetching) && 
                <List>
                    <Button fullWidth onClick={() => fetchRooms(chunkId)}>Загрузить больше</Button>
                </List>
                
                }
            </List>
            {fetching && (<RoomCardSkeleton />)}
        </>
            
    )
}
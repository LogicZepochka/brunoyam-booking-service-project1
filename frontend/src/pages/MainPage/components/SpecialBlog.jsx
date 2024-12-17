import { Box, List, ListItem, ListItemButton, ListItemText, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function SpecialBlog({ post }) {
    
    const navigate = useNavigate();

    return (
        <ListItemButton onClick={() => navigate(post.link)}>
            <ListItemText>
                <Stack direction='column'>
                    <Typography variant="h6">{post.title}</Typography>
                    <Typography variant="body1">{post.text}</Typography>
                </Stack>
            </ListItemText>
        </ListItemButton>
    )
}
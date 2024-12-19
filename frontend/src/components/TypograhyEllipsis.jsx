import { Typography } from "@mui/material";



export default function TypographyEllipsis({lines, props}) {
    
    return (
        <Typography
            sx={{

            }}
            className="block-ellipsis"
            props
        >
            {props.children}
        </Typography>
    )
}
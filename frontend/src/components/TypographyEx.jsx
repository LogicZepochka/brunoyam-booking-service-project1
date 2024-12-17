import { Skeleton, Typography } from "@mui/material"


export default function TypographyEx({message,variant,component,width,...props}) {

    return (
        <>
        { !message ? <Typography variant={variant} component={component}><Skeleton width={width} /></Typography> : 
        <Typography variant={variant} component={component}>{message}</Typography>
        }
        </>
    )
}
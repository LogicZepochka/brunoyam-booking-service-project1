import { Alert, AlertTitle, Collapse } from "@mui/material";




export default function HiddenAlert({show, title, severity, ...props}) {



    return (
        <Collapse in={show}>
            <Alert severity={severity || "error"}>
                {title && <AlertTitle>{title}</AlertTitle>}
                {props.children}
            </Alert>
        </Collapse>
    )
}
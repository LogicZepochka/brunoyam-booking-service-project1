import { Alert, Box, Button, CircularProgress, Collapse, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from "react-router-dom";
import API from "../../../services/API/API";




export default function ForgotPassword(props) {
    
    const navigate = useNavigate();

    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState("");

    const validateEmail = () => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const onChangedEmail = (e) => {
        if(emailError.length > 0) {
            setEmailError("");
        }
        setEmail(e.target.value);
    }

    const handleReset = (e) => {
        e.preventDefault();
        if(!validateEmail()) {
            setEmailError("Невалидный почтовый адрес. Адрес должен быть в формате 'example@mail.com'")
            return;
        }
        API.Autroization.RequestReset(email,(err,res) => {
            navigate("/login/restorePin?email="+email);
        });
        
    }

    const handleBack = (e) => {
        navigate("/login")
    }

    return (
        <Stack direction="column" width='70%' component="form" spacing={1}>
            <Typography variant="h4">
                Восстановление пароля
            </Typography>
            <Typography variant="body1">
                Для восстановления пароля введите почтовый адрес, указанный при регистрации
            </Typography>
            <TextField label="Почта" error={emailError.length > 0} helperText={emailError} required onChange={onChangedEmail} value={email} type="email" placeholder="example@mail.com" fullWidth/>
            <Button type="submit" onClick={handleReset}  variant="contained" fullWidth>
                Далее
            </Button>
            <Button type="button" onClick={handleBack}  fullWidth>
                назад
            </Button>
        </Stack>
    );
}
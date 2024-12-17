import { Alert, AlertTitle, Box, Button, CircularProgress, Collapse, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useSearchParams } from "react-router-dom";
import HiddenAlert from "../../../components/HiddenAlert";
import API from "../../../services/API/API";




export default function ForgotPasswordChange(props) {
    

    const [searchParams,setSearchParams] = useSearchParams();

    const [password,setPassword] = useState("");
    const [passwordRepeat,setPasswordRepeat] = useState("");

    const [error,setError] = useState("");
    
    const validatePasswordsFields = () => {
        if(password.length < 8) {
            setError("Минимальная длина пароля: 8 символов")
            return false;
        }
        if(!String(password).match(/^(?![a-zA-Z]+$)[a-zA-Z0-9]{8,}$/gm)) {
            setError("Пароль должен содержать только латинские буквы и цифры")
            return false;
        }
        if(password != passwordRepeat) {
            setError("Пароли не совпадают")
            return false;
        }
        return true;
    }

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    const handleResetPassword = (e) => {
        e.preventDefault();
        setError("");
        if(!validatePasswordsFields()) return;
        API.Autroization.SendPasswordChange(searchParams.get('email'),searchParams.get('key'),password,(err,result) => {
            console.log(result);
            if(err) {
                switch(result.code) {
                    case "EXPIRED": {
                        setError("Срок действия восстановления закончился. Начните заново.")
                        break;
                    }
                    default: {
                        setError("Неизвестная ошибка");
                        break;
                    }
                }
            }
            else {
                navigate(`/login?passwordChanged=1`)
            }
        });
        //navigate("/login")
    }

    useEffect(() => {
        if(!searchParams.get('email') || !searchParams.get('key')) {
            navigate("/login");
        }
    },[]);

    return (
        <Stack direction="column" width='70%' component="form" spacing={1}>
            <Typography variant="h4">
                Восстановление пароля
            </Typography>
            <Typography variant="h6">
                Установите новый пароль
            </Typography>
            <TextField type="password" error={error.length > 0} required label="Пароль" value={password} onChange={(e) => setPassword(e.target.value)} />
            <TextField type="password" error={error.length > 0} required label="Повторите пароль" value={passwordRepeat} onChange={(e) => setPasswordRepeat(e.target.value)} />
            <HiddenAlert show={error.length > 0}>{error}</HiddenAlert>
            <Button type="submit" onClick={handleResetPassword}  variant="contained" fullWidth>
                Восстановить доступ
            </Button>
            <Button type="button" onClick={handleBack} fullWidth>
                Назад
            </Button>
        </Stack>
    );
}
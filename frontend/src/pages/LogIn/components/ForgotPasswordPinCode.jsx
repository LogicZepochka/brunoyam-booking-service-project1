import { Alert, AlertTitle, Box, Button, CircularProgress, Collapse, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../../services/API/API";
import HiddenAlert from "../../../components/HiddenAlert";




export default function ForgotPasswordPinCode(props) {
    
    const onPinCodeChange = (e) => {
        if(e.target.value.length == 0) return setPinCode("");
        let oldValue = pinCode;
        console.log(e.target.value.length > 6,!String(e.target.value).match(/\d/gm));
        if(String(e.target.value).match(/\D/gm) || e.target.value.length > 6) {
            return;
        }
        else {
            if(error) {
                setError("");
            }
            setPinCode(e.target.value);
        }
    }

    const [pending,setPending] = useState(false);
    const [searchParams,setSearchParams] = useSearchParams();
    const [error,setError] = useState(false);

    const [pinCode,setPinCode] = useState("");

    const navigate = useNavigate();

    const handleBack = (e) => {
        e.preventDefault();
        navigate("/login")
    }

    const handlePinCheck = (e) => {
        e.preventDefault();
        if(pinCode.length < 6) {
            setError("Код восстановления не может быть меньше 6 символов");
            return;
        }
        API.Autroization.SendResetPin(pinCode,(err,result) => {
            if(err) {
                switch(result.code) {
                    case "WRONG_PIN": {
                        setError("Неверный пин-код.")
                        break;
                    }
                    case "EXPIRED": {
                        setError("Срок действия кода восстановления закончился. Попробуйте еще раз")
                        break;
                    }
                }
            }
            else {
                navigate(`/login/restorePassword?email=${searchParams.get('email')}&key=${result.data.key}`)
            }
        });

        //
    }

    useEffect(() => {
        let email = searchParams.get('email');
        if(!email) {
            navigate("/login");
        }
    },[]);

    return (
        <Stack direction="column" width='70%' component="form" spacing={1}>
            <Typography variant="h4">
                Восстановление пароля
            </Typography>
            { pending ? <CircularProgress size="64px"/>    :   
            <>
            <Typography variant="h6">
                Проверьте почтовый ящик
            </Typography>
            <Typography variant="body1">
                Вам на почту было отправлен код восстановления пароля. Введите его в поле ниже, чтобы установить новый пароль
            </Typography>
            <TextField type="tel" error={error.length > 0} helperText={error} required label="Код восстановления" value={pinCode} onChange={onPinCodeChange} />
            <Button type="submit" onClick={handlePinCheck}  variant="contained" fullWidth>
                Далее
            </Button>
            <Button type="button" onClick={handleBack} fullWidth>
                Назад
            </Button>
            
            </>}
        </Stack>
    );
}
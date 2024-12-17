import { Alert, AlertTitle, Box, Button, CircularProgress, Collapse, IconButton, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import { useContext, useState } from "react";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate, useSearchParams } from "react-router-dom";
import API from "../../../services/API/API";
import Cookies from 'universal-cookie';
import UserContext from "../../../context/UserContext/UserContext";
const cookies = new Cookies();




export default function LoginForm(props) {

    const navigate = useNavigate();
    const [searchParams,setSearchParams] = useSearchParams();
    const {setUser} = useContext(UserContext);

    const [error,setError] = useState({hasError: false, message: ""})
    const [loading,setLoading] = useState(false);    

    const [email,setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
    const [password,setPassword] = useState("");
    const [showPassword,setShowPassword] = useState(false);

    const validateEmail = () => {
        return String(email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          );
      };

    const catchError = (msg) => {
        setError({
            hasError: true,
            message: msg
        });
    }

    const resetError = () => {
        setError({
            hasError: false,
            message: error.message
        });
        setEmailError("");
    }

    const loginHandle = (e) => {
        e.preventDefault();
        if(!validateEmail()) {
            setEmailError("Невалидный почтовый адрес. Адрес должен быть в формате 'example@mail.com'")
            return;
        }
        resetError();
        setLoading(true);
        API.Autroization.SignIn(email,password,(err,result) => {
            if(err) {
                if(result.code == "WRONG_CREDS") {
                    catchError("Неверный логин или пароль");
                }
                else {
                    catchError("Произошла неизвестная ошибка");
                }
            }
            else {
                let accessToken = result.data.tokens.accessToken;
                cookies.set('authorization',accessToken);
                setUser(result.data.user);
                navigate(`/profile?id=${result.data.user.id}`);
            }
            setLoading(false);
        });
    }

    return (
        <Stack direction="column" width='70%' component="form" spacing={1}>
            <Typography variant="h4">
                Вход
            </Typography>
            <TextField label="Почта" error={emailError.length > 0 || error.hasError} helperText={emailError} required disabled={loading} onChange={(e) => setEmail(e.target.value)} value={email} type="email" placeholder="example@mail.com" fullWidth/>
            <TextField label="Пароль" required error={error.hasError} onChange={(e) => setPassword(e.target.value)} value={password} disabled={loading} type={showPassword ? "text" : "password"} fullWidth 
            slotProps={{
                input: {
                    endAdornment: <InputAdornment>
                    <IconButton
                        aria-label={
                            showPassword ? "Спрятать пароль" : "Показать пароль"
                        }
                        onClick={() => {setShowPassword(!showPassword)}} edge="end">
                        {showPassword ? <VisibilityOff/> : <Visibility/>}
                    </IconButton>
                </InputAdornment>
                }
            }}

            
            />
            <Box flex alignSelf='end'><Button type="button" fullWidth onClick={() => navigate('/login/restore')}>Забыл пароль</Button></Box>
            <Button type="submit" onClick={loginHandle} disabled={loading || password.length < 8 || email.length < 4} variant="contained" fullWidth>
                {loading ? <CircularProgress size={24}/> : "Войти"}
            </Button>
            {searchParams.get("passwordChanged") && 
                <Alert>
                    <AlertTitle>Пароль изменен!</AlertTitle>
                    Ваш пароль был успешно изменен. Вы можете использовать его для входа.
                </Alert>}
            <Collapse
                in={error.hasError}
            >
                <Alert severity="error">
                    {error.message}
                </Alert>
            </Collapse>
        </Stack>
    );
}
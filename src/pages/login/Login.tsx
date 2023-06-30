import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { login } from "../../services/service";
import { Link, useNavigate } from "react-router-dom";
import { addToken } from "../../store/tokens/action";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";
import { ChangeEvent, useEffect, useState } from "react";
import ImgLogin from "../../assets/img/login-img.svg";
import UsuarioLogin from "../../models/UsuarioLogin";
import "./Login.css";

export default function Login() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [token, setToken] = useState('')
    const [usuarioLogin, setUserLogin] = useState<UsuarioLogin>(
        {
            id: 0,
            email: '',
            senha: '',
            token: ''
        }
    )

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUserLogin({
            ...usuarioLogin,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        if (token != '') {
            dispatch(addToken(token))
            navigate('/home')
        }
    }, [token])

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {

            await login(`/usuarios/logar`, usuarioLogin, setToken)
            toast.success('Usuário logado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });

        } catch (error) {
            toast.warn('Dados do usuário inconsistentes. Erro ao logar!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
            });
        }
    }


    return (
        <>
            <Grid container direction='row' justifyContent='center' alignItems='center' className="">
                <Grid xs={6} className='grid-imagem'>
                    <Box className="box-container">
                        <Box>
                            <Typography >
                                <h1>Divulgue seus produtos na nossa plataforma</h1>
                                Faça parte do nosso catálogo de divulgação e aumente a venda dos seus produtos.
                            </Typography>
                        </Box>
                        <img src={ImgLogin} alt="" />
                    </Box>
                </Grid>
                <Grid alignItems='center' xs={6}>
                    <Box paddingX={20} className="box-login">
                        <Box>
                            <form onSubmit={onSubmit}>
                                <Typography variant='h3' gutterBottom color='textPrimary' component='h3' align='center' style={{ fontWeight: 'bold' }}>Entrar</Typography>
                                <TextField value={usuarioLogin.email} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='email' label='email' variant='outlined' name='email' margin='normal' type="email" fullWidth />
                                <TextField value={usuarioLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha' variant='filled' name='senha' margin='normal' type='password' fullWidth />
                                <Box marginTop={2} textAlign='center'>
                                    <Button type='submit' variant='contained' color='primary'>
                                        Logar
                                    </Button>
                                </Box>
                            </form>
                        </Box>
                        <Box display='flex' justifyContent='center' marginTop={2}>
                            <Box marginRight={1}>
                                <Typography variant='subtitle1' gutterBottom align='center'>Não tem uma conta?</Typography>
                            </Box>
                            <Link to={`/cadastro`}>
                                <Typography variant='subtitle1' gutterBottom align='center' style={{ fontWeight: 'bold' }}>Cadastre-se</Typography>
                            </Link>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </>
    )
}
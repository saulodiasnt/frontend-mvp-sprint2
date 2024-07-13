/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import * as S from "./styles";
import { useContext } from "react";
import { AuthContext } from "../../utils/contexts/Auth";
import { Button, Typography } from "@mui/material";
import { ApiContext, ApiContextProps } from "../../utils/contexts/Api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export const Register = () => {
  const { login, handleModalLogin } = useContext(AuthContext);
  const { api } = useContext(ApiContext) as ApiContextProps;
  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data: any) => {
    try {
      await api.post("/register", data);
      await login(data.email, data.password);
      navigate("/");
    } catch (error) {
      toast.error("Erro ao registrar usuário");
    }
  };

  return (
    <S.Wrapper component="form" onSubmit={handleSubmit(onSubmit)}>
      <S.Title>Registrar</S.Title>
      <S.InputLogin
        margin="normal"
        required
        fullWidth
        id="email"
        label="Seu nome completo"
        autoComplete="email"
        {...register("name", { required: "Nome é obrigatório" })}
        autoFocus
      />
      <S.InputLogin
        margin="normal"
        required
        fullWidth
        id="email"
        label="Endereço de Email"
        autoComplete="email"
        {...register("email", { required: "Email é obrigatório" })}
        autoFocus
      />
      <S.InputLogin
        margin="normal"
        required
        fullWidth
        label="Senha"
        type="password"
        id="password"
        {...register("password", { required: true })}
        autoComplete="current-password"
      />

      <S.ButtonLogin type="submit">Registrar</S.ButtonLogin>
      <div>
        <Typography variant="body2" color="white" align="center">
          Já possui uma conta?{" "}
          <Button
            onClick={() => {
              handleModalLogin(true);
            }}
          >
            Faça o Login
          </Button>
        </Typography>
      </div>
    </S.Wrapper>
  );
};

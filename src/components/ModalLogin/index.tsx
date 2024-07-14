/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Modal, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import { FC, useContext } from "react";

import * as S from "./styles";
import { AuthContext } from "../../utils/contexts/Auth";
import { useNavigate } from "react-router-dom";

export type ModalLoginProps = {
  open: boolean;
  onClose: () => void;
};

export const ModalLogin: FC<ModalLoginProps> = (props) => {
  const { login } = useContext(AuthContext);
  const { onClose, open } = props;
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data: any) => {
    login(data.email, data.password);
  };

  const handleClose = () => {
    onClose();
  };

  const handleRegister = () => {
    onClose();

    navigate("/register");
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-login-title"
      aria-describedby="modal-login-description"
    >
      <S.Wrapper component="form" onSubmit={handleSubmit(onSubmit)}>
        <S.Title>Entrar</S.Title>
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

        <S.ButtonLogin type="submit">Entrar</S.ButtonLogin>
        <div>
          <Typography variant="body2" color="white" align="center">
            Não tem uma conta?{" "}
            <Button onClick={handleRegister}>Cadastre-se</Button>
          </Typography>
        </div>
      </S.Wrapper>
    </Modal>
  );
};

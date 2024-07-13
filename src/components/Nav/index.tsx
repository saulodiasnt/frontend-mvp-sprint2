import { Avatar, Button, IconButton, Menu, MenuItem } from "@mui/material";
import logo from "../../assets/pucflix-logo.png";

import * as S from "./styles";
import { useUser } from "../../utils/hooks/useUser";
import { useContext, useState } from "react";
import { AuthContext } from "../../utils/contexts/Auth";
import { useNavigate } from "react-router-dom";

export const Nav = () => {
  const user = useUser();
  const { logout, handleModalLogin } = useContext(AuthContext);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  function stringToColor(string: string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name: string) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  return (
    <S.Wrapper>
      <div className="logo">
        <img src={logo} alt="netflix" onClick={() => navigate("/")} />
      </div>
      <div>
        {user ? (
          <>
            <IconButton
              aria-controls={open ? "basic-menu" : undefined}
              aria-haspopup="true"
              aria-expanded={open ? "true" : undefined}
              onClick={handleClick}
            >
              <Avatar {...stringAvatar(user?.name as string)} />
            </IconButton>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={() => navigate("/list")}>My List</MenuItem>
              <MenuItem onClick={logout}>Logout</MenuItem>
            </Menu>
          </>
        ) : (
          <Button
            color="error"
            variant="contained"
            onClick={() => {
              handleModalLogin(true);
            }}
          >
            Entrar
          </Button>
        )}
      </div>
    </S.Wrapper>
  );
};

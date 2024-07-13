import { ButtonBase, styled } from "@mui/material";

type ButtonProps = {
  light?: boolean;
};

const buttonModifiers = {
  light: () => ({
    backgroundColor: "#fff",
    color: "#000",

    "&:hover": {
      backgroundColor: "#f5f5f5",
    },
  }),
};

export const Button = styled(ButtonBase)<ButtonProps>(({ light }) => ({
  height: "50px",
  //   width: "100%",
  color: "#fff",
  backgroundColor: "#e50914",
  borderRadius: "3px",
  fontWeight: "bold",
  fontSize: "16px",
  border: "none",
  margin: "10px 0",

  "&:hover": {
    backgroundColor: "#fc1722",
    cursor: "pointer",
  },

  ...(light && buttonModifiers.light()),
}));

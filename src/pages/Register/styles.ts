import { Box, styled, TextField } from "@mui/material";

export const Wrapper = styled(Box)({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "450px",
  backgroundColor: "rgba(0,0,0,0.75)",
  padding: "60px",
  borderRadius: "10px",
});

export const InputLogin = styled(TextField)({
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  width: "100%",
  borderRadius: "5px",
  margin: "10px 0",
  outline: "none",
  "& input": {
    color: "#fff",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "transparent",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.2)",
  },
  "& .Mui-focused.MuiInputLabel-root": {
    color: "white",
  },
});

export const Title = styled("h2")({
  fontSize: "32px",
});

export const ButtonLogin = styled("button")({
  height: "50px",
  width: "100%",
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
});

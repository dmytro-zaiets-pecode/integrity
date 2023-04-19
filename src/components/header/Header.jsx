import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../../Logo.png";

const Header = () => {
  return (
    <Box
      sx={{
        padding: "20px 70px",
        height: "100%",
        backgroundColor: "#FFFFFF",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex" }}>
        <img style={{ width: 33, height: 33 }} src={Logo} alt="logo" />
        <Typography sx={{ fontSize: 24, marginLeft: "16px" }} color="#32806D">
          AdvisorMatch
        </Typography>
      </Box>
      <Button
        sx={{ color: "#32806D", ":hover": { outline: "1px dashed #32806D" } }}
        variant="text"
      >
        Log in
      </Button>
    </Box>
  );
};

export default Header;

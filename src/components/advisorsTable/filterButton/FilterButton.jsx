import Button from "@mui/material/Button";

const FilterButton = ({ text, onClick }) => {
  return (
    <Button
      sx={{
        color: "#32806D",
        border: "1px solid #32806D",
        borderRadius: "24px",
        fontSize: "16px",
        textTransform: "capitalize",
      }}
      onClick={onClick}
      variant="outlined"
    >
      {text}
    </Button>
  );
};

export default FilterButton;

import Box from "@mui/material/Box";
import { useState } from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  backgroundColor: "#FFFFFF",
  boxShadow: 24,
  p: "23px",
};
const FilterModal = ({
  open,
  handleClose,
  filterValues,
  activeFilter,
  setAppliedFilters,
  appliedFilters,
}) => {
  const [checked, setChecked] = useState(appliedFilters);
  const handleToggle = (value) => () => {
    const currentIndex = checked[`${activeFilter}`].indexOf(value);
    const newChecked = { ...checked };

    if (currentIndex === -1) {
      checked[`${activeFilter}`].push(value);
    } else {
      checked[`${activeFilter}`].splice(currentIndex, 1);
    }
    setChecked(newChecked);
  };
  const applyFilters = () => {
    const newValue = { [`${activeFilter}`]: checked[`${activeFilter}`] };
    setAppliedFilters({
      ...appliedFilters,
      ...newValue,
    });
    handleClose();
  };
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ textTransform: "capitalize" }}
            id="modal-modal-title"
            variant="h6"
            component="h2"
          >
            {activeFilter}
          </Typography>
          <List
            sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
          >
            {filterValues[`${activeFilter}`]?.map((value) => {
              const labelId = `checkbox-list-label-${value}`;

              return (
                <ListItem key={value} disablePadding>
                  <ListItemButton
                    role={undefined}
                    onClick={handleToggle(value)}
                    dense
                  >
                    <ListItemIcon>
                      <Checkbox
                        edge="start"
                        checked={
                          checked[`${activeFilter}`].indexOf(value) !== -1
                        }
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ "aria-labelledby": labelId }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      sx={{ color: "#4A5568", fontSize: "16px" }}
                      id={labelId}
                      primary={value}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Box sx={{ display: "flex", justifyContent: "end" }}>
            <Button
              sx={{
                backgroundColor: "#FFAD3D",
                color: "#225C4E",
                ":hover": { backgroundColor: "#FFAD3D", opacity: 0.8 },
              }}
              variant="contained"
              onClick={applyFilters}
            >
              Apply
            </Button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
};
export default FilterModal;

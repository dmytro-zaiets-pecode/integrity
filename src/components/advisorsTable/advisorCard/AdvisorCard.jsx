import Card from "@mui/material/Card";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Avatar from "@mui/material/Avatar";
function stringToColor(string) {
  let hash = 0;
  let i;
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }
  let color = "#";
  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }
  return color;
}
function stringAvatar(name) {
  if (name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  } else {
    return {
      sx: {
        bgcolor: "green",
      },
      children: "AA",
    };
  }
}
const AdvisorCard = ({ item }) => {
  return (
    <Card sx={{ backgroundColor: "#fff", minHeight: "260px" }}>
      <CardContent>
        <Avatar {...stringAvatar(item?.name)} />
        <Typography
          sx={{ fontSize: "20px", color: "#0E382F", marginTop: "15px" }}
        >
          {item.name}
        </Typography>
        <Typography
          sx={{ fontSize: "14px", color: "#718096", marginTop: "4px" }}
        >
          {item.certification}
        </Typography>
        {item.location && (
          <Box
            sx={{
              width: "max-content",
              display: "flex",
              alignItems: "center",
              backgroundColor: "#C3EBE1",
              padding: "1px",
              borderRadius: "2px",
              marginTop: "15px",
            }}
          >
            <LocationOnIcon sx={{ width: "10px", height: "10px" }} />
            <Typography
              sx={{
                fontSize: "12px",
                color: "#0E382F",
                marginLeft: "5px",
                fontWeight: "bold",
              }}
            >
              {item.location}
            </Typography>
          </Box>
        )}
        {item.specialties && !!item.specialties.length && (
          <>
            <Typography
              sx={{ fontSize: "16px", color: "#2D3748", marginTop: "15px" }}
            >
              Specialty
            </Typography>
            <Typography
              sx={{ fontSize: "16px", color: "#718096", marginTop: "10px" }}
            >
              {item.specialties?.map((i, index) => {
                if (item.specialties.length === index + 1) {
                  return `${i}`;
                } else {
                  return `${i}, `;
                }
              })}
            </Typography>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default AdvisorCard;

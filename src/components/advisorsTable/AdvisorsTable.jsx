import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import TablePagination from "@mui/material/TablePagination";
import ADVISORS from "../../data.json";
import AdvisorCard from "./advisorCard";
import FilterButton from "./filterButton";
import FilterModal from "./filterModal";
import { getFiltersValues, ITEMS_COUNT } from "../../utils/utils";

const AdvisorsTable = () => {
  const filterValues = getFiltersValues(ADVISORS);
  const [advisors, setAdvisors] = useState(ADVISORS);
  const [open, setOpen] = useState(false);
  const [appliedFilters, setAppliedFilters] = useState({
    certification: [],
    specialties: [],
    location: [],
  });
  const [activeFilter, setActiveFilter] = useState(null);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(6);
  const [paginatedAdvisors, setPaginatedAdvisors] = useState(advisors);

  const handleOpenFilterModal = (value) => {
    setOpen(true);
    setActiveFilter(value);
  };

  useEffect(() => {
    const filteredData = ADVISORS.filter((item) => {
      const brandMatched =
        appliedFilters.certification?.length > 0
          ? appliedFilters.certification.includes(item.certification)
          : true;

      const specialtiesMatched =
        appliedFilters.specialties.length > 0
          ? appliedFilters.specialties?.some((i) => {
              return item.specialties?.some((c) => {
                return c === i;
              });
            })
          : true;

      const locationMatched =
        appliedFilters.location.filter((x) => x !== 0)?.length > 0
          ? appliedFilters.location.includes(item.location)
          : true;

      return brandMatched && specialtiesMatched && locationMatched;
    });
    setAdvisors(filteredData);
    setPage(0);
    setRowsPerPage((prev) => {
      return Math.ceil(filteredData.length / ITEMS_COUNT) > prev
        ? prev
        : Math.ceil(filteredData.length / ITEMS_COUNT);
    });
  }, [appliedFilters]);

  useEffect(() => {
    const newArray = advisors.slice(
      page * (rowsPerPage * ITEMS_COUNT),
      ITEMS_COUNT * rowsPerPage * (page + 1)
    );
    setPaginatedAdvisors(newArray);
  }, [page, rowsPerPage, advisors]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const getPaginationCount = () => {
    return Array.from({ length: Math.ceil(advisors.length / ITEMS_COUNT) }).map(
      (item, index) => index + 1
    );
  };

  return (
    <Box sx={{ padding: "39px 70px" }}>
      <FilterModal
        open={open}
        handleClose={() => setOpen(false)}
        filterValues={filterValues}
        activeFilter={activeFilter}
        setAppliedFilters={setAppliedFilters}
        appliedFilters={appliedFilters}
      />
      <Typography sx={{ fontSize: 36 }} color="#000">
        List of advisors ({advisors.length})
      </Typography>
      <Stack sx={{ marginTop: "45px" }} direction="row" spacing={2}>
        <FilterButton
          text="Certifications"
          onClick={() => handleOpenFilterModal("certification")}
        />
        <FilterButton
          text="Specialties"
          onClick={() => handleOpenFilterModal("specialties")}
        />
        <FilterButton
          text="Location"
          onClick={() => handleOpenFilterModal("location")}
        />
      </Stack>
      <Box sx={{ flexGrow: 1, marginTop: "60px" }}>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {paginatedAdvisors.map((item) => (
            <Grid item xs={12} sm={6} md={3} key={item.id}>
              <AdvisorCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Box>
      <TablePagination
        component="div"
        count={Math.ceil(advisors.length / ITEMS_COUNT)}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={getPaginationCount()}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Box>
  );
};

export default AdvisorsTable;

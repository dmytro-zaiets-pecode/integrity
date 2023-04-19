export const ITEMS_COUNT = 4;
export const getFiltersValues = (arr) => {
  const result = {
    certification: [],
    specialties: [],
    location: [],
  };
  arr.forEach((item) => {
    if (!result.certification.includes(item.certification)) {
      if (item.certification) {
        result.certification.push(item.certification);
      }
    }
    if (!result.location.includes(item.location)) {
      if (item.location) {
        result.location.push(item.location);
      }
    }
    item.specialties?.forEach((i) => {
      if (!result.specialties.includes(i)) {
        if (i) {
          result.specialties.push(i);
        }
      }
    });
  });
  return result;
};

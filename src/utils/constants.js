export const DEFAULT_CATEGORY_ID = "abcat0712000";

export const DEFAULT_SORT = "customerReviewCount.dsc";

export const PAGE_SIZE = 15;

export const START_PAGE = 1;

export const CATEGORIES = [
  {
    id: "pcmcat287600050002",
    name: "desktops",
  },
  {
    id: "pcmcat287600050003",
    name: "laptops",
  },
  {
    id: "pcmcat304600050011",
    name: "monitors",
  },
  {
    id: "abcat0507000",
    name: "components",
  },

  {
    id: "pcmcat159700050051",
    name: "accesories",
  },

  { id: "abcat0515012", name: "connectors" },
];

export const SORTS = [
  {
    type: "customerReviewCount.dsc",
    name: "Popularity",
  },
  {
    type: "salePrice.dsc",
    name: "Price (high)",
  },
  {
    type: "salePrice.asc",
    name: "Price (low)",
  },
  {
    type: "name.asc",
    name: "A to Z",
  },
  {
    type: "name.dsc",
    name: "Z to A",
  },
];

export const SPECS = ["features", "accessories", "details"];

export const imgRegex = /Standard/i;

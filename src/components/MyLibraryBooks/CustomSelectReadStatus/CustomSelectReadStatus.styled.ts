import { StylesConfig } from "react-select";
import { ICustomSelectReadStatus } from "./CustomSelectReadStatus";
import { theme } from "../../../helpers";

export const SelectCustom = (): StylesConfig<ICustomSelectReadStatus> => ({
  container: (provided) => ({
    ...provided,
    width: "120px",
  }),

  control: (provided) => ({
    ...provided,
    borderRadius: "12px",
    background: "inherit",
    border: `1px solid ${theme.colors.mediumGray}`,
    padding: "12px 14px",
    boxShadow: "none",

    div: {
      //   display: "none",
      justifyContent: "start",
    },

    "&:hover": {
      boxShadow: "none",
      border: `1px solid ${theme.colors.mediumGray}`,
    },

    "@media screen and (min-width: 768px)": {
      padding: "14px",
    },

    "@media screen and (min-width: 1280px)": {},
  }),

  valueContainer: (provided) => ({
    ...provided,
    padding: "0",
  }),

  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),

  dropdownIndicator: (provided, state) => ({
    ...provided,
    padding: "0",
    transform: state.selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)",

    svg: {
      width: "16px",
      height: "16px",
      fill: `${theme.colors.white}`,
    },
  }),

  input: (provided) => ({
    ...provided,
    margin: "0",
    paddingBottom: "0",
    paddingTop: "0",
  }),

  singleValue: (provided) => ({
    ...provided,
    margin: "0",
    padding: "0",
    color: `${theme.colors.white}`,
    textAlign: "center",
    fontFamily: `${theme.fontFamily}`,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.33",
    letterSpacing: "-0.24px",

    "@media screen and (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "1.28",
      letterSpacing: "-0.28px",
    },

    "@media screen and (min-width: 1280px)": {},
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "12px",
    padding: "14px",
    background: `${theme.colors.darkGray}`,
    // boxShadow: "0px 4px 47px 0px rgba(18, 20, 23, 0.08)",
    // width: "max-content",
  }),

  menuList: (provided) => ({
    ...provided,
    display: "flex",
    flexDirection: "column",
    gap: "7px",
  }),

  option: (provided, state) => ({
    ...provided,
    padding: "0",
    backgroundColor: "none",
    color: state.isSelected ? `${theme.colors.white}` : `${theme.colors.gray}`,
    fontFamily: `${theme.fontFamily}`,
    fontSize: "12px",
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: "1.33",

    "&:hover": {
      color: `${theme.colors.white}`,
    },

    "@media screen and (min-width: 768px)": {
      fontSize: "14px",
      lineHeight: "1.28",
      letterSpacing: "-0.28px",
    },

    "@media screen and (min-width: 1280px)": {},
  }),
});

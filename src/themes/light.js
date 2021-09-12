import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
import fonts from "./fonts";
import commonSettings from "./global.js";

const lightTheme = {
  color: "rgb(37, 52, 73)",
  gold: "#F8CC82",
  gray: "#A3A3A3",
  blueish_gray: "#768299",
  lightGray: "rgba(255, 255, 255, 0.75)",
  textHighlightColor: "#93AEBC", // "#F4D092",
  sidebarHighlightColor: "rgba(54, 56, 64, 0.5)",
  backgroundColor: "#AFCDE9",
  // background:
  // "radial-gradient(circle at 25% 0%, rgba(227,255,240,.5), rgba(227,255,240,0) 50%), radial-gradient(circle at 80% 80%, rgba(131,165,203,.5), rgba(131,165,203,0) 50%)",
  background: "linear-gradient(180deg, #AFCDE9 1%, #F7FBE7 100%)",
  paperBg: "rgba(255, 255, 255, 0.6)",
  modalBg: "#FAFAFAEF",
  popoverBg: "rgba(255, 255, 255, 0.95)",
  menuBg: "rgba(255, 255, 255, 0.5)",
  backdropBg: "rgba(200, 200, 200, 0.4)",
  largeTextColor: "#759AAE",
  activeLinkColor: "#222222",
  activeLinkSvgColor: "invert(64%) sepia(11%) saturate(934%) hue-rotate(157deg) brightness(90%) contrast(86%)",
  // primaryButtonBG: "#759AAE",
  primaryButtonBG: "#93AEBC",
  primaryButtonColor: "#FCFCFC",
  primaryButtonHoverBG: "#759AAE",
  // these need fixing
  primaryButtonHoverColor: "#333333",
  secondaryButtonHoverBG: "rgba(54, 56, 64, 1)",
  outlinedPrimaryButtonColor: "#253449",
  outlinedPrimaryButtonBorderColor: "#253449",
  outlinedPrimaryButtonHoverBG: "#768299",
  outlinedPrimaryButtonHoverColor: "#FFFFFFFF",
  outlinedPrimaryButtonHoverBorderColor: "#768299",
  outlinedSecondaryButtonHoverBG: "#FFFFFF",
  outlinedSecondaryButtonHoverColor: "#333333",
  containedSecondaryButtonHoverBG: "#33333333",
  ohmMenuButtonHoverBG: "#CFD2D4",
};

export const light = responsiveFontSizes(
  createTheme(
    {
      primary: {
        main: lightTheme.color,
      },
      palette: {
        type: "light",
        background: {
          default: lightTheme.backgroundColor,
          paper: lightTheme.paperBg,
        },
        contrastText: lightTheme.color,
        primary: {
          main: lightTheme.color,
        },
        neutral: {
          main: lightTheme.color,
          secondary: lightTheme.gray,
        },
        text: {
          primary: lightTheme.color,
          secondary: lightTheme.blueish_gray,
        },
      },
      typography: {
        fontFamily: "Square",
      },
      props: {
        MuiSvgIcon: {
          htmlColor: lightTheme.color,
        },
      },
      overrides: {
        MuiCssBaseline: {
          "@global": {
            "@font-face": fonts,
            body: {
              background: lightTheme.background,
            },
          },
        },
        MuiPaper: {
          root: {
            backgroundColor: lightTheme.paperBg,
            "&.ohm-card": {
              backgroundColor: lightTheme.paperBg,
            },
            "&.ohm-modal": {
              backgroundColor: lightTheme.modalBg,
            },
            "&.ohm-menu": {
              backgroundColor: lightTheme.menuBg,
              backdropFilter: "blur(33px)",
            },
            "&.ohm-popover": {
              backgroundColor: lightTheme.popoverBg,
              color: lightTheme.color,
              backdropFilter: "blur(15px)",
            },
          },
        },
        MuiDrawer: {
          paper: {
            backgroundColor: lightTheme.paperBg,
            zIndex: 7,
          },
        },
        MuiBackdrop: {
          root: {
            backgroundColor: lightTheme.backdropBg,
          },
        },
        MuiLink: {
          root: {
            color: lightTheme.color,
            "&:hover": {
              textDecoration: "underline",
              "&.branding-header-link": {
                color: lightTheme.sidebarHighlightColor,
              },
              "&.social-link": {
                color: lightTheme.sidebarHighlightColor,
              },
              "&.active": {
                color: lightTheme.color,
              },
            },
            "&.active": {
              color: lightTheme.color,
              textDecoration: "underline",
              textDecorationThickness: "2px",
            },
            "@media (hover:none)": {
              "&:hover": {
                textDecoration: "underline",
                backgroundColor: "#00000000 !important",
                "&.branding-header-link": {
                  color: lightTheme.textHighlightColor,
                },
              },
              "&:focus": {
                color: lightTheme.textHighlightColor,
                backgroundColor: "#00000000 !important",
              },
            },
          },
        },
        MuiTableCell: {
          root: {
            color: lightTheme.color,
          },
        },
        MuiInputBase: {
          root: {
            color: lightTheme.color,
          },
        },
        MuiOutlinedInput: {
          "&:hover $notchedOutline": {
            borderColor: `${lightTheme.color} !important`,
          },
        },
        MuiTab: {
          textColorPrimary: {
            color: lightTheme.blueish_gray,
            "&$selected": {
              color: lightTheme.color,
            },
            "&.tabs": {
              "&:hover": {
                textDecoration: "underline",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.3125em",
              },
            },
          },
        },
        PrivateTabIndicator: {
          colorPrimary: {
            backgroundColor: lightTheme.color,
          },
        },
        MuiToggleButton: {
          root: {
            backgroundColor: lightTheme.paperBg,
            "&:hover": {
              backgroundColor: lightTheme.paperBg,
            },
            selected: {
              backgroundColor: lightTheme.containedSecondaryButtonHoverBG,
            },
            "@media (hover:none)": {
              "&:hover": {
                color: lightTheme.color,
                backgroundColor: lightTheme.paperBg,
              },
              "&:focus": {
                color: lightTheme.color,
                backgroundColor: lightTheme.paperBg,
              },
            },
          },
        },
        MuiIconButton: {
          root: {
            "&:hover": {
              backgroundColor: lightTheme.containedSecondaryButtonHoverBG,
            },
            "@media (hover:none)": {
              "&:hover": {
                color: lightTheme.color,
                backgroundColor: lightTheme.containedSecondaryButtonHoverBG,
              },
              "&:focus": {
                color: lightTheme.color,
                backgroundColor: lightTheme.containedSecondaryButtonHoverBG,
              },
            },
          },
        },
        MuiButton: {
          containedPrimary: {
            color: lightTheme.primaryButtonColor,
            backgroundColor: lightTheme.blueish_gray,
            "&:hover": {
              color: lightTheme.lightGray,
              backgroundColor: lightTheme.blueish_gray,
            },
            "@media (hover:none)": {
              color: lightTheme.primaryButtonColor,
              backgroundColor: lightTheme.blueish_gray,
              "&:hover": {
                color: lightTheme.lightGray,
                backgroundColor: lightTheme.blueish_gray,
              },
            },
          },
          containedSecondary: {
            color: lightTheme.color,
            backgroundColor: lightTheme.paperBg,
            "&:hover": {
              backgroundColor: `${lightTheme.paperBg} !important`,
              "&.ohm-menu-option": {
                backgroundColor: `${lightTheme.ohmMenuButtonHoverBG} !important`,
              },
            },
            "@media (hover:none)": {
              color: lightTheme.color,
              backgroundColor: lightTheme.paperBg,
              "&:hover": {
                "&.ohm-menu-option": {
                  backgroundColor: `${lightTheme.ohmMenuButtonHoverBG} !important`,
                },
                backgroundColor: `${lightTheme.paperBg} !important`,
              },
            },
          },
          outlinedPrimary: {
            color: lightTheme.outlinedPrimaryButtonColor,
            borderColor: lightTheme.outlinedPrimaryButtonBorderColor,
            "&:hover": {
              color: lightTheme.outlinedPrimaryButtonHoverColor,
              backgroundColor: lightTheme.outlinedPrimaryButtonHoverBG,
              borderColor: lightTheme.outlinedPrimaryButtonHoverBorderColor,
            },
            "@media (hover:none)": {
              color: lightTheme.outlinedPrimaryButtonColor,
              borderColor: lightTheme.outlinedPrimaryButtonBorderColor,
              "&:hover": {
                color: `${lightTheme.outlinedPrimaryButtonHoverColor} !important`,
                backgroundColor: `${lightTheme.outlinedPrimaryButtonHoverBG} !important`,
                borderColor: `${lightTheme.outlinedPrimaryButtonHoverBorderColor} !important`,
              },
            },
          },
          outlinedSecondary: {
            color: lightTheme.color,
            borderColor: lightTheme.color,
            "&:hover": {
              color: lightTheme.outlinedSecondaryButtonHoverColor,
              backgroundColor: lightTheme.outlinedSecondaryButtonHoverBG,
              borderColor: "#333333",
            },
          },
          textPrimary: {
            color: lightTheme.gray,
            "&:hover": {
              color: lightTheme.color,
              backgroundColor: "#00000000",
            },
            "&:active": {
              color: lightTheme.gold,
              borderBottom: "#F8CC82",
            },
          },
          textSecondary: {
            color: lightTheme.color,
            "&:hover": {
              color: lightTheme.textHighlightColor,
            },
          },
        },
        MuiTypography: {
          body1: {
            "&.bond-view-contract": {
              "&:hover": {
                color: `${lightTheme.blueish_gray} !important`,
              },
            },
          },
        },
      },
    },
    commonSettings,
  ),
);

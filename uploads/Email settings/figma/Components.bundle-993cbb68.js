// Components bundle — 3 component(s) materialized from a .fig as one
// self-contained file: no imports/exports; every component is assigned to window below.
// Design tokens / typography still ship separately (fig-tokens.css / fig-typography.css).

// figma node: 124:9703 Side bar
function SideBar3(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 72,
      height: 900,
      minWidth: 72,
      maxWidth: 86,
      maxHeight: null,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "inset 0 0 0 1px rgb(229,231,235)",
      display: "flex",
      flexDirection: "column",
      gap: 24,
      padding: "20px 8px 20px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 40,
      display: "flex",
      flexDirection: "row",
      gap: 22,
      padding: "0px 0px 4px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 39,
      height: 20,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1.581,
    height: 1.606,
    viewBox: "0 0 1.581 1.606",
    fill: "none",
    style: {
      position: "absolute",
      left: 10.568,
      top: 11.942,
      width: 1.581,
      height: 1.606
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.614 0.02 C 1.041 -0.079 1.465 0.193 1.561 0.626 C 1.658 1.059 1.389 1.489 0.963 1.586 C 0.538 1.683 0.116 1.411 0.02 0.98 C -0.076 0.548 0.19 0.119 0.614 0.02 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 39,
    height: 19.023,
    viewBox: "0 0 39 19.023",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 39,
      height: 19.023
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.355 0 L 5.878 0 L 5.892 0.006 C 6.082 0.085 6.361 0.098 6.587 0.204 C 7.362 0.572 7.907 1.304 8.242 2.11 C 8.539 2.828 8.971 4.108 8.754 4.901 C 8.614 5.317 8.287 5.354 7.942 5.219 C 7.513 5.051 7.524 4.53 7.473 4.103 C 7.367 3.217 6.4 1.378 5.261 1.895 C 4.173 2.387 3.278 4.375 2.815 5.438 C 1.65 8.36 0.675 12.569 1.827 15.629 C 2.154 16.499 2.862 17.299 3.72 17.622 C 4.799 18.027 6.03 17.917 7.077 17.466 C 8.152 17.001 8.946 16.343 9.793 15.541 C 9.924 15.417 10.213 15.171 10.271 15.015 C 10.364 14.745 10.416 14.529 10.706 14.418 C 10.864 14.357 10.973 14.306 11.143 14.383 C 11.946 14.744 11.023 15.598 11.894 15.959 C 12.337 16.142 12.808 16.175 13.26 15.994 C 13.825 15.751 14.647 15.04 15.043 14.573 C 15.241 14.339 15.415 14.085 15.562 13.816 C 15.269 13.653 15.086 13.5 14.973 13.144 C 14.639 12.09 16.023 11.474 16.689 12.176 C 16.923 12.423 16.959 12.893 16.81 13.216 C 17.233 13.338 17.663 13.342 17.96 13.771 C 18.293 14.255 17.974 15.517 18.535 15.75 C 18.808 15.863 19.403 15.656 19.63 15.504 C 20.163 15.253 20.289 14.911 20.658 14.553 C 21.332 13.902 22.419 13.078 23.403 13.298 C 23.552 13.33 23.78 13.461 23.841 13.594 C 23.986 13.91 23.87 14.364 23.554 14.524 C 23.285 14.66 23.005 14.519 22.723 14.573 C 22.166 14.713 21.426 15.224 21.203 15.778 C 21.074 16.1 21.367 16.334 21.643 16.411 C 21.962 16.5 22.257 16.522 22.589 16.521 C 23.657 16.516 24.705 16.235 25.637 15.706 C 25.94 15.537 26.278 15.327 26.552 15.114 C 26.103 14.236 25.945 12.514 25.854 11.532 C 25.647 9.296 25.976 3.185 28.14 2.042 C 28.508 1.849 28.937 1.813 29.331 1.943 C 29.727 2.071 30.004 2.376 30.19 2.744 C 30.97 4.292 30.419 8.066 30.059 9.761 C 29.891 10.561 29.678 11.351 29.421 12.127 C 29.136 13.045 28.748 13.927 28.267 14.755 C 28.17 14.918 28.033 15.155 27.897 15.28 C 28.101 15.613 28.316 15.957 28.636 16.176 C 29.863 17.016 31.381 16.354 32.309 15.372 C 32.385 15.291 32.465 15.216 32.533 15.128 C 32.338 14.357 32.417 13.716 32.802 13.022 C 33.688 11.421 36.078 12.383 34.99 14.149 C 34.792 14.471 34.536 14.75 34.264 15.01 C 34.163 15.106 33.976 15.253 33.892 15.344 C 34.212 15.658 34.542 15.874 34.985 15.967 C 35.944 16.17 37.007 15.895 37.822 15.368 C 38.099 15.189 38.326 14.873 38.674 14.816 C 38.802 14.794 38.914 14.913 39 14.996 L 39 15.391 C 38.858 15.617 38.832 15.815 38.608 16.008 C 37.153 17.266 34.375 17.515 33.02 16.009 C 32.922 16.139 32.811 16.259 32.691 16.369 C 31.308 17.65 29.03 18.15 27.554 16.714 C 27.339 16.505 27.172 16.247 26.971 16.024 C 26.693 16.395 25.909 16.818 25.477 16.996 C 24.279 17.495 22.978 17.681 21.692 17.537 C 21.017 17.461 20.086 17.289 19.801 16.566 C 19.213 16.781 18.381 17.027 17.8 16.65 C 17.106 16.199 17.245 15.239 17.085 14.522 C 16.865 14.321 16.591 14.271 16.339 14.129 C 15.833 15.115 15.138 16.004 14.216 16.624 C 13.177 17.324 11.232 17.416 10.503 16.21 C 9.533 17.393 7.446 18.662 5.939 18.955 C 5.081 19.123 3.84 18.963 3.019 18.669 C 1.23 18.027 0.333 16.323 0.091 14.503 C 0.069 14.347 0.066 14.029 0 13.9 L 0 11.53 C 0.037 11.461 0.145 10.326 0.178 10.109 C 0.232 9.758 0.29 9.366 0.364 8.993 C 0.778 6.91 1.414 4.87 2.414 2.993 C 2.932 2.02 3.684 0.882 4.634 0.287 C 4.827 0.166 5.134 0.069 5.355 0 Z M 27.536 14.149 C 28.79 12.223 29.353 8.93 29.523 6.641 C 29.583 5.84 29.634 4.804 29.483 4.015 C 29.429 3.737 29.308 3.278 29.06 3.12 C 28.986 3.072 28.949 3.066 28.864 3.067 C 27.553 3.476 27.024 7.839 26.949 9.039 C 26.918 9.535 26.897 10.533 26.939 11.037 C 27.018 11.992 27.151 13.356 27.426 14.261 C 27.428 14.269 27.431 14.277 27.433 14.286 C 27.46 14.25 27.514 14.184 27.536 14.149 Z M 33.397 14.432 L 33.544 14.303 C 33.717 14.147 34.586 13.432 33.935 13.359 C 33.48 13.502 33.37 14.006 33.397 14.432 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36,
      clipPath: "inset(0px 0px 0px 0px)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 36,
    height: 36,
    viewBox: "0 0 36 36",
    fill: "none",
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      width: 36,
      height: 36
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 18 C 0 8.059 8.059 0 18 0 C 27.941 0 36 8.059 36 18 C 36 27.941 27.941 36 18 36 C 8.059 36 0 27.941 0 18 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 19.152,
    height: 9.777,
    viewBox: "0 0 19.152 9.777",
    fill: "none",
    style: {
      position: "absolute",
      left: 8.425,
      top: 13.112,
      width: 19.152,
      height: 9.777
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.859 1.762 C 12.733 -0.587 16.193 -0.587 18.068 1.762 C 19.513 3.574 19.513 6.203 18.068 8.015 C 16.193 10.364 12.733 10.364 10.859 8.015 L 6.853 2.993 C 5.725 1.58 3.652 1.58 2.524 2.993 C 1.649 4.09 1.649 5.686 2.524 6.784 C 3.652 8.197 5.725 8.197 6.853 6.784 L 8.263 5.016 L 8.577 5.266 L 7.167 7.034 C 5.878 8.649 3.499 8.649 2.21 7.034 C 1.218 5.79 1.218 3.986 2.21 2.743 C 3.499 1.128 5.878 1.128 7.167 2.743 L 11.173 7.764 C 12.886 9.912 16.04 9.912 17.754 7.764 C 19.082 6.099 19.082 3.678 17.754 2.013 C 16.04 -0.135 12.886 -0.135 11.173 2.013 L 9.913 3.592 L 9.599 3.341 L 10.859 1.762 Z M 1.084 1.762 C 2.959 -0.587 6.419 -0.587 8.293 1.762 L 12.299 6.784 C 13.427 8.197 15.5 8.197 16.627 6.784 C 17.503 5.686 17.503 4.09 16.627 2.993 C 15.5 1.58 13.427 1.58 12.299 2.993 L 10.889 4.761 L 10.575 4.511 L 11.985 2.743 C 13.273 1.128 15.653 1.128 16.941 2.743 C 17.934 3.986 17.934 5.79 16.941 7.034 C 15.653 8.649 13.273 8.649 11.985 7.034 L 7.979 2.013 C 6.265 -0.135 3.112 -0.135 1.398 2.013 C 0.07 3.678 0.07 6.099 1.398 7.764 C 3.112 9.912 6.265 9.912 7.979 7.764 L 9.239 6.185 L 9.553 6.435 L 8.293 8.015 C 6.419 10.364 2.959 10.364 1.084 8.015 C -0.361 6.203 -0.361 3.574 1.084 1.762 Z",
    fill: "currentColor",
    fillRule: "evenodd"
  }))))), /*#__PURE__*/React.createElement("svg", {
    width: 34.875,
    height: 34.875,
    viewBox: "0 0 34.875 34.875",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.563,
      top: 0.563,
      width: 34.875,
      height: 34.875
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.438 0 L 17.438 0.563 C 26.757 0.563 34.313 8.118 34.313 17.438 L 34.875 17.438 L 35.438 17.438 C 35.438 7.496 27.379 -0.563 17.438 -0.563 L 17.438 0 Z M 34.875 17.438 L 34.313 17.438 C 34.313 26.757 26.757 34.313 17.438 34.313 L 17.438 34.875 L 17.438 35.438 C 27.379 35.438 35.438 27.379 35.438 17.438 L 34.875 17.438 Z M 17.438 34.875 L 17.438 34.313 C 8.118 34.313 0.563 26.757 0.563 17.438 L 0 17.438 L -0.563 17.438 C -0.563 27.379 7.496 35.438 17.438 35.438 L 17.438 34.875 Z M 0 17.438 L 0.563 17.438 C 0.563 8.118 8.118 0.563 17.438 0.563 L 17.438 0 L 17.438 -0.563 C 7.496 -0.563 -0.563 7.496 -0.563 17.438 L 0 17.438 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 46,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 102,
      display: "flex",
      flexDirection: "column",
      padding: "30px 0px 30px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 118,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 120,
      display: "flex",
      flexDirection: "column",
      padding: "12px 0px 12px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 16,
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      height: 36,
      borderRadius: 4,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      padding: "10px 10px 10px 10px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      flexShrink: 0
    },
    "data-external": "4294967295:4294967295"
  })))));
}

// figma node: 124:9852 Header
function Header(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 1440,
      height: 56,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(229,231,235)",
      borderRight: "1px solid rgb(229,231,235)",
      borderBottom: "1px solid rgb(229,231,235)",
      borderLeft: "1px solid rgb(229,231,235)",
      display: "flex",
      flexDirection: "row",
      padding: "0px 24px 0px 24px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 102,
      height: 22,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7.657,
    height: 7.657,
    viewBox: "0 0 7.657 7.657",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.041,
      top: 7.106,
      width: 7.657,
      height: 7.657,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 3.829 C 0 4.883 0.428 5.842 1.123 6.534 C 1.815 7.227 2.774 7.657 3.829 7.657 C 4.883 7.657 5.842 7.229 6.535 6.534 C 7.227 5.842 7.657 4.883 7.657 3.829 C 7.657 2.774 7.229 1.815 6.535 1.123 C 5.842 0.43 4.883 0 3.829 0 C 2.774 0 1.815 0.428 1.123 1.123 C 0.428 1.815 0 2.772 0 3.829 Z M 3.829 0.648 C 4.704 0.648 5.501 1.004 6.076 1.581 C 6.652 2.156 7.01 2.951 7.01 3.829 C 7.01 4.706 6.652 5.499 6.074 6.074 C 5.499 6.65 4.704 7.007 3.827 7.007 C 2.951 7.007 2.154 6.652 1.579 6.074 C 1.004 5.499 0.646 4.704 0.646 3.827 C 0.646 2.949 1.001 2.156 1.579 1.579 C 2.156 1.006 2.951 0.648 3.829 0.648 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.516,
    height: 9.812,
    viewBox: "0 0 5.516 9.812",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.517,
      top: 4.846,
      width: 5.516,
      height: 9.812,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.516 6.089 C 5.516 4.499 4.911 3.048 3.918 1.953 C 2.998 0.937 1.745 0.229 0.332 0.004 C 0.158 -0.024 0 0.11 0 0.287 L 0 0.366 C 0 0.506 0.102 0.626 0.241 0.649 C 1.511 0.856 2.636 1.497 3.458 2.415 C 4.334 3.391 4.864 4.678 4.864 6.089 C 4.864 6.732 4.753 7.35 4.549 7.923 C 4.372 8.419 4.127 8.882 3.824 9.301 C 3.741 9.417 3.754 9.574 3.854 9.672 L 3.91 9.728 C 4.035 9.853 4.242 9.836 4.344 9.694 C 4.679 9.231 4.951 8.722 5.15 8.177 C 5.386 7.525 5.516 6.821 5.516 6.089 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.437,
    height: 5.435,
    viewBox: "0 0 5.437 5.435",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.783,
      top: 4.85,
      width: 5.437,
      height: 5.435,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.07 0.004 C 3.777 0.22 2.62 0.84 1.732 1.728 C 0.837 2.623 0.215 3.793 0.004 5.096 C -0.024 5.273 0.108 5.435 0.287 5.435 L 0.364 5.435 C 0.506 5.435 0.624 5.329 0.647 5.188 C 0.839 4.027 1.393 2.985 2.19 2.188 C 2.982 1.396 4.016 0.842 5.168 0.648 C 5.322 0.622 5.437 0.494 5.437 0.339 L 5.437 0.311 C 5.437 0.119 5.262 -0.028 5.07 0.004 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.812,
    height: 5.516,
    viewBox: "0 0 9.812 5.516",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.781,
      top: 11.582,
      width: 9.812,
      height: 5.516,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1.953 3.918 C 3.048 4.911 4.499 5.516 6.089 5.516 C 6.822 5.516 7.525 5.386 8.177 5.15 C 8.722 4.952 9.231 4.679 9.694 4.344 C 9.836 4.24 9.853 4.033 9.728 3.91 L 9.672 3.854 C 9.572 3.754 9.414 3.743 9.302 3.824 C 8.882 4.127 8.417 4.372 7.923 4.549 C 7.35 4.753 6.732 4.864 6.089 4.864 C 4.678 4.864 3.391 4.332 2.415 3.458 C 1.497 2.636 0.856 1.511 0.649 0.241 C 0.626 0.102 0.506 0 0.366 0 L 0.287 0 C 0.11 0 -0.024 0.158 0.004 0.332 C 0.229 1.745 0.939 2.998 1.953 3.918 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4.740,
    height: 2.353,
    viewBox: "0 0 4.740 2.353",
    fill: "none",
    style: {
      position: "absolute",
      left: 11.517,
      top: 17.019,
      width: 4.74,
      height: 2.353,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.32 2.351 C 1.131 2.259 1.909 2.053 2.636 1.746 C 3.358 1.443 4.027 1.043 4.632 0.561 C 4.766 0.455 4.777 0.254 4.655 0.135 L 4.649 0.129 L 4.604 0.084 C 4.502 -0.018 4.338 -0.029 4.223 0.063 C 3.667 0.504 3.049 0.872 2.384 1.151 C 1.715 1.433 1.001 1.622 0.254 1.707 C 0.109 1.724 0 1.846 0 1.993 L 0 2.057 L 0 2.065 C 0 2.238 0.149 2.37 0.32 2.351 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.353,
    height: 4.740,
    viewBox: "0 0 2.353 4.740",
    fill: "none",
    style: {
      position: "absolute",
      left: 16.956,
      top: 11.582,
      width: 2.353,
      height: 4.74,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.129 4.649 L 0.135 4.655 C 0.256 4.777 0.455 4.766 0.561 4.632 C 1.043 4.027 1.441 3.356 1.746 2.636 C 2.05 1.909 2.257 1.131 2.351 0.32 C 2.37 0.149 2.236 0 2.065 0 L 2.057 0 L 1.993 0 C 1.848 0 1.724 0.109 1.707 0.254 C 1.622 1.001 1.43 1.715 1.151 2.384 C 0.872 3.049 0.506 3.667 0.063 4.223 C -0.029 4.338 -0.018 4.5 0.084 4.604 L 0.129 4.649 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 16.938,
    height: 16.940,
    viewBox: "0 0 16.938 16.940",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.368,
      top: 2.434,
      width: 16.938,
      height: 16.94,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.501 0 C 6.157 0 4.033 0.952 2.493 2.493 C 0.954 4.031 0 6.157 0 8.501 C 0 10.736 0.867 12.769 2.282 14.286 C 3.628 15.728 5.469 16.704 7.534 16.938 C 7.544 16.94 7.555 16.94 7.566 16.94 C 7.721 16.94 7.851 16.812 7.851 16.653 L 7.851 16.644 L 7.851 16.58 C 7.851 16.435 7.743 16.312 7.598 16.295 C 5.687 16.075 3.982 15.168 2.74 13.828 C 1.442 12.428 0.65 10.557 0.65 8.501 C 0.65 6.336 1.53 4.374 2.951 2.953 C 4.372 1.532 6.334 0.652 8.499 0.652 C 10.553 0.652 12.426 1.447 13.825 2.742 C 15.165 3.984 16.073 5.689 16.293 7.6 C 16.31 7.745 16.431 7.853 16.578 7.853 L 16.642 7.853 L 16.651 7.853 C 16.821 7.853 16.955 7.704 16.936 7.536 C 16.702 5.473 15.726 3.631 14.283 2.284 C 12.769 0.867 10.734 0 8.501 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.879,
    height: 17.873,
    viewBox: "0 0 17.879 17.873",
    fill: "none",
    style: {
      position: "absolute",
      left: 0.033,
      top: 0.099,
      width: 17.879,
      height: 17.873,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.836 0 C 7.847 0 5.139 1.214 3.177 3.177 C 1.214 5.139 0 7.847 0 10.836 C 0 12.212 0.26 13.529 0.733 14.739 C 1.165 15.847 1.775 16.866 2.525 17.765 C 2.584 17.837 2.67 17.873 2.755 17.873 C 2.832 17.873 2.908 17.844 2.968 17.786 L 3 17.754 C 3.111 17.643 3.119 17.469 3.019 17.349 C 2.312 16.499 1.736 15.534 1.332 14.488 C 0.893 13.355 0.65 12.123 0.65 10.836 C 0.65 8.028 1.792 5.482 3.637 3.637 C 5.48 1.792 8.028 0.65 10.836 0.65 C 12.123 0.65 13.355 0.893 14.488 1.332 C 15.538 1.739 16.506 2.316 17.356 3.028 C 17.409 3.072 17.475 3.096 17.541 3.096 C 17.616 3.096 17.688 3.068 17.744 3.013 L 17.784 2.972 L 17.795 2.962 C 17.914 2.842 17.905 2.646 17.775 2.538 C 16.874 1.781 15.852 1.168 14.739 0.733 C 13.529 0.26 12.212 0 10.836 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 17.877,
    height: 17.879,
    viewBox: "0 0 17.877 17.879",
    fill: "none",
    style: {
      position: "absolute",
      left: 3.825,
      top: 3.89,
      width: 17.877,
      height: 17.879,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 17.146 3.139 C 16.711 2.027 16.098 1.005 15.343 0.103 C 15.235 -0.027 15.039 -0.035 14.919 0.084 L 14.909 0.095 L 14.868 0.135 C 14.764 0.24 14.755 0.408 14.851 0.523 C 15.563 1.373 16.14 2.34 16.547 3.391 C 16.986 4.524 17.229 5.756 17.229 7.043 C 17.229 9.851 16.087 12.397 14.242 14.242 C 12.397 16.087 9.851 17.229 7.043 17.229 C 5.756 17.229 4.524 16.986 3.391 16.547 C 2.34 16.14 1.373 15.563 0.523 14.851 C 0.408 14.755 0.24 14.762 0.135 14.868 L 0.095 14.909 L 0.084 14.919 C -0.035 15.039 -0.027 15.235 0.103 15.343 C 1.005 16.098 2.027 16.711 3.139 17.146 C 4.35 17.619 5.666 17.879 7.043 17.879 C 10.03 17.879 12.74 16.664 14.7 14.702 C 16.662 12.74 17.877 10.032 17.877 7.045 C 17.879 5.666 17.619 4.352 17.146 3.139 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 9.131,
    height: 12.223,
    viewBox: "0 0 9.131 12.223",
    fill: "none",
    style: {
      position: "absolute",
      left: 27.55,
      top: 4.685,
      width: 9.131,
      height: 12.223,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.035 12.223 L 9.131 12.223 L 5.662 6.777 C 7.603 6.561 8.934 5.141 8.934 3.379 C 8.934 1.438 7.298 0 5.159 0 L 0 0 L 0 12.223 L 0.917 12.223 L 0.917 6.795 L 4.566 6.795 L 8.035 12.223 Z M 0.917 0.899 L 5.159 0.899 C 6.813 0.899 7.981 1.941 7.981 3.379 C 7.981 4.817 6.831 5.896 5.159 5.896 L 0.917 5.896 L 0.917 0.899 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.288,
    height: 12.223,
    viewBox: "0 0 11.288 12.223",
    fill: "none",
    style: {
      position: "absolute",
      left: 40.516,
      top: 4.685,
      width: 11.288,
      height: 12.223,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.3 12.223 L 11.288 12.223 L 6.147 0 L 5.087 0 L 0 12.223 L 1.007 12.223 L 2.48 8.664 L 8.808 8.664 L 10.3 12.223 Z M 2.84 7.783 L 5.626 1.079 L 8.43 7.783 L 2.84 7.783 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.462,
    height: 12.223,
    viewBox: "0 0 10.462 12.223",
    fill: "none",
    style: {
      position: "absolute",
      left: 56.291,
      top: 4.685,
      width: 10.462,
      height: 12.223,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 3.901 0 L 0 0 L 0 12.223 L 3.901 12.223 C 7.621 12.223 10.462 9.671 10.462 6.112 C 10.462 2.552 7.621 0 3.901 0 Z M 3.901 11.324 L 0.917 11.324 L 0.917 0.899 L 3.901 0.899 C 7.154 0.899 9.527 3.092 9.527 6.112 C 9.527 9.149 7.154 11.324 3.901 11.324 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 0.917,
    height: 12.223,
    viewBox: "0 0 0.917 12.223",
    fill: "none",
    style: {
      position: "absolute",
      left: 71.165,
      top: 4.685,
      width: 0.917,
      height: 12.223,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 0 12.223 L 0.917 12.223 L 0.917 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10.336,
    height: 12.511,
    viewBox: "0 0 10.336 12.511",
    fill: "none",
    style: {
      position: "absolute",
      left: 77.707,
      top: 4.685,
      width: 10.336,
      height: 12.511,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 9.401 0 L 9.401 6.866 C 9.401 9.743 7.729 11.612 5.177 11.612 C 2.607 11.612 0.917 9.743 0.917 6.866 L 0.917 0 L 0 0 L 0 6.866 C 0 10.264 2.05 12.511 5.177 12.511 C 8.287 12.511 10.336 10.264 10.336 6.866 L 10.336 0 L 9.401 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 8.880,
    height: 12.798,
    viewBox: "0 0 8.880 12.798",
    fill: "none",
    style: {
      position: "absolute",
      left: 92.405,
      top: 4.398,
      width: 8.88,
      height: 12.798,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 8.88 9.311 C 8.88 6.992 6.453 6.345 4.566 5.896 C 3.254 5.572 1.438 5.069 1.438 3.343 C 1.438 1.887 2.768 0.917 4.53 0.917 C 6.381 0.917 7.604 1.959 7.873 3.289 L 8.772 3.002 C 8.413 1.186 6.741 0 4.548 0 C 2.211 0 0.504 1.384 0.504 3.379 C 0.504 5.752 2.859 6.435 4.422 6.813 C 6.13 7.226 7.945 7.693 7.945 9.365 C 7.945 10.839 6.507 11.9 4.566 11.9 C 2.606 11.9 1.187 10.875 0.899 9.509 L 0 9.796 C 0.359 11.576 2.175 12.798 4.512 12.798 C 7.064 12.798 8.88 11.342 8.88 9.311 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 241.578,
      height: 48,
      minWidth: 220,
      maxWidth: 280,
      maxHeight: null,
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "row",
      gap: 10,
      padding: "6px 10px 6px 6px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 36,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "rgb(245,245,245)",
      display: "grid",
      gridTemplateRows: "36px",
      gridTemplateColumns: "36px",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      width: 17,
      height: 12,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      letterSpacing: "0.240px",
      color: "rgb(115,115,115)",
      gridRow: "1",
      gridColumn: "1",
      justifySelf: "center",
      alignSelf: "center"
    }
  }, "VB")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      gap: 1,
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 153.578,
      height: 16.797,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 14,
      whiteSpace: "nowrap",
      lineHeight: "16.800px",
      color: "rgb(10,10,10)",
      flexShrink: 0
    }
  }, "Vanessa Brown")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 153.578,
      height: 15,
      overflow: "hidden",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "15px",
      color: "rgb(115,115,115)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "vanessa@radiusagent.com"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 16,
      height: 16,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6.667,
    height: 3.333,
    viewBox: "0 0 6.667 3.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.667,
      top: 10,
      width: 6.667,
      height: 3.333,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.471 -0.471 C 0.211 -0.732 -0.211 -0.732 -0.471 -0.471 C -0.732 -0.211 -0.732 0.211 -0.471 0.471 L 0 0 L 0.471 -0.471 Z M 3.333 3.333 L 2.862 3.805 C 3.122 4.065 3.544 4.065 3.805 3.805 L 3.333 3.333 Z M 7.138 0.471 C 7.398 0.211 7.398 -0.211 7.138 -0.471 C 6.878 -0.732 6.456 -0.732 6.195 -0.471 L 6.667 0 L 7.138 0.471 Z M 0 0 L -0.471 0.471 L 2.862 3.805 L 3.333 3.333 L 3.805 2.862 L 0.471 -0.471 L 0 0 Z M 3.333 3.333 L 3.805 3.805 L 7.138 0.471 L 6.667 0 L 6.195 -0.471 L 2.862 2.862 L 3.333 3.333 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6.667,
    height: 3.333,
    viewBox: "0 0 6.667 3.333",
    fill: "none",
    style: {
      position: "absolute",
      left: 4.667,
      top: 2.667,
      width: 6.667,
      height: 3.333,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M -0.471 2.862 C -0.732 3.122 -0.732 3.544 -0.471 3.805 C -0.211 4.065 0.211 4.065 0.471 3.805 L 0 3.333 L -0.471 2.862 Z M 3.333 0 L 3.805 -0.471 C 3.544 -0.732 3.122 -0.732 2.862 -0.471 L 3.333 0 Z M 6.195 3.805 C 6.456 4.065 6.878 4.065 7.138 3.805 C 7.398 3.544 7.398 3.122 7.138 2.862 L 6.667 3.333 L 6.195 3.805 Z M 0 3.333 L 0.471 3.805 L 3.805 0.471 L 3.333 0 L 2.862 -0.471 L -0.471 2.862 L 0 3.333 Z M 3.333 0 L 2.862 0.471 L 6.195 3.805 L 6.667 3.333 L 7.138 2.862 L 3.805 -0.471 L 3.333 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))));
}

// figma node: 124:9883 Center panel | Send to client
function CenterPanelSendToClient(_p = {}) {
  const props = _p;
  return /*#__PURE__*/React.createElement("div", {
    className: props.className,
    style: {
      width: 988,
      height: 369.5,
      overflow: "hidden",
      borderRadius: 12,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      position: "relative",
      ...props.style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      backgroundColor: "rgba(245,245,245,0.3)",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 120.742,
      height: 37,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderTop: "1px solid rgba(0,0,0,0)",
      borderRight: "1px solid rgba(0,0,0,0)",
      borderBottom: "2px solid rgba(0,0,0,0)",
      borderLeft: "1px solid rgba(0,0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 9.333,
    height: 11.667,
    viewBox: "0 0 9.333 11.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.333,
      top: 1.167,
      width: 9.333,
      height: 11.667,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.483 0.583 C 5.805 0.583 6.067 0.322 6.067 0 C 6.067 -0.322 5.805 -0.583 5.483 -0.583 L 5.483 0 L 5.483 0.583 Z M 1.167 0 L 1.167 -0.583 L 1.167 0 Z M 0 1.167 L -0.583 1.167 L 0 1.167 Z M 0 10.5 L -0.583 10.5 L 0 10.5 Z M 9.917 6.183 C 9.917 5.861 9.655 5.6 9.333 5.6 C 9.011 5.6 8.75 5.861 8.75 6.183 L 9.333 6.183 L 9.917 6.183 Z M 5.483 0 L 5.483 -0.583 L 1.167 -0.583 L 1.167 0 L 1.167 0.583 L 5.483 0.583 L 5.483 0 Z M 1.167 0 L 1.167 -0.583 C 0.703 -0.583 0.257 -0.399 -0.071 -0.071 L 0.342 0.342 L 0.754 0.754 C 0.864 0.645 1.012 0.583 1.167 0.583 L 1.167 0 Z M 0.342 0.342 L -0.071 -0.071 C -0.399 0.257 -0.583 0.703 -0.583 1.167 L 0 1.167 L 0.583 1.167 C 0.583 1.012 0.645 0.864 0.754 0.754 L 0.342 0.342 Z M 0 1.167 L -0.583 1.167 L -0.583 10.5 L 0 10.5 L 0.583 10.5 L 0.583 1.167 L 0 1.167 Z M 0 10.5 L -0.583 10.5 C -0.583 10.964 -0.399 11.409 -0.071 11.737 L 0.342 11.325 L 0.754 10.912 C 0.645 10.803 0.583 10.655 0.583 10.5 L 0 10.5 Z M 0.342 11.325 L -0.071 11.737 C 0.257 12.066 0.703 12.25 1.167 12.25 L 1.167 11.667 L 1.167 11.083 C 1.012 11.083 0.864 11.022 0.754 10.912 L 0.342 11.325 Z M 1.167 11.667 L 1.167 12.25 L 8.167 12.25 L 8.167 11.667 L 8.167 11.083 L 1.167 11.083 L 1.167 11.667 Z M 8.167 11.667 L 8.167 12.25 C 8.631 12.25 9.076 12.066 9.404 11.737 L 8.992 11.325 L 8.579 10.912 C 8.47 11.022 8.321 11.083 8.167 11.083 L 8.167 11.667 Z M 8.992 11.325 L 9.404 11.737 C 9.732 11.409 9.917 10.964 9.917 10.5 L 9.333 10.5 L 8.75 10.5 C 8.75 10.655 8.689 10.803 8.579 10.912 L 8.992 11.325 Z M 9.333 10.5 L 9.917 10.5 L 9.917 6.183 L 9.333 6.183 L 8.75 6.183 L 8.75 10.5 L 9.333 10.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 1.167,
    viewBox: "0 -0.583 2.333 1.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 3.5,
      width: 2.333,
      height: 1.1666666269302368,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 2.333 0.583 C 2.655 0.583 2.917 0.322 2.917 0 C 2.917 -0.322 2.655 -0.583 2.333 -0.583 L 2.333 0 L 2.333 0.583 Z M 0 0 L 0 0.583 L 2.333 0.583 L 2.333 0 L 2.333 -0.583 L 0 -0.583 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 1.167,
    viewBox: "0 -0.583 2.333 1.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 5.833,
      width: 2.333,
      height: 1.1666666269302368,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 2.333 0.583 C 2.655 0.583 2.917 0.322 2.917 0 C 2.917 -0.322 2.655 -0.583 2.333 -0.583 L 2.333 0 L 2.333 0.583 Z M 0 0 L 0 0.583 L 2.333 0.583 L 2.333 0 L 2.333 -0.583 L 0 -0.583 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 1.167,
    viewBox: "0 -0.583 2.333 1.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 8.167,
      width: 2.333,
      height: 1.1666666269302368,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 2.333 0.583 C 2.655 0.583 2.917 0.322 2.917 0 C 2.917 -0.322 2.655 -0.583 2.333 -0.583 L 2.333 0 L 2.333 0.583 Z M 0 0 L 0 0.583 L 2.333 0.583 L 2.333 0 L 2.333 -0.583 L 0 -0.583 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.333,
    height: 1.167,
    viewBox: "0 -0.583 2.333 1.167",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 10.5,
      width: 2.333,
      height: 1.1666666269302368,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 2.333 0.583 C 2.655 0.583 2.917 0.322 2.917 0 C 2.917 -0.322 2.655 -0.583 2.333 -0.583 L 2.333 0 L 2.333 0.583 Z M 0 0 L 0 0.583 L 2.333 0.583 L 2.333 0 L 2.333 -0.583 L 0 -0.583 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 5.833,
    height: 5.832,
    viewBox: "0 0 5.833 5.832",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.001,
      top: 1.167,
      width: 5.833,
      height: 5.832,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.47 2.115 L 5.882 2.528 L 5.882 2.528 L 5.47 2.115 Z M 5.833 1.239 L 6.416 1.239 L 5.833 1.239 Z M 4.594 0 L 4.594 -0.583 L 4.594 0 Z M 3.718 0.363 L 3.305 -0.05 L 3.305 -0.049 L 3.718 0.363 Z M 0.795 3.287 L 1.207 3.699 L 1.208 3.699 L 0.795 3.287 Z M 0.5 3.785 L -0.06 3.621 L -0.06 3.621 L 0.5 3.785 Z M 0.012 5.459 L 0.572 5.622 L 0.572 5.622 L 0.012 5.459 Z M 0.373 5.821 L 0.21 5.261 L 0.21 5.261 L 0.373 5.821 Z M 2.047 5.332 L 2.211 5.892 L 2.211 5.892 L 2.047 5.332 Z M 2.546 5.037 L 2.133 4.625 L 2.133 4.625 L 2.546 5.037 Z M 5.47 2.115 L 5.882 2.528 C 6.224 2.186 6.416 1.722 6.416 1.239 L 5.833 1.239 L 5.25 1.239 C 5.25 1.413 5.18 1.58 5.057 1.703 L 5.47 2.115 Z M 5.833 1.239 L 6.416 1.239 C 6.416 0.756 6.224 0.292 5.882 -0.05 L 5.47 0.363 L 5.057 0.775 C 5.18 0.898 5.25 1.065 5.25 1.239 L 5.833 1.239 Z M 5.47 0.363 L 5.882 -0.05 C 5.541 -0.391 5.077 -0.583 4.594 -0.583 L 4.594 0 L 4.594 0.583 C 4.768 0.583 4.934 0.652 5.057 0.775 L 5.47 0.363 Z M 4.594 0 L 4.594 -0.583 C 4.11 -0.583 3.647 -0.391 3.305 -0.05 L 3.718 0.363 L 4.13 0.775 C 4.253 0.652 4.42 0.583 4.594 0.583 L 4.594 0 Z M 3.718 0.363 L 3.305 -0.049 L 0.383 2.874 L 0.795 3.287 L 1.208 3.699 L 4.13 0.775 L 3.718 0.363 Z M 0.795 3.287 L 0.383 2.874 C 0.175 3.082 0.022 3.339 -0.06 3.621 L 0.5 3.785 L 1.06 3.948 C 1.087 3.854 1.138 3.768 1.207 3.699 L 0.795 3.287 Z M 0.5 3.785 L -0.06 3.621 L -0.548 5.296 L 0.012 5.459 L 0.572 5.622 L 1.06 3.948 L 0.5 3.785 Z M 0.012 5.459 L -0.548 5.296 C -0.592 5.446 -0.595 5.606 -0.556 5.758 L 0.009 5.613 L 0.574 5.468 C 0.587 5.519 0.586 5.572 0.572 5.622 L 0.012 5.459 Z M 0.009 5.613 L -0.556 5.758 C -0.517 5.91 -0.438 6.048 -0.327 6.159 L 0.085 5.747 L 0.498 5.334 C 0.535 5.371 0.561 5.418 0.574 5.468 L 0.009 5.613 Z M 0.085 5.747 L -0.327 6.159 C -0.216 6.27 -0.077 6.349 0.075 6.388 L 0.219 5.823 L 0.364 5.258 C 0.415 5.271 0.461 5.297 0.498 5.334 L 0.085 5.747 Z M 0.219 5.823 L 0.075 6.388 C 0.226 6.427 0.386 6.425 0.537 6.381 L 0.373 5.821 L 0.21 5.261 C 0.26 5.246 0.313 5.245 0.364 5.258 L 0.219 5.823 Z M 0.373 5.821 L 0.537 6.381 L 2.211 5.892 L 2.047 5.332 L 1.884 4.772 L 0.21 5.261 L 0.373 5.821 Z M 2.047 5.332 L 2.211 5.892 C 2.493 5.81 2.75 5.658 2.958 5.45 L 2.546 5.037 L 2.133 4.625 C 2.064 4.694 1.978 4.745 1.884 4.772 L 2.047 5.332 Z M 2.546 5.037 L 2.958 5.45 L 5.882 2.528 L 5.47 2.115 L 5.058 1.703 L 2.133 4.625 L 2.546 5.037 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 68.742,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: -1,
      top: 0.5,
      width: 70,
      height: 16,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(115,115,115)"
    }
  }, "Create Note")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 98.328,
      height: 37,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      borderTop: "1px solid rgba(0,0,0,0)",
      borderRight: "1px solid rgba(0,0,0,0)",
      borderBottom: "2px solid rgba(0,0,0,0)",
      borderLeft: "1px solid rgba(0,0,0,0)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 5.250,
    height: 5.250,
    viewBox: "0 0 5.250 5.250",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.583,
      top: 1.167,
      width: 5.25,
      height: 5.25,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 4.667 5.25 C 4.667 5.572 4.928 5.833 5.25 5.833 C 5.572 5.833 5.833 5.572 5.833 5.25 L 5.25 5.25 L 4.667 5.25 Z M 0 0 L 0 0.583 C 1.238 0.583 2.425 1.075 3.3 1.95 L 3.712 1.538 L 4.125 1.125 C 3.031 0.031 1.547 -0.583 0 -0.583 L 0 0 Z M 3.712 1.538 L 3.3 1.95 C 4.175 2.825 4.667 4.012 4.667 5.25 L 5.25 5.25 L 5.833 5.25 C 5.833 3.703 5.219 2.219 4.125 1.125 L 3.712 1.538 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 2.917,
    height: 2.917,
    viewBox: "0 0 2.917 2.917",
    fill: "none",
    style: {
      position: "absolute",
      left: 7.583,
      top: 3.5,
      width: 2.917,
      height: 2.917,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.583 C -0.322 -0.583 -0.583 -0.322 -0.583 0 C -0.583 0.322 -0.322 0.583 0 0.583 L 0 0 L 0 -0.583 Z M 2.333 2.917 C 2.333 3.239 2.595 3.5 2.917 3.5 C 3.239 3.5 3.5 3.239 3.5 2.917 L 2.917 2.917 L 2.333 2.917 Z M 0 0 L 0 0.583 C 0.619 0.583 1.212 0.829 1.65 1.267 L 2.062 0.854 L 2.475 0.442 C 1.818 -0.215 0.928 -0.583 0 -0.583 L 0 0 Z M 2.062 0.854 L 1.65 1.267 C 2.088 1.704 2.333 2.298 2.333 2.917 L 2.917 2.917 L 3.5 2.917 C 3.5 1.988 3.131 1.098 2.475 0.442 L 2.062 0.854 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 11.667,
    viewBox: "0 0 11.667 11.667",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 1.167,
      width: 11.667,
      height: 11.667,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.902 8.498 L 6.645 9.022 C 6.649 9.024 6.654 9.026 6.659 9.028 L 6.902 8.498 Z M 7.61 8.321 L 7.146 7.967 L 7.145 7.968 L 7.61 8.321 Z M 7.817 8.05 L 8.28 8.404 L 8.283 8.4 L 7.817 8.05 Z M 10.5 11.667 L 10.5 12.25 L 10.5 11.667 Z M 0 1.167 L 0.583 1.167 L 0 1.167 Z M 1.167 0 L 1.167 -0.583 L 1.167 0 Z M 2.917 0 L 2.917 -0.583 L 2.917 0 Z M 3.617 3.85 L 3.967 4.317 L 3.967 4.317 L 3.617 3.85 Z M 3.344 4.055 L 2.994 3.588 L 2.99 3.591 L 3.344 4.055 Z M 3.173 4.774 L 2.649 5.03 L 2.65 5.032 L 3.173 4.774 Z M 6.902 8.498 L 6.659 9.028 C 6.899 9.139 7.171 9.164 7.428 9.1 L 7.287 8.534 L 7.145 7.968 L 7.145 7.968 L 6.902 8.498 Z M 7.287 8.534 L 7.428 9.1 C 7.685 9.036 7.913 8.886 8.074 8.675 L 7.61 8.321 L 7.145 7.968 L 7.145 7.968 L 7.287 8.534 Z M 7.61 8.321 L 8.073 8.675 L 8.28 8.404 L 7.817 8.05 L 7.353 7.696 L 7.146 7.967 L 7.61 8.321 Z M 7.817 8.05 L 8.283 8.4 C 8.338 8.328 8.408 8.269 8.489 8.228 L 8.228 7.707 L 7.967 7.185 C 7.724 7.306 7.513 7.483 7.35 7.7 L 7.817 8.05 Z M 8.228 7.707 L 8.489 8.228 C 8.57 8.188 8.659 8.167 8.75 8.167 L 8.75 7.583 L 8.75 7 C 8.478 7 8.21 7.063 7.967 7.185 L 8.228 7.707 Z M 8.75 7.583 L 8.75 8.167 L 10.5 8.167 L 10.5 7.583 L 10.5 7 L 8.75 7 L 8.75 7.583 Z M 10.5 7.583 L 10.5 8.167 C 10.655 8.167 10.803 8.228 10.912 8.338 L 11.325 7.925 L 11.737 7.513 C 11.409 7.184 10.964 7 10.5 7 L 10.5 7.583 Z M 11.325 7.925 L 10.912 8.338 C 11.022 8.447 11.083 8.595 11.083 8.75 L 11.667 8.75 L 12.25 8.75 C 12.25 8.286 12.066 7.841 11.737 7.513 L 11.325 7.925 Z M 11.667 8.75 L 11.083 8.75 L 11.083 10.5 L 11.667 10.5 L 12.25 10.5 L 12.25 8.75 L 11.667 8.75 Z M 11.667 10.5 L 11.083 10.5 C 11.083 10.655 11.022 10.803 10.912 10.912 L 11.325 11.325 L 11.737 11.737 C 12.066 11.409 12.25 10.964 12.25 10.5 L 11.667 10.5 Z M 11.325 11.325 L 10.912 10.912 C 10.803 11.022 10.655 11.083 10.5 11.083 L 10.5 11.667 L 10.5 12.25 C 10.964 12.25 11.409 12.066 11.737 11.737 L 11.325 11.325 Z M 10.5 11.667 L 10.5 11.083 C 7.87 11.083 5.348 10.039 3.488 8.179 L 3.075 8.591 L 2.663 9.004 C 4.741 11.082 7.561 12.25 10.5 12.25 L 10.5 11.667 Z M 3.075 8.591 L 3.488 8.179 C 1.628 6.319 0.583 3.797 0.583 1.167 L 0 1.167 L -0.583 1.167 C -0.583 4.106 0.584 6.925 2.663 9.004 L 3.075 8.591 Z M 0 1.167 L 0.583 1.167 C 0.583 1.012 0.645 0.864 0.754 0.754 L 0.342 0.342 L -0.071 -0.071 C -0.399 0.257 -0.583 0.703 -0.583 1.167 L 0 1.167 Z M 0.342 0.342 L 0.754 0.754 C 0.864 0.645 1.012 0.583 1.167 0.583 L 1.167 0 L 1.167 -0.583 C 0.703 -0.583 0.257 -0.399 -0.071 -0.071 L 0.342 0.342 Z M 1.167 0 L 1.167 0.583 L 2.917 0.583 L 2.917 0 L 2.917 -0.583 L 1.167 -0.583 L 1.167 0 Z M 2.917 0 L 2.917 0.583 C 3.071 0.583 3.22 0.645 3.329 0.754 L 3.742 0.342 L 4.154 -0.071 C 3.826 -0.399 3.381 -0.583 2.917 -0.583 L 2.917 0 Z M 3.742 0.342 L 3.329 0.754 C 3.439 0.864 3.5 1.012 3.5 1.167 L 4.083 1.167 L 4.667 1.167 C 4.667 0.703 4.482 0.257 4.154 -0.071 L 3.742 0.342 Z M 4.083 1.167 L 3.5 1.167 L 3.5 2.917 L 4.083 2.917 L 4.667 2.917 L 4.667 1.167 L 4.083 1.167 Z M 4.083 2.917 L 3.5 2.917 C 3.5 3.007 3.479 3.097 3.438 3.178 L 3.96 3.438 L 4.482 3.699 C 4.603 3.456 4.667 3.188 4.667 2.917 L 4.083 2.917 Z M 3.96 3.438 L 3.438 3.178 C 3.398 3.259 3.339 3.329 3.267 3.383 L 3.617 3.85 L 3.967 4.317 C 4.184 4.154 4.36 3.942 4.482 3.699 L 3.96 3.438 Z M 3.617 3.85 L 3.267 3.383 L 2.994 3.588 L 3.344 4.055 L 3.694 4.521 L 3.967 4.317 L 3.617 3.85 Z M 3.344 4.055 L 2.99 3.591 C 2.775 3.755 2.625 3.987 2.562 4.25 L 3.13 4.384 L 3.698 4.518 L 3.698 4.518 L 3.344 4.055 Z M 3.13 4.384 L 2.562 4.25 C 2.5 4.512 2.531 4.787 2.649 5.03 L 3.173 4.774 L 3.698 4.518 L 3.698 4.518 L 3.13 4.384 Z M 3.173 4.774 L 2.65 5.032 C 3.504 6.767 4.909 8.17 6.645 9.022 L 6.902 8.498 L 7.159 7.974 C 5.654 7.236 4.437 6.02 3.697 4.516 L 3.173 4.774 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 46.328,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 47,
      height: 16,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(115,115,115)"
    }
  }, "Log Call")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 132,
      height: 37,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -0.07,
      top: 0,
      width: 132,
      backgroundColor: "rgb(255,255,255)",
      borderTop: "1px solid rgb(90,95,242)",
      borderRight: "1px solid rgb(90,95,242)",
      borderBottom: "2px solid rgb(90,95,242)",
      borderLeft: "1px solid rgb(90,95,242)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "10px 16px 10px 16px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 11.667,
    height: 11.081,
    viewBox: "0 0 11.667 11.081",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.167,
      top: 1.75,
      width: 11.667,
      height: 11.081,
      color: "rgb(90,95,242)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.816 9.333 L 2.816 8.75 L 2.816 8.75 L 2.816 9.333 Z M 1.991 9.675 L 2.404 10.088 L 2.404 10.088 L 1.991 9.675 Z M 0.707 10.96 L 1.119 11.372 L 1.119 11.372 L 0.707 10.96 Z M 0 10.667 L -0.583 10.667 L -0.583 10.667 L 0 10.667 Z M 1.167 0 L 1.167 -0.583 L 1.167 0 Z M 10.5 0 L 10.5 -0.583 L 10.5 0 Z M 11.667 8.167 L 11.083 8.167 C 11.083 8.321 11.022 8.47 10.912 8.579 L 11.325 8.992 L 11.737 9.404 C 12.066 9.076 12.25 8.631 12.25 8.167 L 11.667 8.167 Z M 11.325 8.992 L 10.912 8.579 C 10.803 8.689 10.655 8.75 10.5 8.75 L 10.5 9.333 L 10.5 9.917 C 10.964 9.917 11.409 9.732 11.737 9.404 L 11.325 8.992 Z M 10.5 9.333 L 10.5 8.75 L 2.816 8.75 L 2.816 9.333 L 2.816 9.917 L 10.5 9.917 L 10.5 9.333 Z M 2.816 9.333 L 2.816 8.75 C 2.352 8.75 1.907 8.935 1.579 9.263 L 1.991 9.675 L 2.404 10.088 C 2.513 9.978 2.662 9.917 2.816 9.917 L 2.816 9.333 Z M 1.991 9.675 L 1.579 9.263 L 0.295 10.547 L 0.707 10.96 L 1.119 11.372 L 2.404 10.088 L 1.991 9.675 Z M 0.707 10.96 L 0.295 10.547 C 0.318 10.523 0.348 10.507 0.381 10.501 L 0.495 11.073 L 0.609 11.645 C 0.802 11.607 0.98 11.512 1.119 11.372 L 0.707 10.96 Z M 0.495 11.073 L 0.381 10.501 C 0.414 10.494 0.448 10.498 0.479 10.51 L 0.256 11.049 L 0.032 11.588 C 0.215 11.664 0.415 11.684 0.609 11.645 L 0.495 11.073 Z M 0.256 11.049 L 0.479 10.51 C 0.51 10.523 0.536 10.545 0.555 10.573 L 0.07 10.897 L -0.415 11.221 C -0.306 11.385 -0.15 11.513 0.032 11.588 L 0.256 11.049 Z M 0.07 10.897 L 0.555 10.573 C 0.573 10.601 0.583 10.633 0.583 10.667 L 0 10.667 L -0.583 10.667 C -0.583 10.864 -0.525 11.057 -0.415 11.221 L 0.07 10.897 Z M 0 10.667 L 0.583 10.667 L 0.583 1.167 L 0 1.167 L -0.583 1.167 L -0.583 10.667 L 0 10.667 Z M 0 1.167 L 0.583 1.167 C 0.583 1.012 0.645 0.864 0.754 0.754 L 0.342 0.342 L -0.071 -0.071 C -0.399 0.257 -0.583 0.703 -0.583 1.167 L 0 1.167 Z M 0.342 0.342 L 0.754 0.754 C 0.864 0.645 1.012 0.583 1.167 0.583 L 1.167 0 L 1.167 -0.583 C 0.703 -0.583 0.257 -0.399 -0.071 -0.071 L 0.342 0.342 Z M 1.167 0 L 1.167 0.583 L 10.5 0.583 L 10.5 0 L 10.5 -0.583 L 1.167 -0.583 L 1.167 0 Z M 10.5 0 L 10.5 0.583 C 10.655 0.583 10.803 0.645 10.912 0.754 L 11.325 0.342 L 11.737 -0.071 C 11.409 -0.399 10.964 -0.583 10.5 -0.583 L 10.5 0 Z M 11.325 0.342 L 10.912 0.754 C 11.022 0.864 11.083 1.012 11.083 1.167 L 11.667 1.167 L 12.25 1.167 C 12.25 0.703 12.066 0.257 11.737 -0.071 L 11.325 0.342 Z M 11.667 1.167 L 11.083 1.167 L 11.083 8.167 L 11.667 8.167 L 12.25 8.167 L 12.25 1.167 L 11.667 1.167 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 33,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 79,
      height: 16,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(10,10,10)"
    }
  }, "Send to client ")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 136.859,
      height: 37,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      padding: "12px 12px 12px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 27,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "From")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      height: 20,
      overflow: "hidden",
      borderRadius: 9999,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 20,
      background: "linear-gradient(135deg, rgb(56,189,248) 0.00%, rgb(59,130,246) 100.00%)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 600,
      fontSize: 9,
      whiteSpace: "nowrap",
      lineHeight: "12px",
      color: "rgb(255,255,255)",
      flexShrink: 0
    }
  }, "KI"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 22.828,
      height: 16,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 23,
      height: 16,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(10,10,10)"
    }
  }, "Kira")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 43,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 0px 8px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 20.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 4.5,
      width: 13,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "To")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexGrow: 1
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: 24,
      borderRadius: 9999,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 57.063,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 58,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(10,10,10)"
    }
  }, "Violet Cole"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 79.063,
      top: 0,
      width: 24,
      height: 24,
      borderRadius: 9999,
      borderTop: "1px dashed rgb(229,229,229)",
      borderRight: "1px dashed rgb(229,229,229)",
      borderBottom: "1px dashed rgb(229,229,229)",
      borderLeft: "1px dashed rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 7,
    height: 1,
    viewBox: "0 -0.500 7 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 2.5,
      top: 6,
      width: 7,
      height: 1,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 C -0.5 0.276 -0.276 0.5 0 0.5 L 0 0 L 0 -0.5 Z M 7 0.5 C 7.276 0.5 7.5 0.276 7.5 0 C 7.5 -0.276 7.276 -0.5 7 -0.5 L 7 0 L 7 0.5 Z M 0 0 L 0 0.5 L 7 0.5 L 7 0 L 7 -0.5 L 0 -0.5 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 7,
    viewBox: "-0.500 0 1 7",
    fill: "none",
    style: {
      position: "absolute",
      left: 6,
      top: 2.5,
      width: 1,
      height: 7,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M -0.5 7 C -0.5 7.276 -0.276 7.5 0 7.5 C 0.276 7.5 0.5 7.276 0.5 7 L 0 7 L -0.5 7 Z M 0 0 L -0.5 0 L -0.5 7 L 0 7 L 0.5 7 L 0.5 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 47.5,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      gap: 8,
      padding: "0px 0px 8px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 48,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 17,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "Via")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "2px 2px 2px 2px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      backgroundColor: "rgb(255,255,255)",
      boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 10px 4px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 9.498,
    viewBox: "0 0 10 9.498",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1.5,
      width: 10,
      height: 9.498,
      color: "rgb(10,10,10)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 2.414 8 L 2.414 7.5 L 2.414 7.5 L 2.414 8 Z M 1.707 8.293 L 2.061 8.647 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.96 9.748 L 0.96 9.748 L 0.606 9.394 Z M 0 9.143 L -0.5 9.143 L -0.5 9.143 L 0 9.143 Z M 1 0 L 1 -0.5 L 1 0 Z M 9 0 L 9 -0.5 L 9 0 Z M 10 7 L 9.5 7 C 9.5 7.133 9.447 7.26 9.354 7.354 L 9.707 7.707 L 10.061 8.061 C 10.342 7.779 10.5 7.398 10.5 7 L 10 7 Z M 9.707 7.707 L 9.354 7.354 C 9.26 7.447 9.133 7.5 9 7.5 L 9 8 L 9 8.5 C 9.398 8.5 9.779 8.342 10.061 8.061 L 9.707 7.707 Z M 9 8 L 9 7.5 L 2.414 7.5 L 2.414 8 L 2.414 8.5 L 9 8.5 L 9 8 Z M 2.414 8 L 2.414 7.5 C 2.016 7.5 1.635 7.658 1.353 7.94 L 1.707 8.293 L 2.061 8.647 C 2.154 8.553 2.282 8.5 2.414 8.5 L 2.414 8 Z M 1.707 8.293 L 1.353 7.939 L 0.252 9.04 L 0.606 9.394 L 0.96 9.748 L 2.061 8.647 L 1.707 8.293 Z M 0.606 9.394 L 0.252 9.04 C 0.273 9.02 0.299 9.006 0.327 9.001 L 0.424 9.491 L 0.522 9.982 C 0.688 9.949 0.84 9.867 0.96 9.748 L 0.606 9.394 Z M 0.424 9.491 L 0.327 9.001 C 0.355 8.995 0.384 8.998 0.41 9.009 L 0.219 9.471 L 0.028 9.933 C 0.184 9.998 0.356 10.015 0.522 9.982 L 0.424 9.491 Z M 0.219 9.471 L 0.41 9.009 C 0.437 9.02 0.46 9.039 0.476 9.062 L 0.06 9.34 L -0.356 9.618 C -0.262 9.759 -0.128 9.868 0.028 9.933 L 0.219 9.471 Z M 0.06 9.34 L 0.476 9.062 C 0.491 9.086 0.5 9.114 0.5 9.143 L 0 9.143 L -0.5 9.143 C -0.5 9.312 -0.45 9.477 -0.356 9.618 L 0.06 9.34 Z M 0 9.143 L 0.5 9.143 L 0.5 1 L 0 1 L -0.5 1 L -0.5 9.143 L 0 9.143 Z M 0 1 L 0.5 1 C 0.5 0.867 0.553 0.74 0.646 0.646 L 0.293 0.293 L -0.061 -0.061 C -0.342 0.221 -0.5 0.602 -0.5 1 L 0 1 Z M 0.293 0.293 L 0.646 0.646 C 0.74 0.553 0.867 0.5 1 0.5 L 1 0 L 1 -0.5 C 0.602 -0.5 0.221 -0.342 -0.061 -0.061 L 0.293 0.293 Z M 1 0 L 1 0.5 L 9 0.5 L 9 0 L 9 -0.5 L 1 -0.5 L 1 0 Z M 9 0 L 9 0.5 C 9.133 0.5 9.26 0.553 9.354 0.646 L 9.707 0.293 L 10.061 -0.061 C 9.779 -0.342 9.398 -0.5 9 -0.5 L 9 0 Z M 9.707 0.293 L 9.354 0.646 C 9.447 0.74 9.5 0.867 9.5 1 L 10 1 L 10.5 1 C 10.5 0.602 10.342 0.221 10.061 -0.061 L 9.707 0.293 Z M 10 1 L 9.5 1 L 9.5 7 L 10 7 L 10.5 7 L 10.5 1 L 10 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 57.914,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 59,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(10,10,10)"
    }
  }, "Text (SMS)"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 10px 4px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 10,
    viewBox: "0 0 10 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 1,
      width: 10,
      height: 10,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.496 7.171 L 0.961 6.987 C 0.956 6.975 0.951 6.965 0.946 6.954 L 0.496 7.171 Z M 0.543 7.754 L 1.019 7.908 C 1.023 7.893 1.028 7.878 1.031 7.862 L 0.543 7.754 Z M 0.01 9.399 L -0.465 9.245 C -0.471 9.263 -0.476 9.281 -0.479 9.299 L 0.01 9.399 Z M 0.628 9.983 L 0.757 10.467 L 0.769 10.463 L 0.628 9.983 Z M 2.335 9.484 L 2.238 8.994 C 2.223 8.997 2.209 9 2.195 9.004 L 2.335 9.484 Z M 2.884 9.53 L 3.096 9.077 C 3.085 9.072 3.073 9.067 3.062 9.063 L 2.884 9.53 Z M 0.496 7.171 L 0.031 7.355 C 0.068 7.448 0.076 7.549 0.055 7.647 L 0.543 7.754 L 1.031 7.862 C 1.095 7.57 1.071 7.265 0.961 6.987 L 0.496 7.171 Z M 0.543 7.754 L 0.067 7.6 L -0.465 9.245 L 0.01 9.399 L 0.486 9.553 L 1.019 7.908 L 0.543 7.754 Z M 0.01 9.399 L -0.479 9.299 C -0.514 9.465 -0.505 9.638 -0.454 9.801 L 0.023 9.65 L 0.5 9.5 L 0.5 9.5 L 0.01 9.399 Z M 0.023 9.65 L -0.454 9.801 C -0.402 9.963 -0.311 10.11 -0.187 10.227 L 0.157 9.863 L 0.5 9.5 L 0.5 9.5 L 0.023 9.65 Z M 0.157 9.863 L -0.187 10.227 C -0.063 10.344 0.089 10.427 0.254 10.469 L 0.377 9.985 L 0.5 9.5 L 0.5 9.5 L 0.157 9.863 Z M 0.377 9.985 L 0.254 10.469 C 0.419 10.511 0.592 10.51 0.757 10.467 L 0.628 9.983 L 0.5 9.5 L 0.5 9.5 L 0.377 9.985 Z M 0.628 9.983 L 0.769 10.463 L 2.475 9.964 L 2.335 9.484 L 2.195 9.004 L 0.488 9.503 L 0.628 9.983 Z M 2.335 9.484 L 2.432 9.975 C 2.524 9.957 2.619 9.965 2.707 9.998 L 2.884 9.53 L 3.062 9.063 C 2.799 8.963 2.513 8.939 2.238 8.994 L 2.335 9.484 Z M 2.884 9.53 L 2.673 9.983 C 3.847 10.532 5.178 10.648 6.429 10.311 L 6.299 9.828 L 6.169 9.345 C 5.145 9.621 4.057 9.526 3.096 9.077 L 2.884 9.53 Z M 6.299 9.828 L 6.429 10.311 C 7.681 9.974 8.774 9.206 9.514 8.142 L 9.104 7.857 L 8.693 7.571 C 8.087 8.441 7.194 9.07 6.169 9.345 L 6.299 9.828 Z M 9.104 7.857 L 9.514 8.142 C 10.255 7.078 10.596 5.787 10.477 4.496 L 9.979 4.542 L 9.481 4.588 C 9.578 5.644 9.299 6.7 8.693 7.571 L 9.104 7.857 Z M 9.979 4.542 L 10.477 4.496 C 10.358 3.206 9.787 1.998 8.865 1.087 L 8.514 1.443 L 8.162 1.799 C 8.917 2.544 9.384 3.532 9.481 4.588 L 9.979 4.542 Z M 8.514 1.443 L 8.865 1.087 C 7.943 0.176 6.729 -0.38 5.437 -0.483 L 5.397 0.016 L 5.357 0.514 C 6.415 0.598 7.408 1.053 8.162 1.799 L 8.514 1.443 Z M 5.397 0.016 L 5.437 -0.483 C 4.145 -0.586 2.858 -0.229 1.803 0.525 L 2.094 0.932 L 2.384 1.338 C 3.247 0.722 4.3 0.43 5.357 0.514 L 5.397 0.016 Z M 2.094 0.932 L 1.803 0.525 C 0.748 1.278 -0.007 2.38 -0.328 3.636 L 0.156 3.76 L 0.641 3.884 C 0.904 2.856 1.521 1.955 2.384 1.338 L 2.094 0.932 Z M 0.156 3.76 L -0.328 3.636 C -0.65 4.891 -0.517 6.22 0.045 7.388 L 0.496 7.171 L 0.946 6.954 C 0.486 5.998 0.378 4.911 0.641 3.884 L 0.156 3.76 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 60.438,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 61,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "In-app chat"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      borderRadius: 6,
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "4px 10px 4px 10px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 2.999,
    viewBox: "0 0 10 2.999",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 3.5,
      width: 10,
      height: 2.999,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 10.269 0.422 C 10.502 0.273 10.57 -0.036 10.422 -0.269 C 10.273 -0.502 9.964 -0.57 9.731 -0.422 L 10 0 L 10.269 0.422 Z M 5.504 2.864 L 5.756 3.296 C 5.762 3.292 5.767 3.289 5.773 3.285 L 5.504 2.864 Z M 5.002 2.999 L 5.002 2.499 L 5.002 2.999 Z M 4.5 2.864 L 4.232 3.285 C 4.237 3.289 4.243 3.292 4.249 3.296 L 4.5 2.864 Z M 0.268 -0.422 C 0.035 -0.57 -0.274 -0.501 -0.422 -0.268 C -0.57 -0.035 -0.501 0.274 -0.268 0.422 L 0 0 L 0.268 -0.422 Z M 10 0 L 9.731 -0.422 L 5.236 2.442 L 5.504 2.864 L 5.773 3.285 L 10.269 0.422 L 10 0 Z M 5.504 2.864 L 5.253 2.431 C 5.177 2.475 5.09 2.499 5.002 2.499 L 5.002 2.999 L 5.002 3.499 C 5.267 3.499 5.527 3.429 5.756 3.296 L 5.504 2.864 Z M 5.002 2.999 L 5.002 2.499 C 4.914 2.499 4.827 2.475 4.751 2.431 L 4.5 2.864 L 4.249 3.296 C 4.478 3.429 4.738 3.499 5.002 3.499 L 5.002 2.999 Z M 4.5 2.864 L 4.768 2.442 L 0.268 -0.422 L 0 0 L -0.268 0.422 L 4.232 3.285 L 4.5 2.864 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 10,
    height: 8,
    viewBox: "0 0 10 8",
    fill: "none",
    style: {
      position: "absolute",
      left: 1,
      top: 2,
      width: 10,
      height: 8,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0 L 1 0.5 L 9 0.5 L 9 0 L 9 -0.5 L 1 -0.5 L 1 0 Z M 9 0 L 9 0.5 C 9.276 0.5 9.5 0.724 9.5 1 L 10 1 L 10.5 1 C 10.5 0.172 9.828 -0.5 9 -0.5 L 9 0 Z M 10 1 L 9.5 1 L 9.5 7 L 10 7 L 10.5 7 L 10.5 1 L 10 1 Z M 10 7 L 9.5 7 C 9.5 7.276 9.276 7.5 9 7.5 L 9 8 L 9 8.5 C 9.828 8.5 10.5 7.828 10.5 7 L 10 7 Z M 9 8 L 9 7.5 L 1 7.5 L 1 8 L 1 8.5 L 9 8.5 L 9 8 Z M 1 8 L 1 7.5 C 0.724 7.5 0.5 7.276 0.5 7 L 0 7 L -0.5 7 C -0.5 7.828 0.172 8.5 1 8.5 L 1 8 Z M 0 7 L 0.5 7 L 0.5 1 L 0 1 L -0.5 1 L -0.5 7 L 0 7 Z M 0 1 L 0.5 1 C 0.5 0.724 0.724 0.5 1 0.5 L 1 0 L 1 -0.5 C 0.172 -0.5 -0.5 0.172 -0.5 1 L 0 1 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28.195,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 29,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 11,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "Email")))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 106,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 96,
      overflow: "hidden",
      borderRadius: 8,
      backgroundColor: "rgb(255,255,255)",
      display: "flex",
      flexDirection: "column",
      padding: "8px 12px 8px 12px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 14,
      lineHeight: "20px",
      color: "rgb(115,115,115)",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, "Type your text message\u2026")))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 34,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 24,
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: 0,
      top: 0,
      height: 24,
      borderRadius: 8,
      backgroundColor: "rgb(245,245,245)",
      borderTop: "1px solid rgb(229,229,229)",
      borderRight: "1px solid rgb(229,229,229)",
      borderBottom: "1px solid rgb(229,229,229)",
      borderLeft: "1px solid rgb(229,229,229)",
      display: "flex",
      flexDirection: "row",
      gap: 4,
      padding: "0px 8px 0px 8px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 8,
    height: 10,
    viewBox: "0 0 8 10",
    fill: "none",
    style: {
      position: "absolute",
      left: 2,
      top: 1,
      width: 8,
      height: 10,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 5.5 0 L 5.854 -0.354 C 5.76 -0.447 5.633 -0.5 5.5 -0.5 L 5.5 0 Z M 1 0 L 1 -0.5 L 1 0 Z M 0 1 L -0.5 1 L 0 1 Z M 0 9 L -0.5 9 L 0 9 Z M 8 2.5 L 8.5 2.5 C 8.5 2.367 8.447 2.24 8.354 2.146 L 8 2.5 Z M 5.5 0 L 5.5 -0.5 L 1 -0.5 L 1 0 L 1 0.5 L 5.5 0.5 L 5.5 0 Z M 1 0 L 1 -0.5 C 0.602 -0.5 0.221 -0.342 -0.061 -0.061 L 0.293 0.293 L 0.646 0.646 C 0.74 0.553 0.867 0.5 1 0.5 L 1 0 Z M 0.293 0.293 L -0.061 -0.061 C -0.342 0.221 -0.5 0.602 -0.5 1 L 0 1 L 0.5 1 C 0.5 0.867 0.553 0.74 0.646 0.646 L 0.293 0.293 Z M 0 1 L -0.5 1 L -0.5 9 L 0 9 L 0.5 9 L 0.5 1 L 0 1 Z M 0 9 L -0.5 9 C -0.5 9.398 -0.342 9.779 -0.061 10.061 L 0.293 9.707 L 0.646 9.354 C 0.553 9.26 0.5 9.133 0.5 9 L 0 9 Z M 0.293 9.707 L -0.061 10.061 C 0.221 10.342 0.602 10.5 1 10.5 L 1 10 L 1 9.5 C 0.867 9.5 0.74 9.447 0.646 9.354 L 0.293 9.707 Z M 1 10 L 1 10.5 L 7 10.5 L 7 10 L 7 9.5 L 1 9.5 L 1 10 Z M 7 10 L 7 10.5 C 7.398 10.5 7.779 10.342 8.061 10.061 L 7.707 9.707 L 7.354 9.354 C 7.26 9.447 7.133 9.5 7 9.5 L 7 10 Z M 7.707 9.707 L 8.061 10.061 C 8.342 9.779 8.5 9.398 8.5 9 L 8 9 L 7.5 9 C 7.5 9.133 7.447 9.26 7.354 9.354 L 7.707 9.707 Z M 8 9 L 8.5 9 L 8.5 2.5 L 8 2.5 L 7.5 2.5 L 7.5 9 L 8 9 Z M 8 2.5 L 8.354 2.146 L 5.854 -0.354 L 5.5 0 L 5.146 0.354 L 7.646 2.854 L 8 2.5 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 3,
    height: 3,
    viewBox: "0 0 3 3",
    fill: "none",
    style: {
      position: "absolute",
      left: 7,
      top: 1,
      width: 3,
      height: 3,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.5 0 C 0.5 -0.276 0.276 -0.5 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 L 0 0 L 0.5 0 Z M 1 3 L 1 3.5 L 1 3 Z M 3 3.5 C 3.276 3.5 3.5 3.276 3.5 3 C 3.5 2.724 3.276 2.5 3 2.5 L 3 3 L 3 3.5 Z M 0 0 L -0.5 0 L -0.5 2 L 0 2 L 0.5 2 L 0.5 0 L 0 0 Z M 0 2 L -0.5 2 C -0.5 2.398 -0.342 2.779 -0.061 3.061 L 0.293 2.707 L 0.646 2.354 C 0.553 2.26 0.5 2.133 0.5 2 L 0 2 Z M 0.293 2.707 L -0.061 3.061 C 0.221 3.342 0.602 3.5 1 3.5 L 1 3 L 1 2.5 C 0.867 2.5 0.74 2.447 0.646 2.354 L 0.293 2.707 Z M 1 3 L 1 3.5 L 3 3.5 L 3 3 L 3 2.5 L 1 2.5 L 1 3 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 1,
    viewBox: "0 -0.500 1 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 4.5,
      width: 1,
      height: 1,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 1 0.5 C 1.276 0.5 1.5 0.276 1.5 0 C 1.5 -0.276 1.276 -0.5 1 -0.5 L 1 0 L 1 0.5 Z M 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 C -0.5 0.276 -0.276 0.5 0 0.5 L 0 0 L 0 -0.5 Z M 1 0 L 1 -0.5 L 0 -0.5 L 0 0 L 0 0.5 L 1 0.5 L 1 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 1,
    viewBox: "0 -0.500 4 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 6.5,
      width: 4,
      height: 1,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0.5 C 4.276 0.5 4.5 0.276 4.5 0 C 4.5 -0.276 4.276 -0.5 4 -0.5 L 4 0 L 4 0.5 Z M 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 C -0.5 0.276 -0.276 0.5 0 0.5 L 0 0 L 0 -0.5 Z M 4 0 L 4 -0.5 L 0 -0.5 L 0 0 L 0 0.5 L 4 0.5 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 4,
    height: 1,
    viewBox: "0 -0.500 4 1",
    fill: "none",
    style: {
      position: "absolute",
      left: 4,
      top: 8.5,
      width: 4,
      height: 1,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 4 0.5 C 4.276 0.5 4.5 0.276 4.5 0 C 4.5 -0.276 4.276 -0.5 4 -0.5 L 4 0 L 4 0.5 Z M 0 -0.5 C -0.276 -0.5 -0.5 -0.276 -0.5 0 C -0.5 0.276 -0.276 0.5 0 0.5 L 0 0 L 0 -0.5 Z M 4 0 L 4 -0.5 L 0 -0.5 L 0 0 L 0 0.5 L 4 0.5 L 4 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 88.57,
      height: 16.5,
      maxWidth: 140,
      maxHeight: null,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 90,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(10,10,10)"
    }
  }, "attachment-1.pdf")), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 12,
      height: 12,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 6,
      height: 6,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 6.354 0.354 C 6.549 0.158 6.549 -0.158 6.354 -0.354 C 6.158 -0.549 5.842 -0.549 5.646 -0.354 L 6 0 L 6.354 0.354 Z M -0.354 5.646 C -0.549 5.842 -0.549 6.158 -0.354 6.354 C -0.158 6.549 0.158 6.549 0.354 6.354 L 0 6 L -0.354 5.646 Z M 6 0 L 5.646 -0.354 L -0.354 5.646 L 0 6 L 0.354 6.354 L 6.354 0.354 L 6 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })), /*#__PURE__*/React.createElement("svg", {
    width: 6,
    height: 6,
    viewBox: "0 0 6 6",
    fill: "none",
    style: {
      position: "absolute",
      left: 3,
      top: 3,
      width: 6,
      height: 6,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0.354 -0.354 C 0.158 -0.549 -0.158 -0.549 -0.354 -0.354 C -0.549 -0.158 -0.549 0.158 -0.354 0.354 L 0 0 L 0.354 -0.354 Z M 5.646 6.354 C 5.842 6.549 6.158 6.549 6.354 6.354 C 6.549 6.158 6.549 5.842 6.354 5.646 L 6 6 L 5.646 6.354 Z M 0 0 L -0.354 0.354 L 5.646 6.354 L 6 6 L 6.354 5.646 L 0.354 -0.354 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 46,
      display: "flex",
      flexDirection: "column",
      padding: "10px 0px 10px 0px",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "4px 0px 4px 0px",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0,
      alignSelf: "stretch"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 180.93,
      display: "flex",
      flexDirection: "row",
      gap: 2,
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 28,
      height: 28,
      borderRadius: 8,
      display: "flex",
      flexDirection: "row",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 14,
      height: 14,
      overflow: "hidden",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 10.883,
    height: 11.666,
    viewBox: "0 0 10.883 11.666",
    fill: "none",
    style: {
      position: "absolute",
      left: 1.751,
      top: 1.167,
      width: 10.883,
      height: 11.666,
      color: "rgb(115,115,115)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 7.999 2.741 C 8.225 2.511 8.221 2.142 7.991 1.916 C 7.761 1.691 7.392 1.695 7.166 1.925 L 7.583 2.333 L 7.999 2.741 Z M 2.675 7.342 L 3.087 7.754 L 3.091 7.75 L 2.675 7.342 Z M 3.5 9.334 L 3.5 8.75 L 3.5 9.334 Z M 4.325 8.992 L 4.737 9.404 L 4.741 9.4 L 4.325 8.992 Z M 9.233 3.983 L 8.821 3.571 L 8.816 3.575 L 9.233 3.983 Z M 9.916 2.333 L 10.5 2.333 L 9.916 2.333 Z M 7.583 0 L 7.583 -0.583 L 7.583 0 Z M 5.933 0.683 L 5.521 0.271 L 5.516 0.275 L 5.933 0.683 Z M 1.045 5.672 L 1.455 6.087 L 1.462 6.08 L 1.045 5.672 Z M 5.995 10.621 L 6.411 11.03 L 6.412 11.029 L 5.995 10.621 Z M 11.299 6.041 C 11.525 5.811 11.521 5.442 11.291 5.216 C 11.061 4.991 10.692 4.995 10.466 5.225 L 10.883 5.633 L 11.299 6.041 Z M 7.583 2.333 L 7.166 1.925 L 2.258 6.933 L 2.675 7.342 L 3.091 7.75 L 7.999 2.741 L 7.583 2.333 Z M 2.675 7.342 L 2.262 6.929 C 1.934 7.257 1.75 7.703 1.75 8.167 L 2.333 8.167 L 2.916 8.167 C 2.916 8.012 2.978 7.864 3.087 7.754 L 2.675 7.342 Z M 2.333 8.167 L 1.75 8.167 C 1.75 8.631 1.934 9.076 2.262 9.404 L 2.675 8.992 L 3.087 8.579 C 2.978 8.47 2.916 8.321 2.916 8.167 L 2.333 8.167 Z M 2.675 8.992 L 2.262 9.404 C 2.59 9.733 3.036 9.917 3.5 9.917 L 3.5 9.334 L 3.5 8.75 C 3.345 8.75 3.197 8.689 3.087 8.579 L 2.675 8.992 Z M 3.5 9.334 L 3.5 9.917 C 3.964 9.917 4.409 9.733 4.737 9.404 L 4.325 8.992 L 3.912 8.579 C 3.803 8.689 3.655 8.75 3.5 8.75 L 3.5 9.334 Z M 4.325 8.992 L 4.741 9.4 L 9.65 4.392 L 9.233 3.983 L 8.816 3.575 L 3.908 8.584 L 4.325 8.992 Z M 9.233 3.983 L 9.646 4.396 C 10.193 3.849 10.5 3.107 10.5 2.333 L 9.916 2.333 L 9.333 2.333 C 9.333 2.798 9.149 3.243 8.821 3.571 L 9.233 3.983 Z M 9.916 2.333 L 10.5 2.333 C 10.5 1.56 10.193 0.818 9.646 0.271 L 9.233 0.683 L 8.821 1.096 C 9.149 1.424 9.333 1.869 9.333 2.333 L 9.916 2.333 Z M 9.233 0.683 L 9.646 0.271 C 9.099 -0.276 8.357 -0.583 7.583 -0.583 L 7.583 0 L 7.583 0.583 C 8.047 0.583 8.492 0.768 8.821 1.096 L 9.233 0.683 Z M 7.583 0 L 7.583 -0.583 C 6.81 -0.583 6.068 -0.276 5.521 0.271 L 5.933 0.683 L 6.346 1.096 C 6.674 0.768 7.119 0.583 7.583 0.583 L 7.583 0 Z M 5.933 0.683 L 5.516 0.275 L 0.629 5.263 L 1.045 5.672 L 1.462 6.08 L 6.35 1.092 L 5.933 0.683 Z M 1.045 5.672 L 0.636 5.256 C 0.252 5.634 -0.054 6.084 -0.263 6.581 L 0.275 6.807 L 0.812 7.034 C 0.962 6.679 1.18 6.357 1.454 6.087 L 1.045 5.672 Z M 0.275 6.807 L -0.263 6.581 C -0.472 7.078 -0.581 7.611 -0.583 8.15 L 0 8.152 L 0.583 8.155 C 0.585 7.77 0.663 7.389 0.812 7.034 L 0.275 6.807 Z M 0 8.152 L -0.583 8.15 C -0.585 8.689 -0.481 9.223 -0.276 9.721 L 0.264 9.499 L 0.803 9.277 C 0.656 8.921 0.582 8.54 0.583 8.155 L 0 8.152 Z M 0.264 9.499 L -0.276 9.721 C -0.07 10.22 0.231 10.673 0.613 11.054 L 1.025 10.641 L 1.438 10.229 C 1.165 9.957 0.95 9.633 0.803 9.277 L 0.264 9.499 Z M 1.025 10.641 L 0.613 11.054 C 0.994 11.435 1.447 11.737 1.945 11.942 L 2.167 11.403 L 2.389 10.863 C 2.033 10.717 1.71 10.501 1.438 10.229 L 1.025 10.641 Z M 2.167 11.403 L 1.945 11.942 C 2.443 12.147 2.978 12.252 3.517 12.25 L 3.514 11.666 L 3.512 11.083 C 3.127 11.085 2.745 11.01 2.389 10.863 L 2.167 11.403 Z M 3.514 11.666 L 3.517 12.25 C 4.056 12.248 4.589 12.139 5.086 11.929 L 4.859 11.392 L 4.633 10.854 C 4.278 11.004 3.897 11.082 3.512 11.083 L 3.514 11.666 Z M 4.859 11.392 L 5.086 11.929 C 5.582 11.72 6.033 11.414 6.411 11.03 L 5.995 10.621 L 5.579 10.212 C 5.309 10.486 4.987 10.705 4.633 10.854 L 4.859 11.392 Z M 5.995 10.621 L 6.412 11.029 L 11.299 6.041 L 10.883 5.633 L 10.466 5.225 L 5.578 10.213 L 5.995 10.621 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      display: "flex",
      flexDirection: "row",
      padding: "0px 4px 0px 4px",
      alignItems: "flex-start",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: 1,
    height: 0,
    viewBox: "0 0 1 0",
    fill: "none",
    style: {
      position: "relative",
      width: 1,
      height: 0.00009999999747378752,
      flexShrink: 0,
      color: "rgb(229,229,229)"
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "M 0 0 L 1 0 L 1 0 L 0 0 L 0 0 Z",
    fill: "currentColor",
    fillRule: "nonzero"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      width: 139.93,
      height: 16.5,
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 0,
      top: 0.5,
      width: 141,
      height: 17,
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 400,
      fontSize: 11,
      whiteSpace: "nowrap",
      lineHeight: "16.500px",
      color: "rgb(115,115,115)"
    }
  }, "Sends via SMS \xB7 1 recipient"))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      height: 32,
      borderRadius: 8,
      backgroundColor: "rgb(90,95,242)",
      display: "flex",
      flexDirection: "row",
      gap: 6,
      padding: "0px 12px 0px 12px",
      justifyContent: "center",
      alignItems: "center",
      flexWrap: "nowrap",
      boxSizing: "border-box",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      fontFamily: "Inter, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif",
      fontWeight: 500,
      fontSize: 12,
      textAlign: "center",
      whiteSpace: "nowrap",
      lineHeight: "16px",
      color: "rgb(250,250,250)",
      flexShrink: 0
    }
  }, "Send Message"))))));
}

// Globals for scripts loaded after this file.
window.SideBar3 = SideBar3;
window.Header = Header;
window.CenterPanelSendToClient = CenterPanelSendToClient;
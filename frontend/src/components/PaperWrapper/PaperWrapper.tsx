import React, { ReactChild } from "react";
import { makeStyles, Paper, Theme } from "@material-ui/core";

type Props = {
  children?: ReactChild | ReactChild[];
};

const useStyles = makeStyles((theme: Theme) => ({
  wrapper: {
    background: "white",
    width: "500px",
    minHeight: "500px",
    height: "fit-content",
    marginTop: "150px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    position: "relative",
    "@media (max-width:600px)": {
      width: "calc(100% - 20px)",
    },
  },
}));

const PaperWrapper: React.FC<Props> = ({ children }) => {
  const classes = useStyles();
  return (
    <Paper elevation={1} className={classes.wrapper}>
      {children}
    </Paper>
  );
};

export default PaperWrapper;

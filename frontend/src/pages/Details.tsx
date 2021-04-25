import {
  Button,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import React from "react";
import PaperWrapper from "../components/PaperWrapper/PaperWrapper";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import { useHistory, useLocation } from "react-router";

type Props = {
  match: { params: { id: string } };
};

type UserData = {
  title?: string;
  body?: string;
};

const useStyles = makeStyles((theme: Theme) => ({
  title: {
    color: "gray",
    marginTop: "40px",
  },
  txtBody: {
    marginTop: "30px",
  },
  backBtn: {
    position: "absolute",
    top: "30px",
    left: "30px",
  },
}));
const Details: React.FC<Props> = (props) => {
  const classes = useStyles();
  const history = useHistory();
  const location = useLocation<{ data: UserData }>();
  const { title, body }: UserData = location.state.data;
  return (
    <PaperWrapper>
      <Typography variant="h3" component="h3" className={classes.title}>
        {title}
      </Typography>
      <TextField
        value={body}
        variant="outlined"
        className={classes.txtBody}
        multiline
        disabled
        fullWidth
        rows="10"
      />
      <Button
        startIcon={<KeyboardBackspaceIcon />}
        color="primary"
        className={classes.backBtn}
        onClick={() => history.push("/")}
      >
        Back to Home
      </Button>
    </PaperWrapper>
  );
};

export default Details;

import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  TextField,
  Theme,
  Typography,
} from "@material-ui/core";
import CreditCardIcon from "@material-ui/icons/CreditCard";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router";
import PaperWrapper from "../components/PaperWrapper/PaperWrapper";
import { Alert, AlertTitle } from "@material-ui/lab";

const useStyles = makeStyles((theme: Theme) => ({
  button: {
    marginTop: "20px",
    width: "150px",
  },
  error: {
    color: "red",
    height: "16px",
    fontSize: "12px",
  },
}));

const Home: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [ID, setID] = useState<string>("");
  const [errMsg, setErrMsg] = useState<string>("");
  const [alert, setAlert] = useState<string>("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setID(e.target.value);
    setErrMsg("");
  };
  const onSubmit = (): void => {
    if (ID.length > 0) {
      // fetch(`http://localhost:3000/posts/${ID}`)
      fetch(`https://shrouded-garden-65527.herokuapp.com/posts/${ID}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.title && data.body) {
            history.push({ pathname: `/details/${ID}`, state: { data: data } });
          } else {
            setAlert("There is no valid item in post");
          }
        })
        .catch((err) => setAlert("There is no valid post"));
    } else {
      setErrMsg("invalid ID!");
    }
  };

  return (
    <PaperWrapper>
      {alert && (
        <Alert severity="error">
          <AlertTitle>Error</AlertTitle>
          <strong>{alert}</strong>
        </Alert>
      )}
      <div style={{ margin: "auto" }}>
        <Grid container spacing={1} alignItems="center">
          <Grid item>
            <CreditCardIcon />
          </Grid>
          <Grid item>
            <TextField
              fullWidth
              id="input-with-icon-grid"
              label="User ID"
              variant="outlined"
              size="small"
              onChange={handleChange}
            />
          </Grid>
        </Grid>
        <Typography
          variant="h6"
          component="h6"
          color="error"
          className={classes.error}
        >
          {errMsg}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={onSubmit}
        >
          Send
        </Button>
      </div>
    </PaperWrapper>
  );
};

export default Home;

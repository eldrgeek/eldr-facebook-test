import React from "react";
import ReactDOM from "react-dom";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import "./styles.css";
import VideoPlayer from "./VideoPlayer";
import "./firebaseAuth";
import { firestore } from "firebase";

const db = firestore();
let count = 1;
const useStyles = makeStyles(theme => ({
  player: {
    maxWidth: "200px"
  },
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

function App() {
  const classes = useStyles();
  const clickEvent = () => {
    // window.fbq("track", "ViewContent");
    console.log(db.collection("cities").doc("LA").set);
    db.collection("visits")
      .add({
        date: Date()
      })
      .then(function(docRef) {
        console.log("Document written with ID: ", docRef.id);
      })
      .catch(function(error) {
        console.error("Error adding document: ", error);
      });

    // db.ref("visits/" + count++).create({
    //   date: Date()s
    // });
    console.log("clicked");
  };
  return (
    <div className="App">
      <VideoPlayer className={classes.player} />
      <Button
        onClick={clickEvent}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Click to get the report
      </Button>{" "}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

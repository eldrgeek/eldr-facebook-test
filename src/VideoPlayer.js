import React from "react";
import ReactPlayer from "react-player";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
// import Iframe from "react-iframe";
const useStyles = makeStyles(theme => ({
  linkButton: {
    backgroundColor: "transparent",
    border: "none",
    cursor: "pointer",
    textDecoration: "underline",
    fontSize: "inherit",
    display: "inline",
    margin: "0",
    padding: "0"
  },
  still: {
    position: "absolute",
    width: "80%"
  },

  player: {
    width: "80%"
  }

  // linkButton:hover,
  // link-button:focus {
  // text-decoration: none;
  // }
}));
const url = "https://www.youtube.com/watch?v=bA5Oj-5MKbQ";
const RevolutionVideo = props => {
  const classes = useStyles();
  const [message, setMessage] = React.useState("no message");
  const [playing, setPlaying] = React.useState(false);
  const [showLyrics, setShowLyrics] = React.useState(false);
  const [visible, setVisible] = React.useState("visible");

  const startPlaying = () => {
    setPlaying(true);
  };
  // setTimeout(() => {
  //   let width = document.querySelector("iframe").style.width; //.document.body.scrollWidth + "px"
  //   console.log("width", width);
  // }, 1000);
  return (
    <React.Fragment>
      <div>
        <img
          style={{ visibility: visible, width: "100px" }}
          id="still"
          className={classes.still}
          alt="revolution 1x1"
          src="revolution still.jpg"
        />
        <RevolutionPlayer
          id="player"
          className={classes.player}
          message={message}
          playing={playing}
          width={window.innerWidth + "px"}
          onStart={() => setVisible("hidden")}
          onEnded={() => setMessage("ended")}
          onPlay={() => setMessage("playing")}
          onPause={() => setVisible("visible")}
        />
      </div>
    </React.Fragment>
  );
};
const RevolutionPlayer = props => {
  return (
    <React.Fragment>
      <ReactPlayer
        url={url}
        playing={props.playing}
        config={{
          youtube: {
            playerVars: {
              controls: "1",
              showinfo: 1
            }
          },
          facebook: {
            appId: "12345"
          }
        }}
        {...props}
      />
    </React.Fragment>
  );
};
export default RevolutionVideo;

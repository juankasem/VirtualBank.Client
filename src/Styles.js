import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: "30px 0",
    padding: "0 30px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  heading: {
    color: "rgba(0,183,255, 1)",
  },
  image: {
    marginLeft: "15px",
  },

  sideMenu: {
    display: "flex",
    flexDirection: "column",
    position: "absolute",
    left: 0,
    width: "320px",
    height: "100%",
    backgroundColor: "#253053",
  },
}));

export default useStyles;

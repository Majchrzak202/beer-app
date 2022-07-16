import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  page: {
    minHeight: "80vh",
    maxWidth: '80%',
    marginTop: '90px'
   
  },
  img: {
    // maxWidth: 345, original width style
    width: "50px",
    height: "200px",
    marginLeft: '20px'
  },
  header: {
    // maxWidth: 345, original width style
    display: 'flex',
    justifyContent: 'space-between'
  },
});

export default useStyles;
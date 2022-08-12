import React from "react";
import { CircularProgress, Box } from "@material-ui/core";
import './LoadingSpinner.css'

const LoadingSpinner = () => {
  return (
    <div className="spinner">
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </div>
  );
};

export default LoadingSpinner;
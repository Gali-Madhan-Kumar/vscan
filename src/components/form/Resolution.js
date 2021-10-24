import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";

export default function Resolution() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="resolution">Resolution</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="resolution"
          value={value}
          label="Resolution"
          onChange={handleChange}
        >
          <MenuItem value={"inProgress"}>In Progress</MenuItem>
          <MenuItem value={"resolved"}>Resolved</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

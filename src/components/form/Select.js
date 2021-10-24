import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect() {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="deviceType">Device Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="deviceType"
          value={value}
          label="Device Type"
          onChange={handleChange}
        >
          <MenuItem value={"two"}>Two Wheeler</MenuItem>
          <MenuItem value={"four"}>Four Wheeler</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

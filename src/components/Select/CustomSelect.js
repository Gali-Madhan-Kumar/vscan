import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MenuItem } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 320,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  menuPaper: {
    maxHeight: 200,
  },
}));

export default function CustomSelect() {
  const classes = useStyles();
  const [pid, setPid] = React.useState("");

  const handleChange = (event) => {
    setPid(event.target.value);
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel htmlFor="outlined-simple-select">Select</InputLabel>
        <Select
          defaultValue="Select"
          value={pid}
          onChange={handleChange}
          label="Select"
          className={classes.select}
          MenuProps={{ classes: { paper: classes.menuPaper } }}
          inputProps={{
            name: "pid",
            id: "pids",
          }}
        >
          <MenuItem value={"0100"}>0100</MenuItem>
          <MenuItem value={"0101"}>0101</MenuItem>
          <MenuItem value={"0102"}>0102</MenuItem>
          <MenuItem value={"0103"}>0103</MenuItem>
          <MenuItem value={"0104"}>0104</MenuItem>
          <MenuItem value={"0105"}>0105</MenuItem>
          <MenuItem value={"0106"}>0106</MenuItem>
          <MenuItem value={"0107"}>0107</MenuItem>
          <MenuItem value={"0108"}>0108</MenuItem>
          <MenuItem value={"0109"}>0109</MenuItem>
          <MenuItem value={"010C"}>010C</MenuItem>
          <MenuItem value={"010A"}>010A</MenuItem>
          <MenuItem value={"010D"}>010D</MenuItem>
          <MenuItem value={"010E"}>010E</MenuItem>
          <MenuItem value={"010F"}>010F</MenuItem>
          <MenuItem value={"0110"}>0110</MenuItem>
          <MenuItem value={"0111"}>0111</MenuItem>
          <MenuItem value={"0112"}>0112</MenuItem>
          <MenuItem value={"0113"}>0113</MenuItem>
          <MenuItem value={"0114"}>0114</MenuItem>
          <MenuItem value={"0115"}>0115</MenuItem>
          <MenuItem value={"0116"}>0116</MenuItem>
          <MenuItem value={"0117"}>0117</MenuItem>
          <MenuItem value={"0118"}>0118</MenuItem>
          <MenuItem value={"0119"}>0119</MenuItem>
          <MenuItem value={"011A"}>011A</MenuItem>
          <MenuItem value={"011B"}>011B</MenuItem>
          <MenuItem value={"011C"}>011C</MenuItem>
          <MenuItem value={"0120"}>0120</MenuItem>
          <MenuItem value={"0121"}>0121</MenuItem>
          <MenuItem value={"0122"}>0122</MenuItem>
          <MenuItem value={"0123"}>0123</MenuItem>
          <MenuItem value={"0124"}>0124</MenuItem>
          <MenuItem value={"0125"}>0125</MenuItem>
          <MenuItem value={"0126"}>0126</MenuItem>
          <MenuItem value={"0127"}>0127</MenuItem>
          <MenuItem value={"0128"}>0128</MenuItem>
          <MenuItem value={"0129"}>0129</MenuItem>
          <MenuItem value={"012A"}>012A</MenuItem>
          <MenuItem value={"012B"}>012B</MenuItem>
          <MenuItem value={"012F"}>012F</MenuItem>
          <MenuItem value={"0134"}>0134</MenuItem>
          <MenuItem value={"0135"}>0135</MenuItem>
          <MenuItem value={"0136"}>0136</MenuItem>
          <MenuItem value={"0137"}>0137</MenuItem>
          <MenuItem value={"0138"}>0138</MenuItem>
          <MenuItem value={"0139"}>0139</MenuItem>
          <MenuItem value={"013A"}>013A</MenuItem>
          <MenuItem value={"013B"}>013B</MenuItem>
          <MenuItem value={"0140"}>0140</MenuItem>
          <MenuItem value={"0144"}>0144</MenuItem>
          <MenuItem value={"0147"}>0147</MenuItem>
          <MenuItem value={"0148"}>0148</MenuItem>
          <MenuItem value={"0149"}>0149</MenuItem>
          <MenuItem value={"014A"}>014A</MenuItem>
          <MenuItem value={"014B"}>014B</MenuItem>
          <MenuItem value={"014C"}>014C</MenuItem>
          <MenuItem value={"015A"}>015A</MenuItem>
          <MenuItem value={"015D"}>015D</MenuItem>
          <MenuItem value={"015E"}>015E</MenuItem>
          <MenuItem value={"0160"}>0160</MenuItem>
          <MenuItem value={"016F"}>016F</MenuItem>
          <MenuItem value={"0171"}>0171</MenuItem>
          <MenuItem value={"0172"}>0172</MenuItem>
          <MenuItem value={"0173"}>0173</MenuItem>
          <MenuItem value={"0174"}>0174</MenuItem>
          <MenuItem value={"0175"}>0175</MenuItem>
          <MenuItem value={"0176"}>0176</MenuItem>
          <MenuItem value={"017C"}>017C</MenuItem>
          <MenuItem value={"0180"}>0180</MenuItem>
          <MenuItem value={"0187"}>0187</MenuItem>
          <MenuItem value={"018C"}>018C</MenuItem>
          <MenuItem value={"018E"}>018E</MenuItem>
          <MenuItem value={"0192"}>0192</MenuItem>
          <MenuItem value={"0198"}>0198</MenuItem>
          <MenuItem value={"0199"}>0199</MenuItem>
          <MenuItem value={"019A"}>019A</MenuItem>
          <MenuItem value={"019D"}>019D</MenuItem>
          <MenuItem value={"01A6"}>01A6</MenuItem>
          <MenuItem value={"0900"}>0900</MenuItem>
          <MenuItem value={"0908"}>0908</MenuItem>
          <MenuItem value={"0902"}>0902</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

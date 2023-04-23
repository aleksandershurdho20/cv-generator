import React from 'react'
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormHelperText from '@mui/material/FormHelperText';

export default function Dropdown({value,name,onChange,options,error,helperText}) {
  return (
    <>
    <Select
    // labelId="demo-simple-select-filled-label"
    name={name}
    fullWidth
    value={value ?? ""}
    onChange={onChange}
    error={error}
  >
    {options.map(option => <MenuItem value={option.value} key={option.value}>{option.title}</MenuItem>)}

    

  </Select>
   {error && <FormHelperText sx={{color:"red"}}>{helperText}</FormHelperText>}
    
    
    </>
  )
}

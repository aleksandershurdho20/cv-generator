import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function JobSearchInput({query,onChange,onClick}) {
  return (
    <Box 
        padding="20px"
        backgroundColor="#FFF"
        borderRadius="8px"
        width="550px"
        height="200px"
        marginBottom="15px"
    >
        <Typography variant="body1" color="black" fontWeight="600">
            Are you looking for a dream job?    
        </Typography>
        <Typography variant="body2" color="text.secondary" paddingTop="8px">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      <Box display="flex" alignContent="center" alignItems="center" marginTop="30px">
      <TextField  label="Kerko.." variant="outlined" sx={{width:"80%"}} size="small" value={query} onChange={onChange}  />
        <Button size="medium" variant="outlined" sx={{marginLeft:10} } onClick={onClick} >Kerko</Button>
      </Box>
    </Box>
  )
}

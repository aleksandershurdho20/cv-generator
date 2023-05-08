import { Button, Container,Grid,TextField } from '@mui/material'
import React from 'react'

export default function CompanyProfile({isInEditMode,data,handleChangeProfileFields,handleSubmit}) {
  return (
    <Container>
        <Grid container spacing={4} justifyContent="center">
            <Grid item md={9} sx={{background:"#FFF",margin:10,padding:10}}>
            <Grid container spacing={2}>


            </Grid>

                <Grid item md={12} sx={{marginBottom:2}}>
                    <label>Image</label>
                    <input type="file" name="image" value={data.image} onChange={handleChangeProfileFields}/>
                </Grid>
                <Grid item md={12}  sx={{marginBottom:2}}>
                    <TextField label="Emri*" fullWidth name="name" value={data.name} onChange={handleChangeProfileFields}/>
                </Grid>
                <Grid item md={12}  sx={{marginBottom:2}}>
                    <TextField label="Madhesia*" fullWidth name="size" value={data.size} onChange={handleChangeProfileFields}/>
                </Grid>
                <Grid item md={12}  sx={{marginBottom:2}}>
                    <TextField label="Vendodhja*" fullWidth name="location" value={data.location} onChange={handleChangeProfileFields}/>
                </Grid>
                <Grid item md={12}  sx={{marginBottom:2}}>
                    <TextField label="Industria*" fullWidth name="industry" value={data.industry} onChange={handleChangeProfileFields}/>
                </Grid>
                <Button variant="contained" onClick={handleSubmit}>{isInEditMode ? "Modifiko" : "Krijo"}</Button>
            </Grid>

        </Grid>
    </Container>
  )
}

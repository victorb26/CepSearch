import { useState } from "react";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from './Cep.module.css';


export default function Cep() {
  const [Cep, setCep] = useState([]);
  const [input, setInput] = useState();
  const url = `https://viacep.com.br/ws/${input}/json/`;

  return (
    <div className={styles.container1}>
      <h1>Descubra o endereço do seu CEP:</h1>
       <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Seu CEP aqui:" variant="outlined" onChange={(e) => setInput(e.target.value)}/>
    </Box>
      
    
      <Stack spacing={2} direction="row" >
      <Button variant="contained"
        onClick={() => {
          fetch(url)
            .then((res) => res.json())
            .then((res) => setCep([res]))
          console.log(Cep);
        }}
      >
        Pesquisar
      </Button>
      </Stack>
      
      {Cep.map((Cep, index) => {
        return (
          <div>
            <p className={styles.texto}>{Cep.logradouro}  {Cep.bairro} {Cep.localidade}/{Cep.uf} </p>
          </div>
        );
      })}
    
    </div>
  );
}
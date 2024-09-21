const axios = require('axios');

// Dirección on-chain que deseas consultar
const address = 'SP2C2G3A1KKQHP6BY9PW9W65GV21T34RK7D7RMS51';  // Reemplázala con la que necesites

// URL de la API para obtener información de la cuenta
const url = `https://stacks-node-api.mainnet.stacks.co/v1/address/${address}`;

// Hacer la solicitud a la API
axios.get(url)
  .then(response => {
    const data = response.data;
    console.log('Información de la cuenta:', data);
  })
  .catch(error => {
    console.error('Error al obtener la información de la cuenta:', error);
  });

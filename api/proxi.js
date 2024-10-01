import axios from 'axios';

export default async function handler(req, res) {
  try {
    // Realiza la solicitud a tu API de Google Cloud Functions
    const response = await axios.get('https://us-central1-felix-tech-production.cloudfunctions.net/competitors_rates');
    
    // Devuelve la respuesta al frontend
    res.status(200).json(response.data);
  } catch (error) {
    // Devuelve el error si la solicitud falla
    res.status(500).json({ error: 'Error fetching data' });
  }
}

import axios from 'axios';

export default async function handler(req, res) {
  try {
    const response = await axios.get('https://us-central1-felix-tech-production.cloudfunctions.net/competitors_rates');
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching data' });
  }
}

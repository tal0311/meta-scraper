import express from 'express';
import fetch from 'node-fetch';

const app = express();
const port = 3000;

app.use((req, res, next) => {
 res.header('Access-Control-Allow-Origin', '*');
 res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
 next();
});

app.get('/api/meta', async (req, res) => {
 const instagramUrl = req.query.url;

 try {
  const response = await fetch(instagramUrl);
  const html = await response.text();
  res.send(html);
 } catch (error) {
  console.error('Error:', error);
  res.status(500).send('Error fetching Instagram content.');
 }
});

app.listen(port, () => {
 console.log(`Server is running on port ${port}`);
});

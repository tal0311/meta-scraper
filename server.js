import express from 'express';
import axios from 'axios';


const app = express();
const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.get('/api/meta', async (req, res) => {
  const { url } = req.query;
  console.log('url:', url)
  try {
    const response = await axios.get(url);
    const html = response.data;
    console.debug('♠️ ~ file: server.js:20 ~ app.get ~ html:', html)

    // const response = await fetch(url);
    // const html = await response.text();
    // res.send(html);
    res.end()
  } catch (error) {
    console.error('Error:', error);
    res.status(500).send('Error fetching Instagram content.');
  }
});


// app.get('api/google', async (req, res) => {
//   const query = "vuejs";
//   const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;

//   fetch(url)
//     .then(response => response.text())
//     .then(html => {
//       const parser = new DOMParser();
//       const doc = parser.parseFromString(html, 'text/html');

//       const searchResults = [];
//       const resultElements = doc.querySelectorAll('div.tF2Cxc');

//       resultElements.forEach(resultElement => {
//         const title = resultElement.querySelector('h3').textContent;
//         const link = resultElement.querySelector('a').getAttribute('href');
//         const snippet = resultElement.querySelector('div.IsZvec').textContent;

//         searchResults.push({
//           title: title,
//           link: link,
//           snippet: snippet
//         });
//       });

//       const jsonResults = JSON.stringify(searchResults, null, 2);
//       return jsonResults
//     })
//     .catch(error => {
//       console.error('Error fetching search results:', error);
//     });

// })

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!doctype html>
    <html>
      <head>
        <meta charset="utf-8"/>
        <title>FP - Backend</title>
        <style>
          body { font-family: Arial, sans-serif; padding: 2rem; background:#f7f7f7; }
          .card { background:white; padding:2rem; border-radius:8px; box-shadow:0 2px 10px rgba(0,0,0,.08); max-width:700px; margin:auto; }
          h1 { margin-top:0; }
          p { margin:0.4rem 0; }
          .quote { margin-top:1rem; font-style:italic; color:#333; }
        </style>
      </head>
      <body>
        <div class="card">
          <h1>FP Submission</h1>
          <p><strong>Full name:</strong> Precious Grace Abion</p>
          <p><strong>Class section:</strong> BA4105 (example) </p>
          <p class="quote">“The only way to do great work is to love what you do.” — Steve Jobs</p>
          <hr/>
          <p>Deployed on Render: <em>replace-with-your-render-url-after-deploy</em></p>
        </div>
      </body>
    </html>
  `;
  res.send(html);
});

app.get('/api/info', (req, res) => {
  res.json({
    name: "Precious Grace Abion",
    class_section: "BA4105",
    quote: "The only way to do great work is to love what you do. — Steve Jobs"
  });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

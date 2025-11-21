const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>FP Submission</title>

      <!-- Google Fonts -->
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;600&display=swap" rel="stylesheet">

      <style>
        body {
          margin: 0;
          padding: 0;
          font-family: 'Poppins', sans-serif;
          background: linear-gradient(135deg, #4e73df, #1cc88a);
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #333;
        }

        .card {
          background: #ffffff;
          padding: 2.8rem;
          border-radius: 16px;
          width: 90%;
          max-width: 600px;
          box-shadow: 0px 8px 20px rgba(0, 0, 0, 0.15);
          text-align: center;
          animation: fadeIn 0.8s ease;
          transition: transform 0.3s ease;
        }

        .card:hover {
          transform: translateY(-5px);
        }

        h1 {
          margin-bottom: 1rem;
          font-size: 2rem;
          font-weight: 600;
          color: #2e59d9;
        }

        p {
          font-size: 1.1rem;
          margin: 0.4rem 0;
        }

        .quote {
          margin-top: 1.2rem;
          font-style: italic;
          color: #444;
          font-size: 1rem;
        }

        .footer {
          margin-top: 1.5rem;
          font-size: 0.9rem;
          color: #666;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      </style>
    </head>
    <body>

      <div class="card">
        <h1>Final Project Submission</h1>

        <p><strong>Full Name:</strong> Precious Grace Abion</p>
        <p><strong>Class Section:</strong> BA 4102</p>

        <p class="quote">“The only way to do great work is to love what you do.” — Steve Jobs</p>

        <div class="footer">
          <p>Deployed on Render</p>
        </div>
      </div>

    </body>
    </html>
  `;
  res.send(html);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

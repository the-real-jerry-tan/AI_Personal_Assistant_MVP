
/*
 * AI-Powered Personal Assistant MVP
 * Copyright (c) 2024, Your Name
 * 
 * This is the API endpoint that handles requests to the OpenAI API. It takes the user's query 
 * and sends it to OpenAI's GPT model, returning the response.
 */

export default async function handler(req, res) {
  const { query } = req.body;  // Extract user query from the request body

  // Make a POST request to OpenAI's GPT API
  const response = await fetch('https://api.openai.com/v1/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,  // Secure API key handling
    },
    body: JSON.stringify({
      model: 'text-davinci-003',  // GPT-3 model used
      prompt: query,  // User's query sent to GPT model
      max_tokens: 100,  // Limiting the number of tokens in the response
    }),
  });

  const data = await response.json();
  res.status(200).json({ result: data.choices[0].text });  // Send back the response from GPT
}

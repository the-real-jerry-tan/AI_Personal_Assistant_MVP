
/*
 * AI-Powered Personal Assistant MVP
 * Copyright (c) 2024, Jerry Tan
 * 
 * This is the main entry point of the front-end where user interaction happens. 
 * Bootstrap is used to enhance the UI, and OpenAI's API is integrated to process natural language input.
 */

import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Home() {
  // State to store user input and response from AI
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  // Function to handle form submission and API request
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Fetch request to API endpoint with user query
    const res = await fetch('/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ query }),
    });

    const data = await res.json();
    // Store AI response in state
    setResponse(data.result);
  };

  return (
    <div className="container">
      <h1 className="text-center mt-5">AI-Powered Personal Assistant</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Ask me anything..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Ask</button>
      </form>
      <div className="card mt-4">
        <div className="card-body">
          <h5>Response:</h5>
          <p>{response}</p>
        </div>
      </div>
    </div>
  );
}

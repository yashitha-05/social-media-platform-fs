import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const About = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const feedbacks = JSON.parse(localStorage.getItem("admiree_feedback") || "[]");
    feedbacks.push({ name, email, message, ts: Date.now() });
    localStorage.setItem("admiree_feedback", JSON.stringify(feedbacks));
    setSent(true);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="max-w-3xl mx-auto px-6">
      <h1 className="text-2xl font-bold mb-2">About Admiree</h1>
      <p className="text-gray-600 mb-8">Admiree is a positive pulse — share your mood and lift someone’s day with small, thoughtful moments.</p>

      <h2 className="text-xl font-semibold mb-3">Contact</h2>
      <p className="mb-6">Email: support@admiree.example • Instagram: @admireeapp</p>

      <h2 className="text-xl font-semibold mb-3">Feedback</h2>
      {sent && <div className="mb-3 text-green-600">Thanks for your feedback!</div>}
      <form onSubmit={handleSubmit} className="space-y-3">
        <TextField fullWidth size="small" label="Name" value={name} onChange={(e)=>setName(e.target.value)} />
        <TextField fullWidth size="small" label="Email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
        <TextField fullWidth multiline rows={4} label="Message" value={message} onChange={(e)=>setMessage(e.target.value)} />
        <Button type="submit" variant="contained" sx={{ bgcolor:'#e91e63', borderRadius:'24px' }}>Send Feedback</Button>
      </form>
    </div>
  );
};

export default About;



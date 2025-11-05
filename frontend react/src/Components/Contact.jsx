import React, { useEffect, useState } from 'react';
import { Button, TextField, Avatar, Rating } from '@mui/material';
import { API_BASE_URL } from '../Config/apiConfig';
import axios from 'axios';

const TeamMember = ({ name, role, img }) => (
  <div className="bg-white/60 dark:bg-[#0F1720] rounded-lg p-4 text-center shadow">
    <Avatar src={img} sx={{ width: 72, height: 72, mx: 'auto', mb: 2 }} />
    <div className="font-bold">{name}</div>
    <div className="text-sm opacity-80">{role}</div>
  </div>
);

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [rating, setRating] = useState(0);
  const [feedbacks, setFeedbacks] = useState([]);
  const [sending, setSending] = useState(false);

  const fetchFeedbacks = async () => {
    try {
      const res = await axios.get(`${API_BASE_URL}/api/feedback`);
      setFeedbacks(res.data || []);
    } catch (err) {
      console.error('Failed to load feedbacks', err);
    }
  };

  useEffect(() => {
    fetchFeedbacks();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    setSending(true);
    try {
      const payload = { name, email, message, rating: rating || null };
      await axios.post(`${API_BASE_URL}/api/feedback`, payload);
      setName(''); setEmail(''); setMessage('');
      setRating(0);
      await fetchFeedbacks();
    } catch (err) {
      console.error('Failed to send feedback', err);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>

      <section className="grid md:grid-cols-3 gap-6 mb-10">
        <TeamMember name="Navi" role="Product Lead" img="https://static.vecteezy.com/system/resources/previews/000/242/494/non_2x/vector-female-developer.jpg" />
        <TeamMember name="Devi" role="Fullstack Developer" img="https://img.freepik.com/premium-vector/software-developer-vector-illustration-communication-technology-cyber-security_1249867-5464.jpg?semt=ais_hybrid&w=740&q=80" />
        <TeamMember name="Yashitha" role="Designer" img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXjH7VTveUu2mYOzPrmNId0NeWMQeQMLtadg&s" />
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Send us feedback</h2>
        <form onSubmit={handleSubmit} className="space-y-3 max-w-2xl">
          <TextField fullWidth size="small" label="Name" value={name} onChange={e=>setName(e.target.value)} />
          <TextField fullWidth size="small" label="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <TextField fullWidth multiline rows={4} size="small" label="Message" value={message} onChange={e=>setMessage(e.target.value)} />
          <div className="flex items-center gap-3">
            <div className="text-sm">Your rating:</div>
            <Rating name="rating" value={rating} onChange={(e, val) => setRating(val)} />
          </div>
          <Button type="submit" variant="contained" disabled={sending} sx={{ bgcolor: '#e91e63' }}>{sending ? 'Sending...' : 'Submit feedback'}</Button>
        </form>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Community feedback</h2>
        <div className="space-y-4">
          {feedbacks.length === 0 && <div className="text-gray-500">No feedback yet.</div>}
          {feedbacks.map(f => (
            <div key={f.id} className="p-4 rounded border bg-white dark:bg-[#0F1720]">
              <div className="flex items-center justify-between mb-2">
                <div>
                  <div className="font-bold">{f.name || 'Anonymous'}</div>
                  <div className="text-xs opacity-70">{new Date(f.createdAt).toLocaleString()}</div>
                </div>
                <div className="text-sm opacity-70">{f.email}</div>
              </div>
              <div className="text-gray-800 dark:text-gray-100">{f.message}</div>
              <div className="mt-2">
                <Rating value={f.rating || 0} readOnly size="small" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Contact;

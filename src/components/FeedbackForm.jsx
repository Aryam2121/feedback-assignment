import { useState } from 'react';

export default function FeedbackForm({ onSubmitted }) {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    if (!formData.name || !formData.email || !formData.message) {
      return setError('All fields are required!');
    }
    setLoading(true);
    const res = await fetch('/.netlify/functions/submit-feedback', {
      method: 'POST',
      body: JSON.stringify(formData),
    });
    const result = await res.json();
    if (res.ok) {
      onSubmitted();
      setFormData({ name: '', email: '', message: '' });
    } else {
      setError(result.error || 'Submission failed');
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg mx-auto space-y-4 p-4 bg-white shadow-md rounded-md">
      <input name="name" type="text" placeholder="Full Name" value={formData.name} onChange={handleChange}
        className="w-full p-2 border rounded" />
      <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange}
        className="w-full p-2 border rounded" />
      <textarea name="message" placeholder="Your feedback..." value={formData.message} onChange={handleChange}
        className="w-full p-2 border rounded" />
      {error && <p className="text-red-500">{error}</p>}
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700" disabled={loading}>
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
}

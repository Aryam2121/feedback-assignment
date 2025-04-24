import { useEffect, useState } from 'react';

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    fetch('/.netlify/functions/get-feedbacks')
      .then(res => res.json())
      .then(data => setFeedbacks(data.feedbacks || []));
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-6">
      {feedbacks.map((fb, i) => (
        <div key={i} className="p-4 mb-2 border rounded bg-gray-50">
          <h4 className="font-bold">{fb.name} ({fb.email})</h4>
          <p>{fb.message}</p>
          <small className="text-gray-500">{new Date(fb.timestamp).toLocaleString()}</small>
        </div>
      ))}
    </div>
  );
}

import { useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import FeedbackList from './components/FeedbackList';

function App() {
  const [viewFeedback, setViewFeedback] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800 p-6">
      <h1 className="text-3xl text-center font-bold mb-6">Feedback Collector</h1>
      <div className="text-center mb-4">
        <button onClick={() => setViewFeedback(!viewFeedback)} className="bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700">
          {viewFeedback ? 'Hide Feedbacks' : 'View Submitted Feedback'}
        </button>
      </div>
      {!viewFeedback && <FeedbackForm onSubmitted={() => setSubmitted(!submitted)} />}
      {viewFeedback && <FeedbackList />}
      <footer className="text-center text-sm text-gray-500 mt-10">
        Built by Aryaman Gupta | April 2025
      </footer>
    </div>
  );
}

export default App;

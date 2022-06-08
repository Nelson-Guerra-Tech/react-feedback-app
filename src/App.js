import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';

// data
import FeedbackData from './data/FeedbackData';
// usestate
import { useState } from 'react';

const App = () => {
  const [feedback, setFeedback] = useState(FeedbackData);

  // delete feedback
  const deleteFeedback = (id) => {
    if (window.confirm('Are you sure you want to delete?')) {
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };

  // JSX
  return (
    // this is a fragment, it acts as a div in html but it is not a div
    // it lets us add elements outside the App div
    <>
      <Header />
      <div className='container'>
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
      </div>
    </>
  );
};

// exporting the app to the html root div
export default App;

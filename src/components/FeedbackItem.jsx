import { FaTimes } from 'react-icons/fa';
import { useContext } from 'react';

import PropTypes from 'prop-types';
import Card from './shared/Card';
import FeedbackContext from '../context/FeedbackContext';

export default function FeedbackItem({ item }) {
  // useState and how to use it
  // the first parameter is the name of the state, and the
  // second is the name of the function for the state
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('This is an example of a feedback item');
  const { deleteFeedback } = useContext(FeedbackContext);

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => deleteFeedback(item.id)} className='close'>
        <FaTimes color='purple'></FaTimes>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

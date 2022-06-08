import { FaTimes } from 'react-icons/fa';

import PropTypes from 'prop-types';
import Card from './shared/Card';

export default function FeedbackItem({ item, handleDelete }) {
  // useState and how to use it
  // the first parameter is the name of the state, and the
  // second is the name of the function for the state
  //   const [rating, setRating] = useState(7);
  //   const [text, setText] = useState('This is an example of a feedback item');

  return (
    <Card>
      <div className='num-display'>{item.rating}</div>
      <button onClick={() => handleDelete(item.id)} className='close'>
        <FaTimes color='purple'></FaTimes>
      </button>
      <div className='text-display'>{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: PropTypes.object.isRequired,
};

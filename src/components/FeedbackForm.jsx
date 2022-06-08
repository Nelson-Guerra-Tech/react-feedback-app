// usestate for the button
import { useState } from 'react';

// importing card component
import Card from './shared/Card';
import Button from './shared/Button';

export default function FeedbackForm() {
  // using useState in the app
  const [text, setText] = useState('');

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  return (
    <Card>
      <form>
        <h2>How would you rate your service with us?</h2>

        {/* todo - rating select component */}
        <div className='input-group'>
          <input
            onChange={handleTextChange}
            type='text'
            placeholder='right a review'
            value={text}
          />
          <Button type='submit'>Send</Button>
        </div>
      </form>
    </Card>
  );
}

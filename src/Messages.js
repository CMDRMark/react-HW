import React, { useEffect, useState } from 'react';
import './Messages.css';

const Messages = props => {
  const [messageList, setMessageList] = useState([
    {
      author: '',
      message: ''
    }
  ]);
  const [message, setMessage] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].author === 'User') {
      const newMessage = {
        author: 'Robot',
        message: 'This is an automated response.'
      };
      setMessageList([...messageList, newMessage]);
    }
  }, [messageList]);

  const handleSubmit = event => {
    event.preventDefault();
    const newMessage = {
      author,
      message
    };
    setMessageList([...messageList, newMessage]);
    setMessage('');
    setAuthor('');
  };

  const handleChange = event => {
    setMessage(event.target.value);
  };

  const handleAuthorChange = event => {
    setAuthor(event.target.value);
  };

  return (
    <div>
      {props.prompt}
      {messageList.map((message, index) => (
        <div key={index}>
          <p>{message.author}: {message.message}</p>
        </div>
      ))}
      <form className="form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Author"
          value={author}
          onChange={handleAuthorChange}
        />
        <input
          type="text"
          placeholder="Message"
          value={message}
          onChange={handleChange}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Messages;

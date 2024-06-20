import React from 'react';

const JokeForm = ({ handleSubmit }) => {
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text" placeholder="Add a joke" />
      <button type="submit">Add Joke</button>
    </form>
  );
};

export default JokeForm;

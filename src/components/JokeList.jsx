import React from 'react';

const JokeList = ({ jokes, updateRate }) => {
  return (
    <div className="jokes">
      {jokes
        .sort((a, b) => b.rate - a.rate)
        .map(joke => (
          <div key={joke.id} className="joke">
            <div className="joke-text">{joke.joke}</div>
            <div className="text">{joke.rate}</div>
            <div className="joke-buttons">
              <button onClick={() => updateRate(joke.id, joke.rate + 1)}>👍</button>
              <button onClick={() => updateRate(joke.id, joke.rate - 1)}>👎</button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default JokeList;

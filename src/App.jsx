import React, { useReducer } from 'react';
import './App.scss';
import JokeForm from './components/JokeForm';
import JokeList from './components/JokeList';

// Define action types
const ADD_JOKE = 'ADD_JOKE';
const UPDATE_RATE = 'UPDATE_RATE';

// Reducer function to manage state
function reducer(state, action) {
  switch (action.type) {
    case ADD_JOKE:
      return {
        jokes: [...state.jokes, action.payload],
      };
    case UPDATE_RATE:
      return {
        jokes: state.jokes.map(joke =>
          joke.id === action.payload.id ? { ...joke, rate: action.payload.rate } : joke
        ),
      };
    default:
      return state;
  }
}

// Initial state
const initialState = {
  jokes: [
    {
      id: 1,
      joke: 'What do you call a very small valentine? A valen-tiny!',
      rate: 3,
    },
    {
      id: 2,
      joke: 'What did the dog say when he rubbed his tail on the sandpaper? Rough, rough!',
      rate: 2,
    },
    {
      id: 3,
      joke: 'A termite walks into the bar and says, "Where is the bar tender?"',
      rate: 1,
    },
    {
      id: 4,
      joke: 'Why did the scarecrow win an award? Because he was outstanding in his field!',
      rate: 0,
    },
    {
      id: 5,
      joke: 'Why was the math book sad? Because it had too many problems.',
      rate: 0,
    },
  ],
};

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit = e => {
    e.preventDefault();
    const newJoke = {
      id: state.jokes.length + 1,
      joke: e.target[0].value,
      rate: 0,
    };
    dispatch({ type: ADD_JOKE, payload: newJoke });
    e.target.reset();
  };

  const updateRate = (id, rate) => {
    dispatch({ type: UPDATE_RATE, payload: { id, rate } });
  };

  return (
    <div className="container">
      <h2>Jokes for you 💀</h2>
      <JokeForm handleSubmit={handleSubmit} />
      <JokeList jokes={state.jokes} updateRate={updateRate} />
    </div>
  );
}

export default App;

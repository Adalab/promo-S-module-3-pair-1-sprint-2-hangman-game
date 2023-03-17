import { useEffect, useState } from 'react';

// api
import getWordFromApi from '../services/api';
// styles
import '../styles/App.scss';
import '../styles/layout/letters.scss';
// 
import Header from './Header';
import Dummy from './Dummy';
import Solution from './Solution';
import Errorletters from './Errorletters';
import Form from './Form';
import Footer from './Footer'; 
import Instructions from './Instructions';
import Options from './Options';

function App() {
  const [word, setWord] = useState('');
  const [userLetters, setUserLetters] = useState([]);
  const [lastLetter, setLastLetter] = useState('');

  useEffect(() => {
    getWordFromApi().then((word) => {
      setWord(word);
    });
  }, []);

  // events
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const getNumberOfErrors = () => {
    const errorLetters = userLetters.filter(
      (letter) => word.includes(letter) === false
    );
    return errorLetters.length;
  };

  const renderSolutionLetters = () => {
    const wordLetters = word.split('');
    return wordLetters.map((letter, index) => {
      const exists = userLetters.includes(letter.toLocaleLowerCase());
      return (
        <li key={index} className='letter'>
          {exists ? letter : ''}
        </li>
      );
    });
  };

  const renderErrorLetters = () => {
    const errorLetters = userLetters.filter(
      (letter) =>
        word.toLocaleLowerCase().includes(letter.toLocaleLowerCase()) === false
    );
    return errorLetters.map((letter, index) => {
      return (
        <li key={index} className='letter'>
          {letter}
        </li>
      );
    });
  };

  const handleLastLetter = (value) => {
    value = value.toLocaleLowerCase();
    setLastLetter(value);

    if (!userLetters.includes(value)) {
      userLetters.push(value);
      setUserLetters([...userLetters]);
    }
  };

  return (
    <div className='page'>
       <Header/>
     
      <main className='main'>
        <Instructions/>

        <section>
          <Solution renderSolution={renderSolutionLetters}/>

          <Errorletters ErrorLetters={renderErrorLetters}/>

          <Form 
          handleSubmit={handleSubmit} 
          lastLetter={lastLetter}
          handleLastLetter ={handleLastLetter}
           />
        </section>
        <Dummy numError={getNumberOfErrors()}/>
      </main>
     <Footer/>
    </div>
  );
}

export default App;
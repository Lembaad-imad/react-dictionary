import Search from './Search'
import Result  from './Result';
import React , {useState} from 'react'

function App() {
 
  const [inputValue, setInputValue] = useState('');
  const [display, setDisplay] = useState('none');
  const [sample, setSample] = useState("Sample");
  const [text, setText] = useState("pos");
  const [defination, setdefination] = useState("");
  const [example, setexample] = useState("");
  const url_api = `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
  

  const handleValue = (event) => {
    setInputValue(event.target.value)
  }
  const handleBtnValue = async () => {
    try {
    const dataword = await fetch(url_api);
    if (dataword.ok) {
    const responst = await dataword.json();
    setSample(inputValue);
    const newTextArray = responst.map((value) => {
      value.phonetics.map((e) => {
        if (e.text) {
          setText(e.text);
        }
      });
      return value; 
    });
    newTextArray.forEach((entry) => {
      entry.meanings.forEach((meaning) => {
        meaning.definitions.forEach((definition) => {
          if (definition.definition) {
            setdefination(definition.definition);
          }
          if (definition.example) {
            setexample(definition.example);
          }
        });
      });
    });
    setDisplay('block');
  } else {
    // Word not found in the dictionary
    setSample('Word not found');
    setText('');
    setdefination('');
    setexample('');
    
  }
} catch (error) {
  console.error('Error fetching data:', error);
  
}

  }
  return (
   <main>
    <div className="container" >
      <Search inputValue={inputValue} handleBtnValue={handleBtnValue} handleValue={handleValue} />
      <Result display={{ display }} sample={sample} 
        text={text}
        defination={defination}
        example={example}
      />
    </div>
   </main>
  );
}

export default App;

import './App.css';
import { atom, selector } from 'recoil';
import TextInput from './components/TextInput';
import CharacterCount from './components/CharacterCount';

export const textState = atom({
  key: 'textState', // unique ID (with respect to other atoms/selectors)
  default: '', // default value (aka initial value)
});

export const charCountState = selector({
  key: 'charCountState', // unique ID (with respect to other atoms/selectors)
  get: ({get}) => {
    const text = get(textState);

    return text.length;
  },
});

function App() {
  return (
    <div style={{ padding: 16}}>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default App;

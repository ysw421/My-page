import './App.css';
import Title from './title';
import MainText from './mainText';
import Contact from './contact';
import '../font.css';
import { memo } from 'react';

function App() {
  const MemorizedTitle = memo(Title);
  const MemorizedMainText = memo(MainText);
  const MemorizedContact = memo(Contact);
  return (
    <div>
      <MemorizedTitle />
      <MemorizedMainText />
      <MemorizedContact />
    </div>
  );
}

export default App;

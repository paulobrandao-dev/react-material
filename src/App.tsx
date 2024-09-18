import { Button } from './lib/main';

import './App.css';

function App() {
  return (
    <>
      <section id="button">
        <hgroup>
          <h2>Material Button</h2>
        </hgroup>
        <div className="preview">
          <Button variant="elevated">Elevated</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </div>
      </section>
    </>
  );
}

export default App;

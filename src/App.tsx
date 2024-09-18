import { Button, Font } from './lib/main';

import './App.css';

function App() {
  return (
    <>
      <section id="typography">
        <hgroup>
          <Font as="h2" variant="display" scale="large">
            Font
          </Font>
          <Font as="p" variant="headline" scale="small">
            Typography helps make writing legible and beautiful
          </Font>
          <Font
            as="a"
            href="https://m3.material.io/styles/typography/overview"
            target="_blank"
            rel="nofollow"
            variant="label"
            scale="small"
            color="primary"
          >
            Reference
          </Font>
        </hgroup>
        <div className="showcase column">
          <Font variant="display" scale="large" color="secondary">
            Display large
          </Font>
          <Font variant="display" scale="medium" color="secondary">
            Display medium
          </Font>
          <Font variant="display" scale="small" color="secondary">
            Display small
          </Font>
          <Font variant="headline" scale="large" color="secondary">
            Headline large
          </Font>
          <Font variant="headline" scale="medium" color="secondary">
            Headline medium
          </Font>
          <Font variant="headline" scale="small" color="secondary">
            Headline small
          </Font>
          <Font variant="title" scale="large" color="secondary">
            Title large
          </Font>
          <Font variant="title" scale="medium" color="secondary">
            Title medium
          </Font>
          <Font variant="title" scale="small" color="secondary">
            Title small
          </Font>
          <Font variant="body" scale="large" color="secondary">
            Body large
          </Font>
          <Font variant="body" scale="medium" color="secondary">
            Body medium
          </Font>
          <Font variant="body" scale="small" color="secondary">
            Body small
          </Font>
          <Font variant="label" scale="large" color="secondary">
            Label large
          </Font>
          <Font variant="label" scale="medium" color="secondary">
            Label medium
          </Font>
          <Font variant="label" scale="small" color="secondary">
            Label small
          </Font>
        </div>
      </section>
      <section id="button">
        <hgroup>
          <Font as="h2" variant="display" scale="large">
            Button
          </Font>
          <Font as="p" variant="headline" scale="small">
            Common buttons prompt most actions in a UI
          </Font>
          <Font
            as="a"
            href="https://m3.material.io/components/buttons/overview"
            target="_blank"
            rel="nofollow"
            variant="label"
            scale="small"
            color="primary"
          >
            Reference
          </Font>
        </hgroup>
        <Font as="h3" variant="title" scale="large" color="secondary">
          Enabled
        </Font>
        <div className="showcase">
          <Button variant="elevated">Elevated</Button>
          <Button variant="filled">Filled</Button>
          <Button variant="tonal">Tonal</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="text">Text</Button>
        </div>
        <Font as="h3" variant="title" scale="large" color="secondary">
          Disabled
        </Font>
        <div className="showcase">
          <Button variant="elevated" disabled>
            Elevated
          </Button>
          <Button variant="filled" disabled>
            Filled
          </Button>
          <Button variant="tonal" disabled>
            Tonal
          </Button>
          <Button variant="outlined" disabled>
            Outlined
          </Button>
          <Button variant="text" disabled>
            Text
          </Button>
        </div>
      </section>
    </>
  );
}

export default App;

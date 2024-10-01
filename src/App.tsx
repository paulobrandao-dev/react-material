import { AnchorHTMLAttributes, useEffect, useState } from 'react';
import SectionActions from './Actions';
import {
  Appbar,
  Flexbox,
  IconButton,
  MaterialSymbols,
  Navlink,
  Navrail,
} from './lib';
import { toggleThemeColorScheme } from './lib/utils';
import SectionStyles from './Styles';

import './App.css';

const HashLink = ({
  hash,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { hash: string }) => {
  return <a href={`/#${hash}`} {...props} />;
};

function App() {
  const [hash, setHash] = useState<string>('#home');
  const [theme, setTheme] = useState<string>(
    sessionStorage.getItem('theme') || '',
  );

  useEffect(() => {
    const handleHashchange = () => {
      setHash(location.hash);
    };
    window.addEventListener('hashchange', handleHashchange);
    return () => {
      window.removeEventListener('hashchange', handleHashchange);
    };
  }, []);

  useEffect(() => {
    const themeByPrefers = window.matchMedia('(prefers-color-scheme: dark)')
      .matches
      ? 'dark'
      : 'light';
    const initialTheme = sessionStorage.getItem('theme') ?? themeByPrefers;
    sessionStorage.setItem('theme', initialTheme);
    setTheme(initialTheme);
  }, []);

  return (
    <>
      <Navrail
        startNode={
          <IconButton aria-label="Open menu">
            <MaterialSymbols icon="menu" />
          </IconButton>
        }
        endNode={
          <IconButton
            variant="outlined"
            onClick={() => {
              toggleThemeColorScheme(newTheme => {
                setTheme(newTheme);
                sessionStorage.setItem('theme', newTheme);
              });
            }}
            aria-label="Color scheme"
          >
            <MaterialSymbols
              icon={theme === 'dark' ? 'dark_mode' : 'light_mode'}
            />
          </IconButton>
        }
      >
        <Navlink
          as={HashLink}
          hash="home"
          label="Home"
          icon={<MaterialSymbols icon="home" />}
          active={hash === '#home'}
        />
        <Navlink
          as={HashLink}
          hash="styles"
          label="Styles"
          icon={<MaterialSymbols icon="palette" />}
          active={hash === '#styles'}
        />
        <Navlink
          as={HashLink}
          hash="actions"
          label="Actions"
          icon={<MaterialSymbols icon="left_click" />}
          active={hash === '#actions'}
        />
        <Navlink
          as={HashLink}
          hash="feedback"
          label="Feedback"
          icon={<MaterialSymbols icon="feedback" />}
          active={hash === '#feedback'}
        />
      </Navrail>
      <Flexbox as="main" flexDirection="column" alignItems="stretch">
        <Appbar
          variant="small"
          headline="React Material"
          startNode={
            <img
              src="/react-material.png"
              alt="Logo React Material"
              id="logo_appbar"
            />
          }
        />
        <SectionStyles hash={hash} />
        <SectionActions hash={hash} />
      </Flexbox>
    </>
  );
}

export default App;

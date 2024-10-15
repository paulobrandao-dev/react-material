import { AnchorHTMLAttributes, useEffect, useState } from 'react';
import SectionActions from './Actions';
import './App.css';
import {
  Appbar,
  Box,
  IconButton,
  MaterialSymbols,
  Navbar,
  Navdrawer,
  NavdrawerHeadline,
  Navlink,
  Navrail,
  useMediaQuery,
  usePopoverControl,
} from './lib';
import { toggleThemeColorScheme } from './lib/utils';
import SectionStyles from './Styles';

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
  const media = useMediaQuery();
  const { showPopover, hidePopover } = usePopoverControl();

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
          <IconButton
            aria-label="Open menu"
            onClick={() => showPopover('navdrawer')}
          >
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
        hideOnLarge
      >
        <Navlink
          as={HashLink}
          hash="home"
          label="Home"
          icon={<MaterialSymbols icon="home" filled={hash === '#home'} />}
          active={hash === '#home'}
        />
        <Navlink
          as={HashLink}
          hash="styles"
          label="Styles"
          icon={<MaterialSymbols icon="palette" filled={hash === '#styles'} />}
          active={hash === '#styles'}
        />
        <Navlink
          as={HashLink}
          hash="actions"
          label="Actions"
          icon={
            <MaterialSymbols icon="left_click" filled={hash === '#actions'} />
          }
          active={hash === '#actions'}
        />
        <Navlink
          as={HashLink}
          hash="feedback"
          label="Feedback"
          icon={
            <MaterialSymbols icon="feedback" filled={hash === '#feedback'} />
          }
          active={hash === '#feedback'}
        />
      </Navrail>
      <Navdrawer id="navdrawer" standard>
        <Navlink
          as={HashLink}
          hash="home"
          label="Home"
          icon={<MaterialSymbols icon="home" filled={hash === '#home'} />}
          active={hash === '#home'}
          onClick={() => hidePopover('navdrawer')}
        />
        <NavdrawerHeadline text="Components" divider />
        <Navlink
          as={HashLink}
          hash="styles"
          label="Styles"
          icon={<MaterialSymbols icon="palette" filled={hash === '#styles'} />}
          active={hash === '#styles'}
          onClick={() => hidePopover('navdrawer')}
        />
        <Navlink
          as={HashLink}
          hash="actions"
          label="Actions"
          icon={
            <MaterialSymbols icon="left_click" filled={hash === '#actions'} />
          }
          active={hash === '#actions'}
          onClick={() => hidePopover('navdrawer')}
        />
        <Navlink
          as={HashLink}
          hash="feedback"
          label="Feedback"
          icon={
            <MaterialSymbols icon="feedback" filled={hash === '#feedback'} />
          }
          active={hash === '#feedback'}
          onClick={() => hidePopover('navdrawer')}
        />
        <NavdrawerHeadline text="Hooks" divider />
        <Navlink
          as={HashLink}
          hash="hook-media-query"
          label="useMediaQuery"
          icon={
            <MaterialSymbols
              icon="responsive_layout"
              filled={hash === '#hook-media-query'}
            />
          }
          active={hash === '#hook-media-query'}
          onClick={() => hidePopover('navdrawer')}
        />
        <Navlink
          as={HashLink}
          hash="hook-navdrawer-control"
          label="useNavdrawerControl"
          icon={
            <MaterialSymbols
              icon="side_navigation"
              filled={hash === '#hook-navdrawer-control'}
            />
          }
          active={hash === '#hook-navdrawer-control'}
          onClick={() => hidePopover('navdrawer')}
        />
        <NavdrawerHeadline text="Utils" divider />
        <Navlink
          as={HashLink}
          hash="utils-theme"
          label="Theme utils"
          icon={
            <MaterialSymbols icon="style" filled={hash === '#utils-theme'} />
          }
          active={hash === '#utils-theme'}
          onClick={() => hidePopover('navdrawer')}
        />
      </Navdrawer>
      <Box as="main" display="flex" flexDirection="column" alignItems="stretch">
        <Appbar
          variant="small"
          headline="React Material"
          fluid
          startNode={
            <img
              src="/react-material.png"
              alt="Logo React Material"
              id="logo_appbar"
            />
          }
          sticky
          endNode={
            media.isCompact || media.isGreaterThanExpanded ? (
              <IconButton
                variant="standard"
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
            ) : undefined
          }
        />
        <article hidden={hash !== '#home'} />
        <SectionStyles hash={hash} />
        <SectionActions hash={hash} />
      </Box>
      <Navbar>
        <Navlink
          as={HashLink}
          hash="home"
          label="Home"
          icon={<MaterialSymbols icon="home" filled={hash === '#home'} />}
          active={hash === '#home'}
        />
        <Navlink
          as={HashLink}
          hash="styles"
          label="Styles"
          icon={<MaterialSymbols icon="palette" filled={hash === '#styles'} />}
          active={hash === '#styles'}
        />
        <Navlink
          as={HashLink}
          hash="actions"
          label="Actions"
          icon={
            <MaterialSymbols icon="left_click" filled={hash === '#actions'} />
          }
          active={hash === '#actions'}
        />
        <Navlink
          as={HashLink}
          hash="feedback"
          label="Feedback"
          icon={
            <MaterialSymbols icon="feedback" filled={hash === '#feedback'} />
          }
          active={hash === '#feedback'}
        />
      </Navbar>
    </>
  );
}

export default App;

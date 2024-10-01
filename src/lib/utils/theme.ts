import {
  argbFromHex,
  hexFromArgb,
  themeFromSourceColor,
} from '@material/material-color-utilities';

type ThemeProps = {
  seedColor: string;
  colorScheme: 'light' | 'dark';
  font?:
    | {
        title: string;
        content: string;
        code?: string;
      }
    | false;
};

export function applyThemeOnHtmlStyleTag({
  seedColor,
  colorScheme,
  font,
}: ThemeProps) {
  const theme = themeFromSourceColor(argbFromHex(seedColor)).schemes[
    colorScheme
  ];
  const fonts =
    font === false
      ? {}
      : ({
          '--font-title': font?.title ?? 'sans-serif',
          '--font-content': font?.content ?? 'sans-serif',
          '--font-code': font?.code ?? 'monospace',
        } as React.CSSProperties);

  const elevation =
    colorScheme === 'light'
      ? ({
          '--elevation-1':
            '0px 1px 3px 1px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
          '--elevation-2':
            '0px 2px 6px 2px rgba(0, 0, 0, 0.15), 0px 1px 2px 0px rgba(0, 0, 0, 0.3)',
          '--elevation-3':
            '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
          '--elevation-4':
            '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
          '--elevation-5':
            '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
        } as React.CSSProperties)
      : ({
          '--elevation-1':
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 1px 3px 1px rgba(0, 0, 0, 0.15)',
          '--elevation-2':
            '0px 1px 2px 0px rgba(0, 0, 0, 0.3), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
          '--elevation-3':
            '0px 1px 3px 0px rgba(0, 0, 0, 0.3), 0px 4px 8px 3px rgba(0, 0, 0, 0.15)',
          '--elevation-4':
            '0px 2px 3px 0px rgba(0, 0, 0, 0.3), 0px 6px 10px 4px rgba(0, 0, 0, 0.15)',
          '--elevation-5':
            '0px 4px 4px 0px rgba(0, 0, 0, 0.3), 0px 8px 12px 6px rgba(0, 0, 0, 0.15)',
        } as React.CSSProperties);

  return {
    ...fonts,
    ...elevation,
    '--color-seed': seedColor,
    '--color-scheme': colorScheme,
    '--color-primary': hexFromArgb(theme.primary),
    '--color-on-primary': hexFromArgb(theme.onPrimary),
    '--color-primary-container': hexFromArgb(theme.primaryContainer),
    '--color-on-primary-container': hexFromArgb(theme.onPrimaryContainer),
    '--color-secondary': hexFromArgb(theme.secondary),
    '--color-on-secondary': hexFromArgb(theme.onSecondary),
    '--color-secondary-container': hexFromArgb(theme.secondaryContainer),
    '--color-on-secondary-container': hexFromArgb(theme.onSecondaryContainer),
    '--color-tertiary': hexFromArgb(theme.tertiary),
    '--color-on-tertiary': hexFromArgb(theme.onTertiary),
    '--color-tertiary-container': hexFromArgb(theme.tertiaryContainer),
    '--color-on-tertiary-container': hexFromArgb(theme.onTertiaryContainer),
    '--color-error': hexFromArgb(theme.error),
    '--color-on-error': hexFromArgb(theme.onError),
    '--color-error-container': hexFromArgb(theme.errorContainer),
    '--color-on-error-container': hexFromArgb(theme.onErrorContainer),
    '--color-background': hexFromArgb(theme.background),
    '--color-on-background': hexFromArgb(theme.onBackground),
    '--color-surface': hexFromArgb(theme.surface),
    '--color-on-surface': hexFromArgb(theme.onSurface),
    '--color-surface-variant': hexFromArgb(theme.surfaceVariant),
    '--color-on-surface-variant': hexFromArgb(theme.onSurfaceVariant),
    '--color-inverse-surface': hexFromArgb(theme.inverseSurface),
    '--color-on-inverse-surface': hexFromArgb(theme.inverseOnSurface),
    '--color-inverse-primary': hexFromArgb(theme.inversePrimary),
    '--color-outline': hexFromArgb(theme.outline),
    '--color-outline-variant': hexFromArgb(theme.outlineVariant),
  } as React.CSSProperties;
}

export function applyTheme(props: ThemeProps) {
  const properties = applyThemeOnHtmlStyleTag(props) as Record<string, string>;
  Object.keys(properties).forEach(prop => {
    document.documentElement.style.setProperty(prop, properties[prop]);
  });
}

export function toggleThemeColorScheme(
  onToggle?: (colorScheme: string) => void,
) {
  const scheme = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-scheme',
  );
  const seedColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-seed',
  );
  const colorScheme = scheme === 'light' ? 'dark' : 'light';
  applyTheme({ seedColor, colorScheme });
  if (onToggle !== undefined) onToggle(colorScheme);
}

export function applyThemeDarkColorScheme(
  onApply?: (colorScheme: string) => void,
) {
  const seedColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-seed',
  );
  applyTheme({ seedColor, colorScheme: 'dark' });
  if (onApply !== undefined) onApply('dark');
}

export function applyThemeLightColorScheme(
  onApply?: (colorScheme: string) => void,
) {
  const seedColor = getComputedStyle(document.documentElement).getPropertyValue(
    '--color-seed',
  );
  applyTheme({ seedColor, colorScheme: 'light' });
  if (onApply !== undefined) onApply('light');
}

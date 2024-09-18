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

  return {
    ...fonts,
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

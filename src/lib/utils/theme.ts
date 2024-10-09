import {
  argbFromHex,
  hexFromArgb,
  redFromArgb,
  greenFromArgb,
  blueFromArgb,
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
  const theme = themeFromSourceColor(argbFromHex(seedColor));
  const scheme = theme.schemes[colorScheme];
  const fonts =
    font === false
      ? ({
          '--font-settings': 'false',
        } as React.CSSProperties)
      : ({
          '--font-settings': 'true',
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

  const surfaceContainer =
    colorScheme === 'dark'
      ? ({
          '--color-surface-container-lowest': hexFromArgb(
            theme.palettes.neutral.tone(4),
          ),
          '--color-surface-container-low': hexFromArgb(
            theme.palettes.neutral.tone(10),
          ),
          '--color-surface-container': hexFromArgb(
            theme.palettes.neutral.tone(12),
          ),
          '--color-surface-container-high': hexFromArgb(
            theme.palettes.neutral.tone(17),
          ),
          '--color-surface-container-highest': hexFromArgb(
            theme.palettes.neutral.tone(22),
          ),
        } as React.CSSProperties)
      : ({
          '--color-surface-container-lowest': hexFromArgb(
            theme.palettes.neutral.tone(100),
          ),
          '--color-surface-container-low': hexFromArgb(
            theme.palettes.neutral.tone(96),
          ),
          '--color-surface-container': hexFromArgb(
            theme.palettes.neutral.tone(94),
          ),
          '--color-surface-container-high': hexFromArgb(
            theme.palettes.neutral.tone(92),
          ),
          '--color-surface-container-highest': hexFromArgb(
            theme.palettes.neutral.tone(90),
          ),
        } as React.CSSProperties);

  const scrimColor = `rgb(${redFromArgb(theme.palettes.neutralVariant.tone(10))} ${greenFromArgb(theme.palettes.neutralVariant.tone(10))} ${blueFromArgb(theme.palettes.neutralVariant.tone(10))} / 50%)`;

  return {
    ...fonts,
    ...elevation,
    '--color-seed': seedColor,
    '--color-scheme': colorScheme,
    '--color-scrim': scrimColor,
    '--color-primary': hexFromArgb(scheme.primary),
    '--color-on-primary': hexFromArgb(scheme.onPrimary),
    '--color-primary-container': hexFromArgb(scheme.primaryContainer),
    '--color-on-primary-container': hexFromArgb(scheme.onPrimaryContainer),
    '--color-secondary': hexFromArgb(scheme.secondary),
    '--color-on-secondary': hexFromArgb(scheme.onSecondary),
    '--color-secondary-container': hexFromArgb(scheme.secondaryContainer),
    '--color-on-secondary-container': hexFromArgb(scheme.onSecondaryContainer),
    '--color-tertiary': hexFromArgb(scheme.tertiary),
    '--color-on-tertiary': hexFromArgb(scheme.onTertiary),
    '--color-tertiary-container': hexFromArgb(scheme.tertiaryContainer),
    '--color-on-tertiary-container': hexFromArgb(scheme.onTertiaryContainer),
    '--color-error': hexFromArgb(scheme.error),
    '--color-on-error': hexFromArgb(scheme.onError),
    '--color-error-container': hexFromArgb(scheme.errorContainer),
    '--color-on-error-container': hexFromArgb(scheme.onErrorContainer),
    '--color-background': hexFromArgb(scheme.background),
    '--color-on-background': hexFromArgb(scheme.onBackground),
    '--color-surface': hexFromArgb(scheme.surface),
    '--color-on-surface': hexFromArgb(scheme.onSurface),
    '--color-surface-variant': hexFromArgb(scheme.surfaceVariant),
    '--color-on-surface-variant': hexFromArgb(scheme.onSurfaceVariant),
    '--color-inverse-surface': hexFromArgb(scheme.inverseSurface),
    '--color-on-inverse-surface': hexFromArgb(scheme.inverseOnSurface),
    '--color-inverse-primary': hexFromArgb(scheme.inversePrimary),
    '--color-outline': hexFromArgb(scheme.outline),
    '--color-outline-variant': hexFromArgb(scheme.outlineVariant),
    ...surfaceContainer,
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
  const fontSettings = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-settings');
  const fontTitle = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-title',
  );
  const fontContent = getComputedStyle(
    document.documentElement,
  ).getPropertyValue('--font-content');
  const fontCode = getComputedStyle(document.documentElement).getPropertyValue(
    '--font-code',
  );
  const colorScheme = scheme === 'light' ? 'dark' : 'light';
  applyTheme({
    seedColor,
    colorScheme,
    font:
      fontSettings === 'true'
        ? {
            title: fontTitle,
            content: fontContent,
            code: fontCode,
          }
        : false,
  });
  if (onToggle !== undefined) onToggle(colorScheme);
}

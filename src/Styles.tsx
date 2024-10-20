import { Box, Card, MaterialSymbols } from './lib';

export default function SectionStyles({ hash }: Readonly<{ hash: string }>) {
  return (
    <Box as="article" hidden={hash !== '#styles'}>
      <Card
        as="section"
        variant="outlined"
        display="grid"
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        marginBlock="xl"
        marginInline="auto"
        maxWidth="large"
        id="typography"
      >
        <Box
          as="hgroup"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          gridColumns={{ compact: 12, expanded: 6 }}
        >
          <Box as="h2" fontScale="display-large">
            Font
          </Box>
          <Box as="p" fontScale="headline-small">
            Typography helps make writing <strong>legible</strong> and <em>beautiful</em>
          </Box>
          <Box
            as="a"
            href="https://m3.material.io/styles/typography/overview"
            target="_blank"
            rel="nofollow"
            fontScale="label-small"
            textColor="primary"
          >
            Reference
          </Box>
        </Box>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          gridColumns={{ compact: 12, expanded: 6 }}
        >
          <Box as="p" fontScale="display-large" textColor="secondary">
            Display large
          </Box>
          <Box as="p" fontScale="display-medium" textColor="secondary">
            Display medium
          </Box>
          <Box as="p" fontScale="display-small" textColor="secondary">
            Display small
          </Box>
          <Box as="p" fontScale="headline-large" textColor="secondary">
            Headline large
          </Box>
          <Box as="p" fontScale="headline-medium" textColor="secondary">
            Headline medium
          </Box>
          <Box as="p" fontScale="headline-small" textColor="secondary">
            Headline small
          </Box>
          <Box as="p" fontScale="title-large" textColor="secondary">
            Title large
          </Box>
          <Box as="p" fontScale="title-medium" textColor="secondary">
            Title medium
          </Box>
          <Box as="p" fontScale="title-small" textColor="secondary">
            Title small
          </Box>
          <Box as="p" fontScale="body-large" textColor="secondary">
            Body large
          </Box>
          <Box as="p" fontScale="body-medium" textColor="secondary">
            Body medium
          </Box>
          <Box as="p" fontScale="body-small" textColor="secondary">
            Body small
          </Box>
          <Box as="p" fontScale="label-large" textColor="secondary">
            Label large
          </Box>
          <Box as="p" fontScale="label-medium" textColor="secondary">
            Label medium
          </Box>
          <Box as="p" fontScale="label-small" textColor="secondary">
            Label small
          </Box>
        </Box>
      </Card>
      <Card
        as="section"
        variant="outlined"
        display="grid"
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        marginBlock="xl"
        marginInline="auto"
        maxWidth="large"
        id="icon"
      >
        <Box
          as="hgroup"
          display="flex"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          gridColumns={{ compact: 12, expanded: 6 }}
        >
          <Box as="h2" fontScale="display-large">
            Icon
          </Box>
          <Box as="p" fontScale="headline-small">
            Icons are small symbols for actions or other items
          </Box>
          <Box
            as="a"
            href="https://m3.material.io/styles/icons/designing-icons"
            target="_blank"
            rel="nofollow"
            fontScale="label-small"
            textColor="primary"
          >
            Reference
          </Box>
        </Box>
        <Box
          as="section"
          display="flex"
          flexDirection="column"
          gap="lg"
          alignItems="flex-start"
          gridColumns={{ compact: 12, expanded: 6 }}
        >
          <Box as="h3" fontScale="title-large" textColor="secondary">
            Default
          </Box>
          <Box as="div" display="flex" gap="sm" alignItems="center">
            <MaterialSymbols icon="search" size={20} />
            <MaterialSymbols icon="home" size={24} />
            <MaterialSymbols icon="settings" size={40} />
            <MaterialSymbols icon="favorite" size={48} />
          </Box>
          <Box as="h3" fontScale="title-large" textColor="secondary">
            Filled
          </Box>
          <Box as="div" display="flex" gap="sm" alignItems="center">
            <MaterialSymbols icon="search" size={20} filled />
            <MaterialSymbols icon="home" size={24} filled />
            <MaterialSymbols icon="settings" size={40} filled />
            <MaterialSymbols icon="favorite" size={48} filled />
          </Box>
        </Box>
      </Card>
    </Box>
  );
}

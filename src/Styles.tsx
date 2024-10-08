import { Card, Flexbox, Font, MaterialSymbols } from './lib';
import { gridColumnProps } from './lib/utils';

export default function SectionStyles({ hash }: Readonly<{ hash: string }>) {
  return (
    <article hidden={hash !== '#styles'}>
      <Card
        as="section"
        variant="outlined"
        grid
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        marginBlock="xl"
        id="typography"
      >
        <Flexbox
          as="hgroup"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
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
        </Flexbox>
        <Flexbox
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
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
        </Flexbox>
      </Card>
      <Card
        as="section"
        variant="outlined"
        grid
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        marginBlock="xl"
        id="icon"
      >
        <Flexbox
          as="hgroup"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
          <Font as="h2" variant="display" scale="large">
            Icon
          </Font>
          <Font as="p" variant="headline" scale="small">
            Icons are small symbols for actions or other items
          </Font>
          <Font
            as="a"
            href="https://m3.material.io/styles/icons/designing-icons"
            target="_blank"
            rel="nofollow"
            variant="label"
            scale="small"
            color="primary"
          >
            Reference
          </Font>
        </Flexbox>
        <Flexbox
          as="section"
          flexDirection="column"
          gap="lg"
          alignItems="flex-start"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
          <Font as="h3" variant="title" scale="large" color="secondary">
            Default
          </Font>
          <Flexbox gap="sm" alignItems="center">
            <MaterialSymbols icon="search" size={20} />
            <MaterialSymbols icon="home" size={24} />
            <MaterialSymbols icon="settings" size={40} />
            <MaterialSymbols icon="favorite" size={48} />
          </Flexbox>
          <Font as="h3" variant="title" scale="large" color="secondary">
            Filled
          </Font>
          <Flexbox gap="sm" alignItems="center">
            <MaterialSymbols icon="search" size={20} filled />
            <MaterialSymbols icon="home" size={24} filled />
            <MaterialSymbols icon="settings" size={40} filled />
            <MaterialSymbols icon="favorite" size={48} filled />
          </Flexbox>
        </Flexbox>
      </Card>
    </article>
  );
}

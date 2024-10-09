import {
  Button,
  Dialog,
  Flexbox,
  Font,
  Grid,
  MaterialSymbols,
  useDialogControl,
} from './lib';
import { gridColumnProps } from './lib/utils';

export default function SectionActions({ hash }: Readonly<{ hash: string }>) {
  const { showDialog } = useDialogControl();

  return (
    <article hidden={hash !== '#actions'}>
      <Grid
        as="section"
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        id="button"
      >
        <Flexbox
          as="hgroup"
          flexDirection="column"
          alignItems="flex-start"
          gap="sm"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
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
        </Flexbox>
        <Flexbox
          as="section"
          flexDirection="column"
          gap="lg"
          alignItems="stretch"
          {...gridColumnProps({ compact: 4, medium: 8, expanded: 6 })}
        >
          <Font as="h3" variant="title" scale="large" color="secondary">
            Enabled
          </Font>
          <Flexbox
            flexDirection={{ compact: 'column', medium: 'row' }}
            alignItems={{ compact: 'stretch', medium: 'center' }}
            gap="sm"
          >
            <Button variant="elevated" onClick={() => showDialog('test-basic')}>
              Elevated
            </Button>
            <Button
              variant="filled"
              onClick={() => showDialog('test-fullscreen')}
            >
              Filled
            </Button>
            <Button variant="tonal">Tonal</Button>
            <Button variant="outlined">Outlined</Button>
            <Button variant="text">Text</Button>
          </Flexbox>
          <Font as="h3" variant="title" scale="large" color="secondary">
            Disabled
          </Font>
          <Flexbox
            flexDirection={{ compact: 'column', medium: 'row' }}
            alignItems={{ compact: 'stretch', medium: 'center' }}
            gap="sm"
          >
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
          </Flexbox>
        </Flexbox>
      </Grid>
      <Dialog
        id="test-basic"
        cancelLabel="Nop"
        onCancel={close => close()}
        confirmLabel="Confirm"
        onConfirm={close => {
          console.log('All right');
          close();
        }}
        headline="The dialog is correct?"
        icon={<MaterialSymbols icon="verified" size={24} />}
      >
        <Font variant="body" scale="medium">
          The modal was showed successfuly with this text.
        </Font>
      </Dialog>
      <Dialog
        id="test-fullscreen"
        cancelLabel="Nop"
        onCancel={close => close()}
        confirmLabel="Confirm"
        onConfirm={close => {
          console.log('All right');
          close();
        }}
        headline="Dialog is correct"
        icon={<MaterialSymbols icon="fullscreen" size={24} />}
        fullscreenOnCompact
      >
        <Font variant="body" scale="medium">
          The modal was showed successfuly with this text.
        </Font>
      </Dialog>
    </article>
  );
}

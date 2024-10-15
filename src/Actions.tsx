import { Box, Button, Dialog, MaterialSymbols, useDialogControl } from './lib';

export default function SectionActions({ hash }: Readonly<{ hash: string }>) {
  const { showDialog } = useDialogControl();

  return (
    <Box as="article" hidden={hash !== '#actions'}>
      <Box
        as="section"
        display="grid"
        gap={{ compact: 'md', medium: 'xl' }}
        paddingInline={{ compact: 'lg', medium: 'xl' }}
        paddingBlock="xl"
        id="button"
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
            Button
          </Box>
          <Box as="p" fontScale="headline-small">
            Common buttons prompt most actions in a UI
          </Box>
          <Box
            as="a"
            href="https://m3.material.io/components/buttons/overview"
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
          alignItems="stretch"
          gridColumns={{ compact: 12, expanded: 6 }}
        >
          <Box as="h3" fontScale="title-large" textColor="secondary">
            Enabled
          </Box>
          <Box
            as="div"
            display="flex"
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
          </Box>
          <Box as="h3" fontScale="title-large" textColor="secondary">
            Disabled
          </Box>
          <Box
            as="div"
            display="flex"
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
          </Box>
        </Box>
      </Box>
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
        <Box as="p" fontScale="body-medium">
          The modal was showed successfuly with this text.
        </Box>
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
        <Box as="p" fontScale="body-medium">
          The modal was showed successfuly with this text.
        </Box>
      </Dialog>
    </Box>
  );
}

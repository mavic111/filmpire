import { styled } from '@mui/system';

export const Root = styled('div')({
  display: 'flex',
  height: '100%',
});

export const Content = styled('main')({
  flexGrow: '1',
  padding: '2em',
});

export const Toolbar = styled('div')({
  height: '70px',
});

export default styled(() => ({
  root: {
    display: 'flex',
    height: '100%',
  },
  content: {
    flexGrow: '1',
    padding: '2em',
  },
  toolbar: {
    height: '70px',
  },
}));

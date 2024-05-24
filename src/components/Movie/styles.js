import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const Links = styled(Link)(({ theme }) => ({
  alignItems: 'center',
  fontWeight: 'bolder',
  textDecoration: 'none',
  [theme.breakpoints.up('xs')]: {
    display: 'flex',
    flexDirection: 'column',
  },
  '&:hover': {
    cursor: 'pointer',
    textDecoration: 'none',
  },
}));

export const MovieImage = styled('img')(() => ({
  borderRadius: '20px',
  height: '300px',
  marginBottom: '10px',
  '&:hover': {
    transform: 'scale(1.05)',
  },
}));

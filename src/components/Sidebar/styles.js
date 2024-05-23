import { styled } from '@mui/system';
import { Link } from 'react-router-dom';

export const ImageLink = styled(Link)({
  display: 'flex',
  justifyContent: 'center',
  padding: '10% 0',
});

export const Image = styled('img')({
  width: '70%',
});

export const Links = styled(Link)(({ theme }) => ({
  color: theme.palette.text.primary,
  textDecoration: 'none',
}));

export const GenreImage = styled('img')(({ theme }) => ({
  filter: theme.palette.mode === 'dark' && 'invert(1)',
}));

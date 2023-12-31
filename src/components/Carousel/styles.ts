import { styled } from '@mui/material/styles';

export const BillContainer = styled('div')(() => ({
  alignItems: 'center',
  display: 'flex',
  padding: '7px 0 0 7px',
}));

export const BillTitle = styled('span')(() => ({
  fontWeight: 600,
}));

export const BillSubTitle = styled('span')(() => ({
  fontSize: '1rem',
}));

export const IconContainer = styled('div')(() => ({
  marginLeft: '20px',
  marginTop: '10px',
}));

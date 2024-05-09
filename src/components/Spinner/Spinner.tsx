import { CircularProgress } from '@mui/material';

function Spinner() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '16px' }}>
      <CircularProgress />
    </div>
  );
}

export default Spinner;

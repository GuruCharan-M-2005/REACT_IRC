import {Button , Stack} from '@mui/material';

export default function MaterailUI() {
  return (
    <Stack direction='row' spacing={2}>
      <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

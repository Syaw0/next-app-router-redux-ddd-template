// @Mui
import { Box, Button, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

export default async function Home() {
  return (
    <Box>
      <Typography variant="h4">سلام چس تیوبز</Typography>
      <Typography variant="h5">سلام چس تیوبز</Typography>
      <Typography variant="h6">سلام چس تیوبز</Typography>
      <Stack dir="rtl" direction="row" alignItems="center" justifyContent="center" spacing={2}>
        <Button>ثبت رکورد</Button>
        <Button variant="outlined">ثبت رکورد</Button>
        <Button variant="contained">ثبت رکورد</Button>
      </Stack>
    </Box>
  );
}

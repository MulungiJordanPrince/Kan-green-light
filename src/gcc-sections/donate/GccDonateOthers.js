import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { Call, CreditCard } from '@mui/icons-material';
import { Card, CardContent, CardHeader, Stack } from '@mui/material';

export default function GccDonateOthers() {

  return (
    <Box sx={{ py: 6, px: { xs: 2, sm: 6, md: 12 } }}>
      <Box marginBottom={4}>
        <Typography
          sx={{
            textTransform: 'uppercase',
            fontWeight: 'medium',
          }}
          gutterBottom
          color={'primary'}
          align={'center'}
        >
          give offline
        </Typography>
        <Box
          component={Typography}
          fontWeight={700}
          variant={'h3'}
          align={'center'}
        >
          Check out our offline methods
        </Box>
      </Box>
      <Stack direction='row' justifyContent='center' spacing={4}>
        <Card>
          <CardHeader title='Give in direct to our mobile money' />
          <CardContent>
            <Stack direction='row' justifyContent='space-between'>
              <Typography>0771581960 // 0705318900</Typography>
              <Call />
            </Stack>
          </CardContent>
        </Card>
        <Card>
          <CardHeader title='Give in direct to our Credit Card' />
          <CardContent>
            <Stack direction='row' justifyContent='space-between'>
              <Typography>01453500226899-DFCU</Typography>
              <CreditCard />
            </Stack>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
};


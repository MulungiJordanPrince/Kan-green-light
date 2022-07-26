import PropTypes from 'prop-types';
import { useState } from 'react';
// icons
import closeIcon from '@iconify/icons-carbon/close';
import playFilledAlt from '@iconify/icons-carbon/play-filled-alt';
// @mui
import { Box, CircularProgress } from '@mui/material';
//
import { ReactPlayerStyle } from './Player';
import { DialogAnimate, IconButtonAnimate, FabButtonAnimate, varZoom } from '../animate';
import Image from '../Image';
import Iconify from '../Iconify';
import BgOverlay from '../BgOverlay';

// ----------------------------------------------------------------------

PlayerWithImage.propTypes = {
  imgPath: PropTypes.string,
  videoPath: PropTypes.string,
  ratio: PropTypes.oneOf(['4/3', '3/4', '6/4', '4/6', '16/9', '9/16', '21/9', '9/21', '1/1']),
};

export default function PlayerWithImage({ imgPath, ratio = '16/9', videoPath }) {
  const [loading, setLoading] = useState(true);
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onReady = () => {
    setLoading(false);
  };

  return (
    <>
      <Box sx={{ position: 'relative', borderRadius: 2, overflow: 'hidden' }}>
        <FabButtonAnimate
          size="large"
          color="inherit"
          onClick={handleOpen}
          sx={{ width: 1, height: 1, bgcolor: 'common.white' }}
          sxWrap={{
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            width: 64,
            height: 64,
            zIndex: 9,
            m: 'auto',
            position: 'absolute',
          }}
        >
          <Iconify icon={playFilledAlt} sx={{ color: 'primary.main' }} />
        </FabButtonAnimate>

        <BgOverlay startColor={'rgba(145,253,102,0.23)'} endColor={'rgba(19,30,14,0.98)'} />

        <Image alt="hero" src={imgPath} ratio={ratio} />
      </Box>

      <DialogAnimate
        fullScreen
        open={open}
        variants={{
          initial: { ...varZoom().in.initial, scale: 0.64 },
          animate: {
            ...varZoom().in.animate,
            transition: { ...varZoom().in.animate.transition, duration: 0.48 },
          },
          exit: { ...varZoom().in.exit, scale: 0.64 },
        }}
        sx={{ bgcolor: 'transparent' }}
      >
        <Box sx={{ position: 'fixed', top: 24, right: 24, zIndex: 9 }}>
          <IconButtonAnimate
            size="large"
            onClick={handleClose}
            sx={{
              bgcolor: 'common.white',
              '&:hover': {
                color: 'primary.main',
                bgcolor: 'common.white',
              },
            }}
          >
            <Iconify icon={closeIcon} sx={{ width: 24, height: 24 }} />
          </IconButtonAnimate>
        </Box>

        {loading && (
          <CircularProgress
            sx={{
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              m: 'auto',
              zIndex: -1,
              position: 'absolute',
            }}
          />
        )}

        <ReactPlayerStyle url={videoPath} playing={!loading} onReady={onReady} />
      </DialogAnimate>
    </>
  );
}

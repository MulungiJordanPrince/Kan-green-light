import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import { makeStyles } from '@mui/styles';
import { colors } from '@mui/material';
import Section from '../Section';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    width: '100%',
    borderBottom: `1px solid ${colors.grey[200]}`,
    overflow: 'hidden',
  },
  hero: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    maxWidth: '1100px',
    margin: '0 auto',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column-reverse',
    },
  },
  heroLeftSide: {
    [theme.breakpoints.down('sm')]: {
      padding: theme.spacing(3, 2),
    },
  },
  heroRightSide: {
    maxWidth: '50%',
    flex: '0 0 50%',
    position: 'relative',
    [theme.breakpoints.down('sm')]: {
      maxWidth: '100%',
      flex: '0 0 100%',
      height: '300px',
    },
  },
  shapeContainer: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    overflow: 'hidden',
    verticalAlign: 'middle',
    zIndex: 3,
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  shape: {
    transform: 'scale(2)',
    width: 'auto',
    height: '100%',
  },
  heroCover: {
    position: 'relative',
    width: '50vw',
    height: '100%',
    [theme.breakpoints.down('sm')]: {
      width: '100%',
    },
  },
  heroImageContainer: {
    height: '100%',
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    position: 'absolute',
    left: '0%',
    width: '100%',
    height: '100%',
  },
}));

/**
 * Component to display the shaped hero
 *
 * @param {Object} props
 */
const HeroShaped = props => {
  const { leftSide, rightSide, className, ...rest } = props;

  const classes = useStyles();

  return (
    <div className={clsx(classes.root, 'hero-shaped', className)} {...rest}>
      <div className={clsx('hero-shaped__wrapper', classes.hero)}>
        <Section
          className={clsx('hero-shaped__left-side', classes.heroLeftSide)}
        >
          {leftSide}
        </Section>
        <div className={clsx('hero-shaped__right-side', classes.heroRightSide)}>
          <div className={clsx('hero-shaped__shape', classes.shapeContainer)}>
            <img
              src="/images/shapes/shape-fluid.svg"
              className={clsx('hero-shaped__shape-image', classes.shape)}
              alt=""
            />
          </div>
          <div className={clsx('hero-shaped__cover', classes.heroCover)}>
            <div
              className={clsx(
                'hero-shaped__image-container',
                classes.heroImageContainer,
              )}
            >
              <div className={clsx('hero-shaped__image', classes.heroImage)}>
                {rightSide}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroShaped.propTypes = {
  /**
   * External classes
   */
  className: PropTypes.string,
  /**
   * Children to placed inside the section right side
   */
  rightSide: PropTypes.node.isRequired,
  /**
   * Children to placed inside the section left side
   */
  leftSide: PropTypes.node.isRequired,
};

export default HeroShaped;

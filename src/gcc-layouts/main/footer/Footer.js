import PropTypes from 'prop-types';
import {useState} from 'react';
// icons
import chevronDown from '@iconify/icons-carbon/chevron-down';
import chevronRight from '@iconify/icons-carbon/chevron-right';
// next
import NextLink from 'next/link';
// @mui
import Masonry from '@mui/lab/Masonry';
import {
    Box,
    Grid,
    Link,
    Stack,
    Button,
    Divider,
    Collapse,
    Container,
    Typography,
    FilledInput,
    InputAdornment,
} from '@mui/material';
// hooks
import {useResponsive} from '../../../hooks';
// components
import {Logo, Iconify, SocialsButton} from '../../../components';
//
import MenuConfig from '../MenuConfig';
import logo from "../../../assets/gcc-Images/logos/logo-sm.png";
import Image from "next/image";

// ----------------------------------------------------------------------

export default function Footer() {
    const isDesktop = useResponsive('up', 'md');

    return (
        <>
            <Divider/>
            <Container sx={{py: {xs: 8, md: 10}}}>
                <Grid container spacing={3} justifyContent={{md: 'space-between'}}>
                    <Grid item xs={12} md={4}>
                        <Stack spacing={{xs: 3, md: 5}}>
                            <Stack alignItems='flex-start' spacing={3}>
                                <Image src={logo} width={100} height={100} />
                                <Typography variant='body2' sx={{color: 'text.secondary'}}>
                                    KAN GREEN LIGHT MARKETING AVENUE LTD. helps companies strategize and implement their
                                    creative visions. Our growing Marketing Agency is driven by passionate thinkers who
                                    work closely with each brand to create strategies that produce unparalleled results.
                                </Typography>
                            </Stack>

                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={4}>
                        <Stack spacing={{xs: 3, md: 5}}>
                            <Stack spacing={2}>
                                <Typography variant='h6'>KGA Social</Typography>
                                <SocialsButton/>
                            </Stack>

                            <Stack spacing={2}>
                                <Stack spacing={1}>
                                    <Typography variant='h6'>Let’s stay in touch</Typography>
                                    <Typography variant='caption' sx={{color: 'text.secondary'}}>
                                        Email us to receive the church programs to your inbox weekly.
                                    </Typography>
                                </Stack>
                                <FilledInput
                                    placeholder='Email address'
                                    endAdornment={
                                        <InputAdornment position='end'>
                                            <Button variant='contained' size='small' sx={{py: '9px'}}>
                                                subscribe
                                            </Button>
                                        </InputAdornment>
                                    }
                                    sx={{
                                        pr: 0.5,
                                        '& .MuiFilledInput-input': {py: '14px'},
                                    }}
                                />
                            </Stack>
                        </Stack>
                    </Grid>

                    <Grid item xs={12} md={2}>
                        {isDesktop ? (
                            <ListDesktop list={MenuConfig}/>
                        ) : (
                            <Stack spacing={2}>
                                <ListMobile list={MenuConfig}/>
                            </Stack>
                        )}
                    </Grid>
                </Grid>
            </Container>

            <Divider/>

            <Container>
                <Stack
                    direction={{xs: 'column', md: 'row'}}
                    spacing={2.5}
                    justifyContent='space-between'
                    sx={{py: 1, pb: 2, textAlign: 'center'}}
                >
                    <Typography variant='caption' sx={{color: 'text.secondary'}}>
                        Copyright ©
                        Kan Greenlight Avenue
                    </Typography>
                    <Stack direction='row' spacing={3} justifyContent='center'>
                        <Link variant='caption' sx={{color: 'text.secondary'}}>
                            Call Us:
                            Tel 0750064865
                        </Link>
                        <Link variant='caption' sx={{color: 'text.secondary'}}>
                            Email Us:
                            support@kangreenlightavenue.com
                        </Link>
                    </Stack>
                </Stack>
            </Container>
        </>
    );
}

// ----------------------------------------------------------------------

NextLinkItem.propTypes = {
    children: PropTypes.node.isRequired,
    sx: PropTypes.object,
};

function NextLinkItem({children, sx, ...other}) {
    return (
        <NextLink passHref {...other}>
            <Link
                variant='body3'
                sx={{
                    mt: 1,
                    color: 'text.secondary',
                    '&:hover': {
                        color: 'primary.main',
                        textDecoration: 'none'
                    },
                    ...sx,
                }}
            >
                {children}
            </Link>
        </NextLink>
    );
}

// ----------------------------------------------------------------------

ListDesktop.propTypes = {
    list: PropTypes.array
};

function ListDesktop({list}) {

    return (
        <>
            <Stack alignItems='flex-start' sx={{pb: {md: 1}}}>
                <Typography variant='h6'>Gcc Pages</Typography>
                {list.map((link) => (
                    <NextLinkItem key={link.title} href={link.path}>
                        {link.title}
                    </NextLinkItem>
                ))}
            </Stack>
        </>
    );
}

// ----------------------------------------------------------------------

ListMobile.propTypes = {
    list: PropTypes.array
};

function ListMobile({list}) {
    const [expand, setExpand] = useState(false);

    const onExpand = () => {
        setExpand(!expand);
    };

    return (
        <Stack spacing={1.5} alignItems='flex-start'>
            <Typography
                variant='h6'
                onClick={onExpand}
                sx={{cursor: 'pointer', display: 'flex', alignItems: 'center'}}
            >
                KGA Pages
                <Iconify
                    icon={expand ? chevronDown : chevronRight}
                    sx={{width: 20, height: 20, ml: 0.5}}
                />
            </Typography>

            <Collapse in={expand} sx={{width: 1}}>
                <Box
                    sx={{
                        display: 'grid',
                        rowGap: 1,
                        columnGap: 3,
                        gridTemplateColumns: {
                            xs: 'repeat(1, 1fr)',
                            sm: 'repeat(2, 1fr)',
                        },
                    }}
                >
                    {list?.map((link) => (
                        <NextLinkItem key={link.title} href={link.path}>
                            {link.title}
                        </NextLinkItem>
                    ))}
                </Box>
            </Collapse>
        </Stack>
    );
}

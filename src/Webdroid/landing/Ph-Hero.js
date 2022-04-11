import Image from 'next/image';
// icons
import playIcon from '@iconify/icons-carbon/play';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Stack, Container, Typography, Button, Box, CardContent, Card } from '@mui/material';
// components
import { Iconify } from '../../components';
import suit from '../../assets/images/suit.png';
import ShopProductCard from '../../sections/@dashboard/e-commerce/shop/ShopProductCard';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(20, 0),
  [theme.breakpoints.up('md')]: {
    height: '90vh',
    display: 'flex',
    alignItems: 'center',
  },
}));

const OverlayStyle = styled('div')(({ theme }) => ({
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  position: 'absolute',
  backgroundColor: alpha(theme.palette.grey[900], 0.64),
}));

// ----------------------------------------------------------------------

export default function Hero() {

  const product = {
      "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
      "cover": "https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg",
      "images": [
        "https://minimal-assets-api.vercel.app/assets/images/products/product_1.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_2.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_3.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_4.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_5.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_6.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_7.jpg",
        "https://minimal-assets-api.vercel.app/assets/images/products/product_8.jpg"
      ],
      "name": "Nike Air Force 1 NDESTRUKT",
      "code": "38BEE270",
      "sku": "WW75K5210YW/SV",
      "tags": [
        "Dangal",
        "The Sting",
        "2001: A Space Odyssey",
        "Singin' in the Rain"
      ],
      "price": 16.19,
      "priceSale": 16.19,
      "totalRating": 2.5,
      "totalReview": 9628,
      "ratings": [
        {
          "name": "1 Star",
          "starCount": 1191,
          "reviewCount": 4285
        },
        {
          "name": "2 Star",
          "starCount": 8591,
          "reviewCount": 5854
        },
        {
          "name": "3 Star",
          "starCount": 605,
          "reviewCount": 8552
        },
        {
          "name": "4 Star",
          "starCount": 29,
          "reviewCount": 895
        },
        {
          "name": "5 Star",
          "starCount": 8260,
          "reviewCount": 5834
        }
      ],
      "reviews": [
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b1",
          "name": "Jayvion Simon",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_1.jpg",
          "comment": "Assumenda nam repudiandae rerum fugiat vel maxime.",
          "rating": 2.5,
          "isPurchased": true,
          "helpful": 563,
          "postedAt": "2022-04-01T06:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b2",
          "name": "Lucian Obrien",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_2.jpg",
          "comment": "Quis veniam aut saepe aliquid nulla.",
          "rating": 2,
          "isPurchased": true,
          "helpful": 3767,
          "postedAt": "2022-03-31T05:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b3",
          "name": "Deja Brady",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_3.jpg",
          "comment": "Reprehenderit ut voluptas sapiente ratione nostrum est.",
          "rating": 4.9,
          "isPurchased": true,
          "helpful": 5980,
          "postedAt": "2022-03-30T04:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b4",
          "name": "Harrison Stein",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_4.jpg",
          "comment": "Error ut sit vel molestias velit.",
          "rating": 2,
          "isPurchased": false,
          "helpful": 7421,
          "postedAt": "2022-03-29T03:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b5",
          "name": "Reece Chung",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_5.jpg",
          "comment": "Quo quia sit nihil nemo doloremque et.",
          "rating": 4,
          "isPurchased": false,
          "helpful": 9424,
          "postedAt": "2022-03-28T02:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b6",
          "name": "Lainey Davidson",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_6.jpg",
          "comment": "Autem doloribus harum vero laborum.",
          "rating": 5,
          "isPurchased": true,
          "helpful": 942,
          "postedAt": "2022-03-27T01:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b7",
          "name": "Cristopher Cardenas",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_7.jpg",
          "comment": "Tempora officiis consequuntur architecto nostrum autem nam adipisci.",
          "rating": 4.9,
          "isPurchased": false,
          "helpful": 2433,
          "postedAt": "2022-03-26T00:19:53.487Z"
        },
        {
          "id": "e99f09a7-dd88-49d5-b1c8-1daf80c2d7b8",
          "name": "Melanie Noble",
          "avatarUrl": "https://minimal-assets-api.vercel.app/assets/images/avatars/avatar_8.jpg",
          "comment": "Voluptas sunt magni adipisci praesentium saepe.",
          "rating": 5,
          "isPurchased": false,
          "helpful": 3098,
          "postedAt": "2022-03-24T23:19:53.487Z"
        }
      ],
      "status": "sale",
      "inventoryType": "in_stock",
      "sizes": [
        "6",
        "7",
        "8",
        "8.5",
        "9",
        "9.5",
        "10",
        "10.5",
        "11",
        "11.5",
        "12",
        "13"
      ],
      "available": 56,
      "description": "\n<p><strong><small> SPECIFICATION</small></strong></p>\n<p>Leather panels. Laces. Rounded toe. Rubber sole.\n<br /><br />\n<p><strong><small> MATERIAL AND WASHING INSTRUCTIONS</small></strong></p>\n<p>Shoeupper: 54% bovine leather,46% polyurethane. Lining: 65% polyester,35% cotton. Insole: 100% polyurethane. Sole: 100% thermoplastic. Fixing sole: 100% glued.</p>\n",
      "sold": 486,
      "createdAt": "2022-04-01T06:19:53.487Z",
      "category": "Shose",
      "gender": "Kids",
      "colors": [
        "#00AB55",
        "#000000"
      ]
    }

  return (
    <>
      <RootStyle>
        <Container>
          <Grid container columnSpacing={10} justifyContent='space-between' alignItems='center'>
            <Grid item xs={12} md={6} lg={5} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
              <Stack spacing={4}>
                <Typography variant='overline' sx={{ mt: 8, color: 'primary.main' }}>
                  Fashion it out
                </Typography>

                <Typography variant='h2'>Your last chance to grab classic suit</Typography>

                <Typography sx={{ color: 'text.secondary' }}>
                  With so much demand for a style of board where every aspect of it fiexes, we created a new serise
                </Typography>

                <Stack
                  direction={{ xs: 'column', sm: 'row' }}
                  justifyContent={{ xs: 'center', md: 'unset' }}
                  spacing={3}
                >
                  <Button variant='contained' size='large'>
                    SHOP NOW
                  </Button>

                  <Button
                    disableRipple
                    color='inherit'
                    size='large'
                    startIcon={
                      <Box
                        sx={{
                          width: 48,
                          height: 48,
                          display: 'flex',
                          borderRadius: '50%',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: (theme) => `solid 2px ${alpha(theme.palette.primary.main, 0.24)}`,
                        }}
                      >
                        <Iconify
                          icon={playIcon}
                          sx={{ width: 24, height: 24, color: 'primary.main' }}
                        />
                      </Box>
                    }
                    sx={{
                      px: 0,
                      '&:hover': { bgcolor: 'transparent' },
                    }}
                  >
                    See Our Work
                  </Button>
                </Stack>
              </Stack>
            </Grid>

            <Grid
              item
              xs={12}
              md={6}
              lg={7}
              sx={{
                display: { xs: 'none', md: 'block' },
              }}
            >
              <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: 1 }}>
                <Image
                  alt='Philly Suits'
                  src={suit}
                  width={256}
                  height={320}
                />
              </Box>
            </Grid>
          </Grid>
        </Container>
      </RootStyle>
      <Grid container columnSpacing={4} justifyContent='space-between' alignItems='center' sx={{ px: 7 }}>
        <Grid item xs={3}>
          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardContent
                sx={{
                  left: 0,
                  bottom: 0,
                  zIndex: 9,
                  width: '100%',
                  position: 'absolute',
                  color: 'common.white',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 1,
                }}>
                  <Typography noWrap variant='h5' sx={{ mt: 1 }}>
                    Men's
                  </Typography>
                  <Typography noWrap variant='h5' sx={{ mb: 3 }}>
                    Collection
                  </Typography>
                  <Button color='inherit' variant='outlined'>Shop now</Button>
                </Box>
              </CardContent>
              <OverlayStyle />
              <Image alt={'name'} src={suit} sx={{ height: { xs: 280, xl: 320 } }} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardContent
                sx={{
                  left: 0,
                  bottom: 0,
                  zIndex: 9,
                  width: '100%',
                  position: 'absolute',
                  color: 'common.white',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 1,
                }}>
                  <Typography noWrap variant='h5' sx={{ mt: 1 }}>
                    Women's
                  </Typography>
                  <Typography noWrap variant='h5' sx={{ mb: 3 }}>
                    Collection
                  </Typography>
                  <Button color='inherit' variant='outlined'>Shop now</Button>
                </Box>
              </CardContent>
              <OverlayStyle />
              <Image alt={'name'} src={suit} sx={{ height: { xs: 280, xl: 320 } }} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardContent
                sx={{
                  left: 0,
                  bottom: 0,
                  zIndex: 9,
                  width: '100%',
                  position: 'absolute',
                  color: 'common.white',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 1,
                }}>
                  <Typography noWrap variant='h5' sx={{ mt: 1 }}>
                    Kid's
                  </Typography>
                  <Typography noWrap variant='h5' sx={{ mb: 3 }}>
                    Collection
                  </Typography>
                  <Button color='inherit' variant='outlined'>Shop now</Button>
                </Box>
              </CardContent>
              <OverlayStyle />
              <Image alt={'name'} src={suit} sx={{ height: { xs: 280, xl: 320 } }} />
            </Box>
          </Card>
        </Grid>
        <Grid item xs={3}>
          <Card>
            <Box sx={{ position: 'relative' }}>
              <CardContent
                sx={{
                  left: 0,
                  bottom: 0,
                  zIndex: 9,
                  width: '100%',
                  position: 'absolute',
                  color: 'common.white',
                }}
              >
                <Box sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  flexDirection: 'column',
                  width: 1,
                }}>
                  <Typography noWrap variant='h5' sx={{ mt: 1, mb: 3 }}>
                    Accessories
                  </Typography>
                  <Button color='inherit' variant='outlined'>Shop now</Button>
                </Box>
              </CardContent>
              <OverlayStyle />
              <Image alt={'name'} src={suit} sx={{ height: { xs: 280, xl: 320 } }} />
            </Box>
          </Card>
        </Grid>
      </Grid>
      <Grid container columnSpacing={2} justifyContent='center' alignItems='flex-start' sx={{ px: 7, pt: 10 }}>
        <Grid item xs={12}>
          <Typography noWrap variant='h3' sx={{ mt: 1, mb: 4 }}>
            Trendy Collections
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Stack spacing={2}>
          <Typography noWrap variant='h5' sx={{ mt: 1 }}>
            Collections Types
          </Typography>
            <Stack spacing={2}>
          <Typography noWrap variant='body1' color='primary' sx={{ mt: 1 }}>
            Men's
          </Typography>
          <Typography noWrap variant='body1' sx={{ mt: 1 }}>
            Women's
          </Typography>
          <Typography noWrap variant='body1' sx={{ mt: 1 }}>
            Kid's
          </Typography>
          <Typography noWrap variant='body1' sx={{ mt: 1 }}>
            Accessories
          </Typography>
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={3}>
          <ShopProductCard product={product} />
        </Grid>
        <Grid item xs={3}>
          <ShopProductCard product={product} />
        </Grid>
        <Grid item xs={3}>
          <ShopProductCard product={product} />
        </Grid>
      </Grid>
    </>
  );
}
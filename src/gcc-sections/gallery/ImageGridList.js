import React, { useEffect, useState } from 'react';
import {Box, Container, Tab, Tabs} from '@mui/material';
import Carousel, { Modal, ModalGateway } from 'react-images';
import { Masonry } from '@mui/lab';
import { styled } from '@mui/material/styles';

const fetchedImages = [
  {
    'id': 1,
    'name': 'Marketing',
    'images': [
      {
        'id': 142,
        'name': 'IMG_0076.JPG',
        'image': 'https://cubeqbusiness.com/wp-content/uploads/2021/10/Graphic-designer.jpg',
        'date': '2022-03-12T08:18:00.059Z',
      },
      {
        'id': 143,
        'name': 'IMG_0056.JPG',
        'image': 'https://marketsplash.com/content/images/2021/03/Brand-Marketing-1.png',
        'date': '2022-03-12T08:18:01.801Z',
      },
      {
        'id': 144,
        'name': 'IMG_0057.JPG',
        'image': 'https://www.bennettgraphics.com/bennettgraphicswordpress/wp-content/uploads/2015/06/bennett-graphics-31.jpg',
        'date': '2022-03-12T08:18:03.361Z',
      },
      {
        'id': 56,
        'name': '330d76c0-60e8-45cd-8528-3ef5da6a6765.jpg',
        'image': 'https://www.marketingdonut.co.uk/sites/default/files/branding_overview_371705137.jpg',
        'date': '2021-07-23T19:23:42.863Z',
      },
      {
        'id': 57,
        'name': 'a58b3f78-f77c-4919-8d3d-86add3023d8f.jpg',
        'image': 'http://www.nelsonlive.co.nz/wp-content/uploads/2018/06/Advertising-Agency-in-el-paso-tx.jpg',
        'date': '2021-07-23T19:23:43.830Z',
      },
      {
        'id': 58,
        'name': '3d0f2a9c-c038-459c-8f78-a5cbfc1c8347.jpg',
        'image': 'http://www.internetconsultinginc.com/wp-content/uploads/2017/01/content-development.jpg',
        'date': '2021-07-23T19:23:44.423Z',
      },
      {
        'id': 59,
        'name': '70d13b59-2d6f-4e55-b410-2dbf7916d7e8.jpg',
        'image': 'https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg',
        'date': '2021-07-23T19:23:45.065Z',
      },
      {
        'id': 93,
        'name': 'Annotation 2021-08-08 012603.png',
        'image': 'https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg',
        'date': '2021-08-15T10:42:56.097Z',
      },
      {
        'id': 96,
        'name': 'IMG-20210815-WA0027.jpg',
        'image': 'https://www.webworxtechnology.com/wp-content/uploads/2018/06/web-development.jpg',
        'date': '2021-08-15T11:24:30.330Z',
      },
      {
        'id': 140,
        'name': 'Copy of Copy of Live Webinar Twitter Post - Made with PosterMyWall.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/Copy of Copy of Live Webinar Twitter Post - Made with PosterMyWall.jpg',
        'date': '2022-02-13T09:23:01.281Z',
      },
    ],
  },
  {
    'id': 2,
    'name': 'Advertising',
    'images': [
      {
        'id': 115,
        'name': '0816656F-FBA5-478A-8596-D2A4882C3F50.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/0816656F-FBA5-478A-8596-D2A4882C3F50.jpeg',
        'date': '2021-11-18T18:53:19.222Z',
      },
      {
        'id': 118,
        'name': '51B339DC-E330-4A78-A7F3-A171247729C0.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/51B339DC-E330-4A78-A7F3-A171247729C0.jpeg',
        'date': '2021-11-18T18:53:35.605Z',
      },
      {
        'id': 119,
        'name': '3DC6E6FA-5ECA-40CA-B4B3-5A465CFBF740.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/3DC6E6FA-5ECA-40CA-B4B3-5A465CFBF740.jpeg',
        'date': '2021-11-18T18:53:40.136Z',
      },
      {
        'id': 120,
        'name': '37C54AA2-9ABB-4818-A77C-3681825B3F87.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/37C54AA2-9ABB-4818-A77C-3681825B3F87.jpeg',
        'date': '2021-11-18T18:53:44.190Z',
      },
      {
        'id': 123,
        'name': '3E2E6FFC-D81B-4410-B132-EB3B89D2506D.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/3E2E6FFC-D81B-4410-B132-EB3B89D2506D.jpeg',
        'date': '2021-11-18T18:53:53.743Z',
      },
      {
        'id': 117,
        'name': 'EF6C4B8C-2DD5-487D-AC3B-E8A033AA6687.jpeg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/EF6C4B8C-2DD5-487D-AC3B-E8A033AA6687.jpeg',
        'date': '2021-11-18T18:53:27.936Z',
      },
    ],
  },


  {
    'id': 9,
    'name': 'Events ',
    'images': [
      {
        'id': 132,
        'name': 'fb 79.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/fb 79.jpg',
        'date': '2022-02-13T09:19:57.600Z',
      },
      {
        'id': 152,
        'name': 'fb 729.jpg',
        'image': 'https://gcc-store.s3.us-east-2.amazonaws.com/youth/IMG_7654.JPG',
        'date': '2022-02-13T09:19:57.600Z',
      },
      {
        'id': 135,
        'name': 'fb 76.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/fb 76.jpg',
        'date': '2022-02-13T09:20:38.281Z',
      },
      {
        'id': 138,
        'name': 'fb 49.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/fb 49.jpg',
        'date': '2022-02-13T09:20:39.741Z',
      },
      {
        'id': 129,
        'name': 'fb 2.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/fb 2.jpg',
        'date': '2022-02-13T09:18:54.358Z',
      },
      {
        'id': 131,
        'name': 'fb 75.jpg',
        'image': 'https://gcc-store.s3.amazonaws.com/images/fb 75.jpg',
        'date': '2022-02-13T09:19:57.217Z',
      },
    ],
  },
  {
    'id': 10,
    'name': 'KGA Team',
    'images': [],
  },
  {
    'id': 11,
    'name': 'Other',
    'images': [
      {
        'id': 147,
        'name': 'IMG_0135.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0135.JPG',
        'date': '2022-03-12T08:36:52.830Z',
      },
      {
        'id': 148,
        'name': 'IMG_0142.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0142.JPG',
        'date': '2022-03-12T08:36:55.132Z',
      },
      {
        'id': 151,
        'name': 'IMG_0057.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0057.JPG',
        'date': '2022-03-12T08:37:02.379Z',
      },
      {
        'id': 145,
        'name': 'IMG_0124.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0124.JPG',
        'date': '2022-03-12T08:36:48.712Z',
      },
      {
        'id': 146,
        'name': 'IMG_0132.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0132.JPG',
        'date': '2022-03-12T08:36:50.616Z',
      },
      {
        'id': 149,
        'name': 'IMG_0076.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0076.JPG',
        'date': '2022-03-12T08:36:57.748Z',
      },
      {
        'id': 150,
        'name': 'IMG_0056.JPG',
        'image': 'https://gcc-store.s3.amazonaws.com/images/IMG_0056.JPG',
        'date': '2022-03-12T08:36:59.901Z',
      },
    ],
  },
];

const ImageStyle = styled('img')(({ theme }) => ({
  borderRadius: 4,
  display: 'block',
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    transitionDuration: '0.5s',
    opacity: '0.9',
    transform: 'scale(1.1)',
    },
}));

function applyFilter(arr, category) {
  if (category !== 'All') {
    arr = arr.filter((image) => image.groupName === category);
  }
  return arr;
}

function ImageGridList() {

  const [images, setImages] = useState([]);
  const [currentImage, setCurrentImage] = useState(0);
  const [viewerIsOpen, setViewerIsOpen] = useState(false);

  const [selected, setSelected] = useState('Marketing');

  const getCategories = fetchedImages.map((group) => group.name);

  const categories = [...Array.from(new Set(getCategories)), 'All'];

  const handleChangeCategory = (event, newValue) => {
    setSelected(newValue);
  };

  useEffect(() => {
    getAllImages();
  }, []);

  const openLightbox = (index) => {
    setCurrentImage(index);
    setViewerIsOpen(true);
  };

  const closeLightbox = () => {
    setCurrentImage(0);
    setViewerIsOpen(false);
  };

  const getAllImages = () => {
    const images = [];
    fetchedImages.map((group) => {
      group.images.map((image) => {
        const newImage = {
          groupId: group.id,
          groupName: group.name,
          id: image.id,
          name: image.name,
          image: image.image,
          date: image.date,
        };
        images.push(newImage);
      });
    });
    setImages(images);
  };

  return (
    <Container>
      <Box
        sx={{
          pt: 5,
          pb: { xs: 5, md: 10 },
        }}
      >
        <Tabs
          value={selected}
          scrollButtons="auto"
          variant="scrollable"
          allowScrollButtonsMobile
          onChange={handleChangeCategory}
        >
          {categories.map((category) => (
            <Tab key={category} value={category} label={category} />
          ))}
        </Tabs>
      </Box>
      <Box sx={{
        width: 1,
        minHeight: 1
      }}>
        <Masonry columns={3} spacing={1} sx={{
          py: 2,
          backgroundSize: '18px 18px',
          backgroundImage: (theme) => `radial-gradient(${theme.palette.primary.dark}33 10%, transparent 20%)`,
        }}>
          {applyFilter(images, selected).map((image, index) => (
            <div key={index}>
              <ImageStyle
                src={`${image.image}?w=162&auto=format`}
                srcSet={`${image.image}?w=162&auto=format&dpr=2 2x`}
                alt={image.name}
                loading='lazy'
                onClick={() => openLightbox(index)}
                style={{
                  borderRadius: 4,
                  display: 'block',
                  width: '100%',
                  cursor: 'pointer'
                }}
              />
            </div>
          ))}
        </Masonry>
      </Box>

      <ModalGateway>
        {viewerIsOpen ? (
          <Modal onClose={closeLightbox}>
            <Carousel
              currentIndex={currentImage}
              views={applyFilter(images, selected).map((x) => ({
                ...x,
                src: x.image
              }))}
            />
          </Modal>
        ) : null}
      </ModalGateway>
    </Container>
  );
}

export default ImageGridList;

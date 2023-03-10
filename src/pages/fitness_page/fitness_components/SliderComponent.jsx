import { Box, Text,Heading } from "@chakra-ui/react";
import Swipe from "./Swiper";
import PriceComponent from './PriceComponent'
const SliderComponent = () => {
  const slides = [
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/e6866799-7954-41ac-933c-8c4ca189022b",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/08479d5f-bedd-407f-8be0-97757a97100e",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/158e2b03-e48b-4559-a8e1-70810f9c66e3",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/dc85757d-9521-4720-a9fd-f4da68a0aa38",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/7585157c-d3b9-42ff-b4a0-5cebda31d630",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/fa6592c8-4e13-4e65-b258-54d2fe68c6c7",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/2a5c02cb-d043-4d40-8168-f59ae2143119",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/85d74116-d0d7-4f55-9a0c-b815f87bf633",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/8ca896a1-2842-42bc-8ad1-5684962d5c4c",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/b58dfbde-936f-493a-b5f8-f862737a6aa5",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/644f88bf-d8f0-4e17-9b0d-3cfae307a80a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/df0109bd-3fae-44b9-b226-0accaa57ed6c",
    }, {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/cb4e591d-23b0-47c9-a5f9-1e7bd814f911",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/3b8525bb-ab2d-4f7c-b9b1-9476d2438b2c",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/e7fbe976-ff74-463b-83c8-ff2fbf4c4b7c",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/99963eed-8734-4d7f-bc41-3e19bce19439",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/117375b4-f8e4-4bb0-89b7-3250b84facf9",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/f4addcf4-10b8-4407-b4e4-9a4c42fe560a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/67646cf2-27c7-468b-8b60-bda1202a8c03",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/25b98033-64b8-4034-8218-267a373a8736",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/51f7f017-7f46-426f-9ef3-e13dfcf1bf59",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/604aed45-7b0a-4e53-883b-7aaa7a549418",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/8d5bb2e2-99dd-4b12-bdfe-701eb97182c6",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/3fc227f4-31b0-4a8a-bd6d-694c59f4b751",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/65f21ae8-6f8b-4120-8007-ecc915a0be2a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/b88660ad-eeeb-47ee-b9d8-690bcdd6ee3d",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/7c7912af-cde2-43dd-84a5-cfa8ded3d68b",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/d01d50c5-153b-41e7-ab97-6854348b1677",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/2254ab9f-c1e2-4d64-94ac-f0ea310a4f0a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/de6d434d-954e-43e9-875e-5141de7a6afb",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/9fae0bc6-4fbb-4078-b65d-e5f7014211fb",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/d7ba2e0c-4b54-4c17-acfa-bb06bf1263b7",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/e7d1cdfe-fd49-42ec-bad0-b6ea4da38f5a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/7636a29e-8cc1-4bbc-b3dc-c96c1a0aecd9",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/e4189c7f-4190-4d17-8ec5-c497ab7b0838",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/0371bbe4-0d42-4288-b3f1-3c62dcfe122a",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/87f8a396-b58e-47b4-b5d6-4e43c2189901",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/e6866799-7954-41ac-933c-8c4ca189022b",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/08479d5f-bedd-407f-8be0-97757a97100e",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/cb4e591d-23b0-47c9-a5f9-1e7bd814f911",
    },
    {
      image:
        "https://cdn-images.cure.fit/www-curefit-com/image/upload/c_fill,w_300,q_auto:eco,dpr_1,f_auto,fl_progressive/image/diy/3b8525bb-ab2d-4f7c-b9b1-9476d2438b2c",
    },
  ];
  return (
    <Box m='auto' w='85%' position='relative' textAlign='center' mt='20'  >
      <Text mt='10'  fontSize='xl' fontWeight='bold'>AT-HOME</Text>
      <Heading mb='10' >Explore goal-based programs</Heading>
      <Box>
        <Swipe  slides={slides} />
      </Box>
      <Box mt='20' >
      <PriceComponent/>
      </Box>
    </Box>
  );
};

export default SliderComponent;

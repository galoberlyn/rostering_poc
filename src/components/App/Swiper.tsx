import React, { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import one from '../../assets/img/1.png';
import two from '../../assets/img/2.png';
import { Button } from "@mui/material";

interface IOnboarding {
  setBoarded: (x: boolean) => void;
}

export const Onboarding: FC<IOnboarding>  = ({ setBoarded }) => {
  const imageStyle = { width: '100%' };
  return (
    <div style={{ height: '80vh'}}>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={one} style={imageStyle} />
        </SwiperSlide>
        <SwiperSlide>
          <img src={two} style={{ width: '100%' }} />
        </SwiperSlide>
        <SwiperSlide>
          <div className="button-container">
            <h1>Rostering Dashboard (Beta)</h1>
            <Button variant="contained" size="large" onClick={() => setBoarded(true)}>
              Start Using!
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

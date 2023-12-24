import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: '150px',
  width:"450px",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Imagenes: React.FC = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <Carousel afterChange={onChange} style={{width: '450px'}}>
      <div>
        <img src="https://media4.giphy.com/media/10bKPDUM5H7m7u/giphy.gif" 
              alt="" 
              style={{...contentStyle, objectFit:"cover"}} />
      </div>
      <div>
      <img src="https://gifdb.com/images/high/superman-jumping-off-a-building-e2rhqfkokrrd1jw5.gif" 
              alt="" 
              style={{...contentStyle, objectFit:"cover"}} />
      </div>
      <div>
      <img src="https://i.gifer.com/G7ya.gif" 
              alt="" 
              style={{...contentStyle, objectFit:"cover"}} />
      </div>
      <div>
      <img src="https://comicvine.gamespot.com/a/uploads/original/11140/111403694/8627689-ezgif-2-ccd516d47b.gif" 
              alt="" 
              style={{...contentStyle, objectFit:"cover"}} />
      </div>
    </Carousel>
  );
};

export default Imagenes;   
      
      

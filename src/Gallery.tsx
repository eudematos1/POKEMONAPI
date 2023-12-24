

// import './Profile.css'; 
// import { Card } from 'antd';

// const { Meta } = Card;

// const App: React.FC = () => (
//   <Card
//     className="profile-card"
//     hoverable
//     style={{ width: 240 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="www.instagram.com" />
//   </Card>
// );

// export default function Gallery() {
//   return (
//     <section>
//       <h1>Uy PAPITAAAASSSSSSSSS</h1>
//       <App />
//       <App />
//       <App />
//     </section>
//   );
// }
// interface Superman{
//   name:string,
//   realName: string,
//   hability1: string,
//   hability2:string,
//   hability3:string,
//   image:string
// };
// const superhero :Superman ={
//   name:"Superman",
//   realName:"Clark Kent",
//   hability1:"volar",
//   hability2:"superfuerza",
//   hability3:"Ojos laser",
//   image:"https://media.revistagq.com/photos/643ffd0043b7dde5906f2d7e/1:1/w_1079,h_1079,c_limit/904934.jpg"
// };


import Logo from './clases/logo.tsx';
import Imagenes from './clases/carousel.tsx';
import Tecla from './clases/Tecla.tsx';

export default function Gallery() {
  return (
    <div style={{display:"grid", backgroundColor:"white",height:"650px", borderRadius:"20px"}}>
      <div style={{ display: "flex", alignItems: "center"}}>
        <div style={{paddingLeft:"20px"}}>
         <Logo/>
        </div>
        <div style={{ marginLeft: "50px" }}>
          <h1 style={{color:"black"}}>SuperMan</h1>
          <h2 style={{color:"#808080"}}>Clark Kent</h2>
          <button style={{ backgroundColor: "#F4EFEE", color: "black", border: "2px solid #000000", fontSize: "12px", padding: "8px 15px", margin:"3px" }}>Volar</button>
          <button style={{ backgroundColor: "#F4EFEE", color: "black", border: "2px solid #000000", fontSize: "12px", padding: "8px 15px",margin:"3px" }}>Superfuerza</button>
          <button style={{ backgroundColor: "#F4EFEE", color: "black", border: "2px solid #000000", fontSize: "12px", padding: "8px 15px",margin:"3px" }}>Ojos Rayos laser</button>
        </div>
        

      </div>
      <div style={{marginLeft:"25px"}}>
      <Imagenes/>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Tecla />
      </div>
    </div>
  );
}

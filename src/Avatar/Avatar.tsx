// export default function Avatar(){
//     return (
//         <img
//         className="avatar"
//         src="https://i.imgur.com/7vQD0fPs.jpg"
//         alt="Gregorio y. Zara"
//         />
//     );
// }
export default function Avatar() {
   
    const avatarInfo = {
      name: "Gregorio y. Zara",
      style: {
        width: "100px", 
    
      },
    };
    return (
      <img
        className="Avatar"
        src="https://i.imgur.com/7vQD0fPs.jpg"
        alt={avatarInfo.name}
        style={avatarInfo.style}
      />
    );
  }
  
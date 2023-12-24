const User = ({id,email,name}) => {
  return (
    <div className="list">
      <span>Nombre : {name}       </span>
      <span>Email:{email}</span>
    </div>
  )
}
export default User

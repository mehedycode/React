export default function Display({friend}) {
  const {name, email} = friend
  return (
  
    <div className="box">
      <h2>name: {name}</h2>
      <h3>Email: {email}</h3>
    </div>
)
}
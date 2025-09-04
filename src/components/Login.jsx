import React, {useState, useContext} from 'react'
import UserContext from '../context/Usercontext'

function Login() {


    const[username, setUsername] = useState('')
    const[password, setPassword] = useState('')

  const { user, setUser } = useContext(UserContext)

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username });
  }
  return (
    <div>

        <h2>Login</h2>
    <input
      type="text"
      value={username}
      onChange={e => setUsername(e.target.value)}
      placeholder='Username'
    />
    <input
      type="password"
      value={password}
      onChange={e => setPassword(e.target.value)}
      placeholder='Password'
    />
    <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
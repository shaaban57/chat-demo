import { useState } from "react"
import axios from "axios"

const LoginForm = () => {
    const [username, setusername] = useState("")
    const [password, setpassword] = useState("")
    const [error, seterror] = useState("")
    const handleSubmit =async (e) =>{
        e.preventDefault();
        const authObject = {"Project-ID": "3bb73102-e21c-464f-830f-e3b4fd91c83b", 'User-Name': username, 'User-Secret': password }
        try {
            await axios.get('https://api.chatengine.io/chats',{headers: authObject});

            localStorage.setItem('username',username);
            localStorage.setItem('password',password);

            window.location.reload();
        } catch (error) {
            seterror('Oops, incorrect username or password.');
        }
    }
    return (
        <div className="wrapper">
            <div className="form">
                <h1 className="title"> Shaaban Chat App</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" value={username} onChange={(e)=> setusername(e.target.value)} className="input" placeholder="Username" required />
                    <h5 className="error">you can try brett57 for demo</h5>
                    <input type="password" value={password} onChange={(e)=> setpassword(e.target.value)} className="input" placeholder="password" required />
                    <h5 className="error">you can try asd123123 for demo</h5>
                    <div align="center">
                        <button type="submit" className="button">
                            <span>Start Chatting</span>
                        </button>
                    </div>
                    <h5 className="error">please use vpn if you are in syria</h5>
                    <h2 className="error">{error}</h2>
                </form>
            </div>
        </div>
    )
}

export default LoginForm

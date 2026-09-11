import { useState } from "react"
import "./SignupPage.css"

const NATIONALITIES = [
  { code: "fi", label: "Finnish", greeting: "Moi"},
  { code: "en", label: "English", greeting: "Hello"},
  { code: "de", label: "German", greeting: "Hallo"},
  { code: "fr", label: "French", greeting: "Bonjour"}
]

function SignupPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    nationality: "fi"
  })

  const handleChange = (event) => {
    const {name, value} = event.target;
    setForm({...form, [name]: value});
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
  }

  const confirmPassword = (password, cfPassword) => {
    if (cfPassword !== "" &&password !== cfPassword) return "Passwords do not match!"
    
    return ""
  }

  const greeting = NATIONALITIES.find((n) => n.code === form.nationality)?.greeting ?? "";
  const passwordError = confirmPassword(form.password, form.confirmPassword)
  
  return (
    <div className="signup-page">
      <h1>Sign Up</h1>

      <form onSubmit={handleSubmit}>
<div className="spacer"></div>
        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" value={form.email} onChange={handleChange}/>

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="password" value={form.password} onChange={handleChange}/>
      
      <label htmlFor="confirmPassword">Confirm your password</label>
      <input type="password" name="confirmPassword" id="confirmPassword" value={form.confirmPassword} onChange={handleChange}/>
      {passwordError && <p className="hint hint-error">{passwordError}</p>}


      <label htmlFor="nationality">Nationality</label>
      <select name="nationality" id="nationality" value={form.nationality} onChange={handleChange}>

        {
          NATIONALITIES.map((n) => (
            <option key={n.code} value={n.code}>{n.label}</option>
          ))
        }
      </select>

      <button type="submit">Sign up</button>

    
      </form>

      <div className="signup-output">
      <h2>{greeting}</h2>
      <p>Your email is {form.email}</p>
      </div>

    </div>
  )
}

export default SignupPage


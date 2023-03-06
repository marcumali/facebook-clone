import React, {useState} from 'react'
import Form from 'react-bootstrap/Form'

const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

const Input: React.FC<Props> = ({ label, value, alert, placeholder }) => {
	return (
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>{label}</Form.Label>
      <input type={passwordShown ? "text" : "password"} placeholder={placeholder} value={value}/>
      { alert && <Form.Text className="text-danger" >{alert}</Form.Text> }
      
      <button onClick={togglePassword}>Show Password</button>
    </Form.Group>
	)
}

interface Props {
	label?: string
  value?: string
  placeholder?: string
  alert?: string
}

export default Input

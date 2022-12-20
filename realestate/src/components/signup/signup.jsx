import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./styles.module.css";

const Signup =()=>{
    const [data, setData] = useState({email:"", password:""});

    const [error, setError] = useState("");
	const navigate = useNavigate();

    const handleChange = ({currentTarget:input})=>{
        setData({...data,[input.name]:input.value})
    }

    const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:3001";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};
    return(
        <div className={styles.signup_container}>
            <div className={styles.signup_form_container}>
                <div className={styles.left}>
                    <h3>Welcome</h3>
                    <Link to="/signin"><button type="button" className={styles.white_btn}>Sign in</button></Link>
                </div>
                <div className={styles.right}>
                    <form className={styles.form_container} onSubmit={handleSubmit}>
                        <h3>Create Account</h3>
                        <input type="email" placeholder="Mail ID" name="email" 
                        onChange={handleChange} value={data.email} className={styles.input}/>

                        <input type="text" placeholder="Password" name="password"
                        onChange={handleChange} value={data.password} className={styles.input}/>
                        <input type="text" placeholder="Confirm Password" name= "cpassword"
                        className={styles.input}/>
                        {error && <div className={styles.error_msg}>{error}</div>}
                        <button type="submit" className={styles.green_btn}>Sign up</button>
                    </form>
                </div>
            </div>
        </div>
        
    )
}
export default Signup
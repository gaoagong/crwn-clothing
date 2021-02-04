import React from "react"
import SignInAndSignUpPage from "../../pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import FormInput from "../form-input/form-input.component"
import CustomButton from "../custom-button/custom-button.component"
import "./sign-in.styles.scss"

class SignIn extends React.Component {
    constructor(params) {
        super(params);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setSetate({email: '', password: ''});
    }

    handleChange = event => {
        const {value, name} = event.target;

        this.setState({ [name]: value});
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with you username and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name="email" 
                        type="email"
                        value={this.state.email} 
                        handleChange={this.handleChange} 
                        label="email"
                        required/>
                    <FormInput 
                        name="password"
                        type="password"
                        value={this.state.password} 
                        handleChange={this.handleChange}
                        label="password"
                        required />

                    <CustomButton type='submit' value='Submit Form'>Sign In</CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;
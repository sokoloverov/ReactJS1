import { useState } from "react";
import { Link } from "react-router-dom";
import { signUp } from "../../servises/firebase";
import { SignForm } from "../SignForm"

export const SignUp = () => {
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handlerSignUp = async (email, pass) => {
        setLoading(true);
        try {
            await signUp(email, pass);
        } catch (err) {
            console.log(err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };
    return (
        <>
            <SignForm onSubmit={handlerSignUp} error={error} loading={loading} />
            <Link to='/'>РЕГИСТРАЦИЯ</Link>
        </>
    )
};
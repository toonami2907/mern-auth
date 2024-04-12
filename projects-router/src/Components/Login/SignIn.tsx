import { useState } from "react";
import { Link, useNavigate } from "react-router-dom"
import { signInStart, signInFailure, signInSuccess } from "../../redux/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { OAuth } from "../OAuth";

export const SignIn = () => {
    const [formData, setFormData] = useState({});
    const { loading, error } = useSelector((state) => state.user);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleChange = (e: { target: { id: any; value: any; }; }) => {
        setFormData({ ...formData, [e.target.id]: e.target.value });
    }

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        try {
            dispatch(signInStart());
            const res = await fetch('/api/User/SignIn', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await res.json();
            if (data.success === false) {
                dispatch(signInFailure(data));
                return;
            }
            dispatch(signInSuccess(data));
            navigate('/');
        } catch (error) {
            dispatch(signInFailure(error));
        }
    }

    return (
        <div className="h-[400px] ">
            <div className="w-[80%] mx-auto h-full flex  flex-col justify-center items-center" >
                <h1 className="text-2xl font-semibold  text-black font-serif mb-1">Login Here</h1>
                <form onSubmit={handleSubmit} className="w-[60%] h-[50%] gap-3 flex flex-col justify-center items-center mx-auto">
                    <input type="email" id="email" onChange={handleChange} placeholder="Email" className="bg-slate-100 rounded-lg w-[300px] lg:w-[70%] p-3 " />
                    <input type="Password" onChange={handleChange} id="password" placeholder="Password" className="bg-slate-100 rounded-lg w-[300px] lg:w-[70%] p-3 " />
                    <button className="p-3 bg-slate-900 w-[70%] disabled:bg-slate-700 rounded-lg text-white hover:bg-orange-600">  {loading ? 'Loading....' : 'SIGN IN'}</button>
                    <OAuth/>
                    <Link className="text-lg mb-4" to='/SignUp'>Create an Account</Link>
                </form>
                <p className="text-red-700 mt-5 text-lg ">
                    {error ? error.message || 'Something went wrong!' : ''}
                </p>
            </div>
        </div>
    )
}

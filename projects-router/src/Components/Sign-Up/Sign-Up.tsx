import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { OAuth } from "../OAuth";

export const SignUp = () => {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const HandleChange = (e: { target: { id: any; value: any; }; }) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(formData);
  }
  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    try {
      setLoading(true);
      setError(false);
      const res = await fetch('/api/User/SignUp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      setLoading(false);
      if(data == error){
        setError(true);
        return;
      }
      navigate('/SignIn');

    } catch (error) {
      setLoading(false);
      setError(true);
    }

  }

  return (
    <div className="h-[400px] ">
      <div className="w-[80%]  mx-auto h-full flex  flex-col justify-center items-center" >
        <h1 className="text-2xl font-semibold  text-black font-serif mb-2">Sign Up Here</h1>
        <form onSubmit={handleSubmit} className="w-[60%] h-[60%] gap-3 flex flex-col justify-center items-center mx-auto">
          <input type="text" id="username" placeholder="username" onChange={HandleChange} className="bg-slate-100 rounded-lg w-[300px] lg:w-[70%] p-3 " />
          <input type="email" id="email" placeholder="email" onChange={HandleChange} className="bg-slate-100 rounded-lg w-[300px] lg:w-[70%] p-3 " />
          <input type="password" id="password" placeholder="password" onChange={HandleChange} className="bg-slate-100 rounded-lg w-[300px] lg:w-[70%] p-3 " />
          <button disabled={loading} className="p-3 bg-slate-900 w-[70%] disabled:bg-slate-700 rounded-lg text-white hover:bg-orange-600 font-medium text-lg">
                {loading ? 'loading....' : 'SIGN UP'}
          </button>
          <OAuth/>
          <Link className="mb-5" to='/SignIn'>Sign In into account </Link>
        </form>
        {error && (
          <p className="text-red-700 mt-5 ">
            Something went wrong. Please try again.
          </p>
        )}
      </div>
    </div>
  )
}

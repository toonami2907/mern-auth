import { GoogleAuthProvider, getAuth, signInWithPopup, } from 'firebase/auth';
import { app } from '../firebase';
import { useDispatch } from 'react-redux';
import { signInFailure, signInSuccess } from '../redux/user/userSlice';
import { useNavigate } from 'react-router-dom';

export const OAuth = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const HandleGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app)
      const result = await signInWithPopup(auth, provider);
      const res = await fetch('/api/User/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          profilePhoto: result.user.photoURL,
        }),
      });
      const data = await res.json();
      
      dispatch(signInSuccess(data));
      navigate('/')
    } catch (error) {
      dispatch(signInFailure(error));
    }
  }
  return (
    <button type='button' onClick={HandleGoogle} className='bg-red-700 text-white rounded-lg p-3 uppercase hover:opacity-95 w-[70%]'>Continue With Google</button>
  )
}

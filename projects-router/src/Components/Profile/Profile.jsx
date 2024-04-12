import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { app } from "../../firebase";
import { DeleteUserFailure, DeleteUserStart, DeleteUserSuccess, signOut, updateUserFailure, updateUserStart, updateUserSuccess } from "../../redux/user/userSlice";
// Ensure the correct import for useDispatch
import { useDispatch } from "react-redux";

export const Profile = () => {
  const { currentUser, loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch(); // Use useDispatch to get the dispatch function
  const fileRef = useRef(null);
  const [image, setImage] = useState(null);
  const [percent, setPercent] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [formData, setFormData] = useState({});
  const [updateSuccess, setUpdateSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
    console.log(setFormData);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      dispatch(updateUserStart());
      const res = await fetch(`/api/User/update/${currentUser._id}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(updateUserFailure(data));
        return;
      }
      dispatch(updateUserSuccess(data));
      console.log(data);
      setUpdateSuccess(true);
    } catch (error) {
      // Handle error
      dispatch(updateUserFailure(error));
    }
  }

  useEffect(() => {
    if (image) {
      handleImageUpload(image);
    }
  }, [image]);

  const handleImageUpload = async (image) => {
    const storage = getStorage(app);
    const fileName = new Date().getTime() + image.name;
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, image);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        setPercent(Math.round(progress));
      },
      (error) => {
        setImageError(true);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
          setFormData({ ...formData, profilePhoto: downloadUrl });
        });
      }
    );
  };

  const handleDeleteAccount = async () => {
    dispatch(DeleteUserStart())
    try {
      const res = await fetch(`/api/User/delete/${currentUser._id}`, {
        method: "DELETE"
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(DeleteUserFailure(data));
        return;
      }
      dispatch(DeleteUserSuccess(data));
    } catch (error) {
      dispatch(DeleteUserFailure(error))
    }
  };

  const handleSignOut = async () => {
    try {
      await fetch('/api/User/SignOut');
      dispatch(signOut())
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form action="" onSubmit={handleSubmit} className="flex flex-col gap-4 ">
        <input type="file" ref={fileRef} hidden accept="image/*" onChange={(e) => setImage(e.target.files?.[0] || null)} />
        <img src={formData.profilePhoto || currentUser.profilePhoto} alt="profile photo" onClick={() => fileRef.current?.click()} className="w-[80px] h-[80px] self-center cursor-pointer object-cover rounded-full mt-2" />
        <p className="text-sm self-center">
          {imageError ? (
            <span className="text-red-700">Error uploading image (File must be Image)</span>
          ) : percent > 0 && percent < 100 ? (
            <span className="text-slate-700">{`Uploading: ${percent}%`}</span>
          ) : percent === 100 ? (
            <span className="text-green-600">Uploaded Image successfully</span>
          ) : ("")}
        </p>
        <input defaultValue={currentUser.username} onChange={handleChange} type="text" placeholder="Username" id="username" className="bg-slate-100 rounded-lg p-3" />
        <input defaultValue={currentUser.email} autoComplete="username" onChange={handleChange} type="email" placeholder="Email" id="email" className="bg-slate-100 rounded-lg p-3" />
        <input type="password" placeholder="Password" id="password" onChange={handleChange} autoComplete="current-password" className="bg-slate-100 rounded-lg p-3" />
        <button className="bg-slate-700 text-white p-3  font-semibold rounded-lg uppercase hover:opacity-95 disabled:opacity-80">
          {loading ? 'Loading ..' : 'Update'}
        </button>
      </form>
      <div className="flex justify-between mt-5">
        <span onClick={handleDeleteAccount} className="text-red-700 cursor-pointer">Delete Account</span>
        <span onClick={handleSignOut} className="text-red-700 cursor-pointer">Sign Out</span>
      </div>
      <p className="text-red-700  mt-5">{error && "Something went wrong"}</p>
      <p className="text-green-700  mt-5">{updateSuccess && "User is Updated Successfully"}</p>
    </div>
  );
};

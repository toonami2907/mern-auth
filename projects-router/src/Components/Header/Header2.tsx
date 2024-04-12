import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';
import { ShoppingCart } from "lucide-react";

interface User {
    username: string;
    profilePhoto: string;
}

interface RootState {
    user: {
        currentUser: User | null;
    }
}

export default function AnotherHeader() {
    const { currentUser } = useSelector((state: RootState) => state.user);

    return (
        <header className="bg-gray-900 text-white py-4">
            <nav className="container mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-bold">
                    LOGO
                </Link>
                <ul className="flex space-x-6">
                    <li>
                        <NavLink to="/" activeClassName="border-b-2 border-white">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="border-b-2 border-white">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Cart" activeClassName="border-b-2 border-white">
                            <ShoppingCart size={30}/>
                        </NavLink>
                    </li>
                </ul>
                <div className="flex items-center">
                    {currentUser ? (
                        <div className="flex items-center">
                            <Link to="/profile" className="text-gray-200 hover:text-gray-400 mr-4">
                                <img src={currentUser.profilePhoto} alt="Profile" className="w-8 h-8 rounded-full" />
                                <span className="ml-2">{currentUser.username}</span>
                            </Link>
                        </div>
                    ) : (
                        <div>
                            <Link to="/signin" className="text-gray-200 hover:text-gray-400 mr-4">Sign in</Link>
                            <Link to="/signup" className="text-gray-200 hover:text-gray-400">Sign up</Link>
                        </div>
                    )}
                </div>
            </nav>
        </header>
    );
}

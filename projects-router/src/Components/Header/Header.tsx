import { Link, NavLink } from "react-router-dom";
import { useSelector } from 'react-redux';

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
                        <NavLink to="/services" activeClassName="border-b-2 border-white">Services</NavLink>
                    </li>
                    <li>
                        <NavLink to="/contact" activeClassName="border-b-2 border-white">Contact</NavLink>
                    </li>
                </ul>
                <div>
                    {currentUser ? (
                        <Link to="/profile" className="text-gray-200 hover:text-gray-400 mr-4">Profile</Link>
                    ) : (
                        <Link to="/signin" className="text-gray-200 hover:text-gray-400 mr-4">Sign in</Link>
                    )}
                    {currentUser ? (
                        <Link to="/signout" className="text-gray-200 hover:text-gray-400">Sign out</Link>
                    ) : (
                        <Link to="/signup" className="text-gray-200 hover:text-gray-400">Sign up</Link>
                    )}
                </div>
            </nav>
        </header>
    );
}

import { Link } from "react-router-dom";
const NavBar = () => {
    return (
        <div className="h-16 w-full flex justify-around items-center border-1 border-gray-200 ">
            <div>
                <p className="text-sm md:text-xl font-bold text-amber-50">Blog Verse</p>
            </div>
            <div>
                <button className="text-amber-50 px-5 ml-[20px] py-2 font-semibold rounded-lg hover:bg-gray-200 hover:text-gray-800">Home</button>
            </div>
            <div className="items-center flex gap-5">
                <div>
                    <Link to="/signin" className="text-amber-50 font-semibold">Sign In</Link>
                </div>
                <div>
                    <Link to="/signup" className=" bg-[#102a68] font-semibold text-white px-4 py-2 rounded-lg">Sign Up</Link>
                </div>
            </div>


        </div>
    )
}
export default NavBar;
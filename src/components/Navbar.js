import React from "react";

const Navbar = () => {
    return <div className=" flex flex-col justify-between h-12">

        <div className="flex w-full  justify-center items-center border-b h-12">
            <div className="flex justify-center w-4/12 ">
                <h1 className="flex justify-center hover:bg-blue-500 bg-white text-blue-500 hover:text-white border-none font-semibold rounded-3xl p-2 border-black border w-1/4">OnlineEdu</h1>
            </div>
            <div className="flex text-gray-500 items-center justify-around w-4/12">
                <div className="hover:bg-blue-500 cursor-pointer hover:text-white p-2 rounded-md">
                    Home
                </div>
                <div className="hover:bg-blue-500 cursor-pointer hover:text-white p-2 rounded-md">
                    Contact
                </div>
                <div className="hover:bg-blue-500 cursor-pointer hover:text-white p-2 rounded-md">
                    Galery
                </div>
                <div className="hover:bg-blue-500 cursor-pointer hover:text-white p-2 rounded-md">
                    Login
                </div>
                <div className="hover:bg-blue-500 cursor-pointer hover:text-white p-2 rounded-md">
                    Sign In
                </div>
            </div>
            <div className="flex w-4/12 justify-center items-center">
                <div className="flex justify-around items-center w-2/4">
                    <div className="flex justify-center items-center w-3/12 h-10 rounded-full bg-blue-500 hover:bg-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>

                    </div>
                    <div className="flex justify-center items-center w-3/12 h-10 rounded-full bg-blue-500 hover:bg-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>


                    </div>
                    <div className="flex justify-center items-center w-3/12 h-10 rounded-full bg-blue-500 hover:bg-blue-800">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="w-6 h-6 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>


                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default Navbar;

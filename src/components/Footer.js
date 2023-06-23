import React from "react"
import pic5 from "../images/pic5.png";

function Footer () {

    return (
        <footer class="bg-lgreen shadow m-0">
            <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                <div class="sm:flex sm:items-center sm:justify-between">
                    <a href="#" class="flex items-center mb-4 sm:mb-0">
                        <img src={pic5} class="h-8 mr-3" alt="Logo" />
                        <span class="self-center text-2xl whitespace-nowrap text-white font-manrope font-light">AVOCADOS</span>
                    </a>
                    <ul class="flex flex-wrap items-center mb-6 text-sm font-manrope font-light text-white sm:mb-0">
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">About</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                        </li>
                        <li>
                            <a href="#" class="mr-4 hover:underline md:mr-6 ">Licensing</a>
                        </li>
                        <li>
                            <a href="#" class="hover:underline">Contact</a>
                        </li>
                    </ul>
                </div>
                <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <span class="block text-sm text-white sm:text-center font-manrope font-light">© 2023 <a href="#" class="hover:underline">Avocados™</a>. All Rights Reserved.</span>
            </div>
        </footer>
    );
}

export default Footer;
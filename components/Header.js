import { useRouter } from 'next/router';
import { useRef } from "react";

function Header() {
    const router = useRouter();
    const artistInputRef = useRef(null);
    const songTitleInputRef = useRef(null);

    const handleSearch = (e) => {
        e.preventDefault();
        const artist = artistInputRef.current.value;
        const song = songTitleInputRef.current.value;
        if (!artist || !song) return;

        router.push(`/search?artist=${artist}&song=${song}`);
    };

    return (
        <header className="flex w-full  p-6 justify-center border-b sticky top-0 z-50 bg-[#4f0e4f]">
            <form className="flex flex-row items-center">
                <div className="flex mt-2 mr-10 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <input type="text" ref={artistInputRef} placeholder="Artist name" className="flex-grow focus:outline-none bg-transparent"/>
                </div>

                <div className="flex mt-2 mr-10 hover:shadow-lg focus-within:shadow-lg max-w-md rounded-full border border-gray-200 px-5 py-3 items-center sm:max-w-xl lg:max-w-2xl">
                    <input type="text" ref={songTitleInputRef} placeholder="Song title" className="flex-grow focus:outline-none bg-transparent"/>
                </div>

                <div className="form-group-3">
                    <button type="submit" onClick={handleSearch} className="bg-gray-400 p-3 rounded-3xl text-pink-800">Get</button>
                </div>
            </form>
        </header>
    );
}

export default Header;
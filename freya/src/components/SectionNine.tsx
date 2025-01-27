import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function SectionNine() {
    return (
        <div className="text-center flex justify-center bg-gray-300 mt-32 h-20 items-center text-lg">
            <FaFacebookF className="text-gray-600"/>
            <FaTwitter className="mx-3 text-gray-600"/>
            <FaInstagram className="text-gray-600"/>
        </div>
    )
}

export default SectionNine
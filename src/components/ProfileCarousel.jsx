import React from "react";
import cali from "../images/cali.jpeg";
import lolaaspen from "../images/lolaaspen.jpeg";
import ramen from "../images/gay.jpeg";
export default function ProfileCarousel() {
    return (
        <div className="flex justify-center items-center h-screen bg-gray-200">
            <div className="w-64 h-64 bg-white rounded-lg shadow-md">
                <img src={cali} alt="Cali" className="w-full h-full object-cover" />
        </div>
        <div className="w-64 h-64 bg-white rounded-lg shadow-md mx-4">
            <img
            src={lolaaspen}
            alt="Lola Aspen"
            className="w-full h-full object-cover"
        />
        </div>
        <div className="w-64 h-64 bg-white rounded-lg shadow-md">
            <img src={ramen} alt="Ramen" className="w-full h-full object-cover" />
        </div>
        </div>
    );
}


import React from 'react';

function Card() {
    const cardList = [
        {
            id: '01',
            image: '/HouseImage1.jpg',
            title: 'Property Showcase',
            description: 'Elegant, high-impact visuals that elevate each property’s unique essence.',
        },
        {
            id: '02',
            image: '/HouseImage2.jpg',
            title: 'Site Planning',
            description: 'Smart, refined layouts that seamlessly harmonize with the natural landscape.',
        },
        {
            id: '03',
            title: 'Building Design',
            image: '/HouseImage3.jpg',
            description: 'Timeless architecture blending form, function, and sophistication.',
        },
        {
            id: '04',
             image: '/HouseImage3.jpg',
            title: 'Space Planning',
            description: 'Purposeful interiors designed for flow, balance, and quiet luxury.',
        }
    ];

    return (
        <div className="min-h-screen bg-[#2A2A2A] text-white px-10 py-16">
            <h2 className="text-5xl font-bold mb-12 text-center ">OUR SERVICES</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                {cardList.map((card) => (
                    <div key={card.id} >
                        <img

                             src={card.image}
                            className="w-full h-56 hover:scale-110 transition "

                        />
                        <div className="p-6 ">
                            <h3 className="text-3xl font-bold text-white mb-2  ">{card.id}</h3>
                            <h4 className="text-xl font-semibold mb-2 ">{card.title}</h4>
                            <p className="text-black-300 text-2xl ">{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Card;


import React, { useState } from 'react'

export const BTCar = () => {
    const [imgSrc, setImgSrc] = useState('images/red-car.jpg')

    const handleChangeImgSrc = (color) => {
        setImgSrc(`images/${color}-car.jpg`)
    }

    return (
        <div className="mt-10">
            <h1>Bài tập Car</h1>

            <div className="grid grid-cols-12 gap-5">
                <div className="col-span-6">
                    <img className="w-full" src={imgSrc} />
                </div>
                <div className="col-span-6 space-x-4">
                    <button
                        className="bg-red-500 px-3 py-2 text-white"
                        onClick={() => {
                            setImgSrc('images/red-car.jpg')
                        }}
                        // onClick={() => handleChangeImgSrc('red')}
                    >
                        Red
                    </button>
                    <button
                        className="bg-black px-3 py-2 text-white"
                        onClick={() => {
                            setImgSrc('images/black-car.jpg')
                        }}
                        // onClick={() => handleChangeImgSrc('black')}
                    >
                        Black
                    </button>
                    <button
                        className="bg-gray-500 px-3 py-2 text-white"
                        onClick={() => {
                            setImgSrc('images/silver-car.jpg')
                        }}
                        // onClick={() => handleChangeImgSrc('silver')}
                    >
                        Silver
                    </button>
                    <button
                        className="bg-gray-700 px-3 py-2 text-white"
                        onClick={() => {
                            setImgSrc('images/steel-car.jpg')
                        }}
                        // onClick={() => handleChangeImgSrc('steel')}
                    >
                        Steel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default BTCar

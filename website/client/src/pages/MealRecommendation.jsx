import React from 'react'
import Food1Img from "../assets/food1.svg"
import Food2Img from "../assets/food2.svg"

export default function FoodDisorder() {
    return (
        <div>
            <div className='text-center text-6xl font-base'>Meal Recommendation</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div class="h-2 bg-tertiary rounded-t-md"></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold text-2xl pt-4"> What I had today? </label>
                            <textarea type="text" placeholder="Name" class="border w-full text-xl h-24 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block font-semibold text-2xl pt-4"> My today's report? </label>
                            <textarea type="text" placeholder="Name" class="border w-full text-xl h-24 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block font-semibold text-2xl pt-4"> Food recommendations </label>
                            <ul className="ml-5 py-1 text-xl">
                                <li className="list-disc">Burger</li>
                                <li className="list-disc">Pizza</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={Food1Img} alt="img" width="422" height="422" />
                </div>
            </div>

        </div>
    )
}

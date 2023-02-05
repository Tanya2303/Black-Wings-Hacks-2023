import React from 'react'
import BookTherapyImg from "../assets/book_therapy.svg"

export default function BookYoga() {
    return (
        <div>
            <div className='text-center text-6xl font-base text-white'>Book Therapy Sessions</div>

            <div className='md:grid md:grid-cols-2 items-center px-16 pb-8'>
                <div className=''>
                    <div class="mt-4 bg-white shadow-md rounded-lg text-left">
                        <div class="h-2 bg-tertiary rounded-t-md"></div>
                        <div class="px-8 py-6 ">
                            <label class="block font-semibold text-2xl pt-4"> Your Name </label>
                            <input type="text" placeholder="Name" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label class="block font-semibold text-2xl pt-4"> Reason for the session? </label>
                            <input type="text" placeholder="Reason" class="border w-full text-xl h-6 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md" />

                            <label for="sttend" class="block font-semibold text-2xl pt-4"> Attend session online or offline?</label>

                            <select name="sttend" id="sttend" className='text-xl w-28'>
                                <option className='text-xl w-16' value="Online">Online</option>
                                <option className='text-xl w-16' value="Offline">Offline</option>
                            </select>

                            <label for="bookDate" class="block font-semibold text-2xl pt-4">Book a date:</label>
                            <input type="date" id="bookDate" name="bookDate" className='text-xl'></input>

                            <div className=''>
                                <button class="my-2 bg-tertiary text-white py-2 px-6 rounded-md text-xl">Submit</button>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="grid place-items-center py-4 drop-shadow-3xl shadow-black">
                    <img src={BookTherapyImg} alt="img" width="422" height="422" />
                </div>
            </div>
        </div>
    )
}

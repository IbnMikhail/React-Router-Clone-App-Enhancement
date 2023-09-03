 import React from 'react'
 
 const Faq = () => {
   return (
    <>
    <div className='bg-black'>
            <div class="mb-20 pt-20">
                <h1 class="text-center text-6xl max-[960px]:text-4xl text-white font-bold">Frequently Asked Questions</h1>
            </div>
            
            <div class="text-white mb-10 mt-10 w-[70%] max-[1280px]:w-[90%] mx-auto">

                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">What is Netflix?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">How mush does Netflix cost?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">Where can I watch?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">How do I cancel?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">What can I watch on Netflex?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
                <div class="flex justify-between h-[80px] max-[960px]:h-[70px] bg-[rgb(35,35,35)] mt-2 items-center hover:bg-[rgb(77,77,77)]">
                    <div class="ml-5 font-semibold text-xl">Is Netflex good for Kids?</div>
                    <div class="mr-5"><i class="fa-solid fa-plus"></i></div>
                </div>
            </div>


            <div>
                <p class="text-center text-white text-lg font-medium">Ready to watch? Enter your email to create or restart your membership.</p>
            </div>
           
            <div class="flex flex-wrap justify-center mb-20 mt-10">
                <div>
                    <input type="email" name="" id="mail" placeholder="Email address" class=" text-white bg-[rgba(0,0,0,0.29)] border border-gray-400 rounded p-4 w-[400px] font-medium max-[960px]:w-[300px] max-[300px]:w-[230px]"/>
                </div>
                <div>
                    <button class="bg-red-600 p-3 rounded  flex items-center font-bold ml-5 w-60 max-[960px]:w-40 max-[960px]:p-4 max-[480px]:mt-3">
                        <p class="mx-auto text-2xl max-[960px]:text-xl text-white"><label for="mail">Get Started</label></p>
                    </button>
                </div>
            </div>
        </div>
        <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>
        
   
    
     </>
   )
 }
 
 export default Faq
 
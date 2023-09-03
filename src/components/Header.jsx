import React from 'react';
import Nav from './Nav';


const Header = () => {
  return (
    <>
    <div class="overflow-hidden w-full h-[95vh] -mt-10">
    <img alt=""src="https://assets.nflxext.com/ffe/siteui/vlv3/855ed6e2-d9f1-4afd-90da-96023ec747c3/e480152b-ee6f-47a4-822c-62a016ed4c8c/NG-en-20230828-popsignuptwoweeks-perspective_alpha_website_large.jpg" class="object-cover scale-125 -translate-y-[10%] h-full w-full "/>
    {/* <!-- background img filtter --> */}
    <div class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-[#000000cf] to-[#000000cf] via-[#0000005a] h-[95vh]"></div>
    <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>
</div>

<div class="flex justify-center">
    <div class="absolute top-0 flex justify-center flex-col items-center h-[95vh] max-[960px]:h-[78vh] max-[960px]:mt-20 max-[600px]:h-[72vh] text-white font-extrabold text-center max-[480px]:mt-10">
        <div>
            <p class="text-5xl  max-[960px]:text-3xl max-[480px]:text-2xl">Unlimited movies,TV shows and more</p>
        </div>
        <div class="mt-5 mb-5">
            <p class="font-medium text-2xl  max-[960px]:text-lg max-[480px]:text-base">Watch anywhere.Cancel anytime.</p>
        </div>
        <div class="mb-3">
            <p class="font-medium text-2xl  max-[960px]:text-lg max-[480px]:text-base">Ready to watch? Enter your email to create or restart your membership.</p>
        </div>
      
        <div class="flex flex-wrap justify-center">
            <div>
                <input type="email" name="" id="email" placeholder="Email address" class=" text-white bg-[rgba(0,0,0,0.29)] border border-gray-400 rounded p-4 w-[400px] font-medium max-[960px]:w-[300px] placeholder:text-white max-[300px]:w-[230px]"/>
            </div>
            <div>
                
                <button class="bg-red-600 p-3 rounded  flex items-center font-bold ml-5 w-60 max-[960px]:w-40 max-[480px]:mt-3">
                    <p class="mx-auto text-2xl max-[960px]:text-xl"><label for="email">Get Started</label></p>
                </button>
            </div>
        </div>
    </div>
</div>
</>
     
   
  );
};

export default Header

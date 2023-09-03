import React from 'react'

const Row = () => {
  return (

    
    <div className='bg-black'>
    <div class="h-fit w-full flex items-center justify-center flex-wrap">
            <div class="text-white text-center mb-20 mt-20">
                <h2 class="text-5xl font-bold">Enjoy on your TV</h2>
                <p class="font-medium text-2xl mt-5 w-[600px] max-[600px]:w-full">Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
            </div>
            <div class="relative flex justify-center mb-20 mt-20">
                <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" class=" z-10 relative w-[70%]"/>
                <div class="absolute top-[21%] left-[24%]  max-h-[54%] max-w-[53%] overflow-hidden">
                    <video autoplay="" playsinline="" muted="" loop=""><source src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v" type="video/mp4"/></video>
                </div>
            </div>
        </div>
        <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>


        {/* <!-- beginning of row 2 --> */}
        <div class="h-fit w-full flex items-center justify-evenly flex-wrap-reverse">
            <div class="relative">
                <img src="https://netflixc.netlify.app/images/misc/home-mobile.jpg" alt="" class=" mx-auto mb-20 mt-20"/>

                    <div class="flex h-18 items-center justify-between border bg-black rounded-xl py-5 absolute w-full top-80">

                            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" class="w-[51px] h-18 ml-4" alt=""/>

                            <h2 class="text-white">Stranger Things <br/>
                                <span class="text-blue-600">
                                    Downloading...
                                </span> 
                            </h2>
                       
                            <i class="fa-solid fa-download text-white mr-8"></i>
                        
                    </div>
            </div>
            <div class="text-white text-center">
                <h2 class="text-5xl font-bold w-[600px] max-[900px]:w-full max-[900px]:mt-28">Download your shows to watch offline</h2>
                <p class="font-medium text-2xl mt-5 w-[500px] max-[900px]:w-full">Save your favourites easily and always have something to watch.</p>
            </div>
        </div>
        <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>


        {/* <!-- beginning of row 3 --> */}
        <div class="h-fit w-full flex items-center justify-center flex-wrap">
            <div class="text-white text-center mb-20 mt-20">
                <h2 class="text-5xl font-bold">Watch everywhere</h2>
                <p class="font-medium text-2xl mt-5 w-[600px] max-[600px]:w-full max-[1240px]:w-full">Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            
        </div>
        <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>


        {/* <!-- beginning of row 4 --> */}
        <div class="h-fit w-full flex items-center justify-evenly flex-wrap-reverse">
            <div class="relative">
                <img src="https://occ-0-3752-2164.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d" alt="" class=" mx-auto mb-20 mt-20"/>
            </div>
            <div class="text-white text-center mb-20 mt-20">
                <h2 class="text-5xl font-bold w-[600px] max-[1240px]:w-full">Create profiles for kids</h2>
                <p class="font-medium text-2xl mt-5 w-[500px] max-[1240px]:w-full">Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
        </div>
        <hr class="border border-[rgb(35,35,35)] h-2 w-full absolute bg-[rgb(35,35,35)]"/>
      </div>
  )
}

export default Row

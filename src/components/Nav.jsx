import React from 'react'

const Nav = () => {
  return (
    <div>
      <nav class="shadow-black">
        <div class="flex justify-around relative top-7 z-10 ml-10 items-center max-[1020px]:justify-between">
            {/* <!-- netflix icon --> */}
            <div class="-ml-48 max-[1020px]:-ml-0 max-[350px]:-ml-5">
                <img src="https://cdn.icon-icons.com/icons2/2699/PNG/512/netflix_official_logo_icon_168085.png" alt="" class="h-10 w-[148px] max-sm:h-6 max-sm:w-24"/>
            </div>
            <div class="-mr-64 max-[1020px]:-mr-0">
                <ol class="inline-flex text-white">
                    {/* <!-- nav select list --> */}
                    <li class="border border-gray-400 rounded w-32  flex items-center h-8 mr-4 max-[600px]:w-[54px]">
                        <i class="fa-solid fa-globe absolute ml-2"></i>
                        <select name="" id="" class="bg-transparent w-32 pl-8 font-bold h-8 max-[600px]:w-[52px]">
                            <option value="English">
                               English
                            </option>
                            
                        </select>
                    </li>
                    <li>
                        {/* <!-- nav button --> */}
                        <button class="bg-red-600 px-3 rounded h-8 flex items-center font-bold mr-10 max-[350px]:mr-5">
                            Sign In
                        </button>
                    </li>
                </ol>
            </div>
        </div>
    </nav>
    </div>
  )
}

export default Nav

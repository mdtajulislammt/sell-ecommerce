
const NavSearching = () => {
     return (
          <div>
              
  
    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div className="relative">
        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg className="w-4 h-4 text-primary-black  dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search"  className="  font-secondaryFront font-normal w-40  p-[6px] ps-10 text-sm rounded-[3px] text-primary-black  border-gray-300  bg-gray-50  " placeholder="Search"  />
    </div>


          </div>
     );
};

export default NavSearching;
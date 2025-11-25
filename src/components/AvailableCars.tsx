import React from 'react';

type SearchProps = {
  search: string;
  setSearch: (value: string) => void;
};

const AvailableCars = ({ search, setSearch }: SearchProps) => {
  return (
    <div className="flex flex-col items-center py-20 bg-[#F1F5F9] max-md:px-4 w-full">
      <div className="flex flex-col justify-center items-center text-center">
        <h1 className="font-semibold text-4xl md:text-[40px]">Available Cars</h1>
        <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-156">
          Browse our selection of premium vehicles available for your next adventure
        </p>
      </div>

      <div className="flex items-center bg-white px-4 mt-6 max-w-xl w-full h-12 rounded-full shadow">
        <img alt="search" className="w-4.5 h-4.5 mr-2" src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M10.8359%2010.6152L14.9999%2014.6949'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M9.14099%2011.7381C11.8699%2010.6019%2013.142%207.51376%2011.9822%204.84043C10.8224%202.1671%207.67004%200.920959%204.94113%202.0571C2.21222%203.19324%200.940171%206.28142%202.09993%208.95475C3.25969%2011.6281%206.41208%2012.8742%209.14099%2011.7381Z'%20stroke='%237A7B7D'%20stroke-width='1.2'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" />
        
        <input 
          placeholder="Search by make, model..." 
          className="w-full h-full outline-none text-gray-500" 
          type="text" 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        
        <img alt="filter" className="w-4.5 h-4.5 ml-2 cursor-pointer" src="data:image/svg+xml,%3csvg%20width='20'%20height='20'%20viewBox='0%200%2020%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M18.3327%202.5H1.66602L8.33268%2010.3833V15.8333L11.666%2017.5V10.3833L18.3327%202.5Z'%20stroke='%2364748B'%20stroke-width='1.66667'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e" />
      </div>
    </div>
  );
};

export default AvailableCars;
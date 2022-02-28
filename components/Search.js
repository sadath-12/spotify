import {MdOutlineShortText} from 'react-icons/md'

const Search = ({search,setSearch}) => {

    


  return (
    <div className="max-w-[1150px] bg-[#1a1a1a] rounded-full overflow-hidden border-2 border-[#333333] p-1.5 flex items-center px-5 pr-8">
      <div className="h-4 w-4 rounded-full border-2 flex-shrink-0 animate-pulse"/>
      <input type='text' value={search} onChange={(e)=>setSearch(e.target.value)}
      className='bg-[#1a1a1a] text-white border-none lg:w-full outline-none focus:ring-0     placeholder-[#fafafa]'
  
      placeholder="Search....."
       />

<div className="flex items-center divide-dotted divide-x-4 divide-[#333] ml-auto">
<div className="flex space-x-2 pr-2 ">
    <button className="tag">Minimal</button>
    <button className="tag">House</button>
    <button className="tag">Mininmal</button>
</div>
<div className='flex items-center space-x-1.5 text-white pl-4'>
  <MdOutlineShortText className='text-2xl animate-pulse'/>  
  <span className='font-medium text-sm'>Filters</span>
</div>
</div>

    </div>
  );
}

export default Search;

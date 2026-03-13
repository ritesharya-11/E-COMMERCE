// import React, { useContext, useEffect, useState } from 'react'
// import { ShopContext } from '../context/Context'
// import { assets } from '../assets/assets';
// import Title from '../components/Title';
// import Productitem from '../components/Productitem';

// const Collection = () => {

//   const {products} = useContext(ShopContext)
//   const [showFilter, setShowFilter] =useState(true);
//   const [filterProducts,setFilterProducts] = useState([]);
//   const [Category,setCategory] =useState([]);
//   const [subcategory,setSubcategory] =useState([]);

//  const toggleSubcategory = (e) => {

//   if(subcategory.includes(e.target.value)){
//     setSubcategory(prev => prev.filter(item => item !== e.target.value))
//   }
//   else{
//     setSubcategory(prev => [...prev, e.target.value])
//   }

// }
  

// useEffect(()=>{
//   setFilterProducts(products)
// },[products])

//   useEffect(()=>{
//     console.log(Category);
    

//   },[Category])

//   return (
//     <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
//       {/* Filter option */}
//       <div className='min-w-60'>
//         <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>FILTERS
//           <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
//         </p>
//         {/* Category Filters */}
//         <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//            <p className='flex-gap-2'>
//            <input className =" w-3 "type="checkbox" value={'men'} onChange={toggleCategory} /> Men
//            </p> 
//           <p className='flex gap-2'>
//            <input className =" w-3 "type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
//            </p> 
//            <p className='flex-gap-2'>
//            <input className =" w-3 "type="checkbox" value={'Kids'} onChange={toggleCategory} /> kids
//            </p> 
//           </div>

//         </div>
//         {/* subcategory filter */}
//         <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" :'hidden'} sm:block`}>
//           <p className='mb-3 text-sm font-medium'>TYPE</p>
//           <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
//            <p className='flex-gap-2'>
//            <input className =" w-3 "type="checkbox" value={'Topwear'} />  Topwear
//            </p> 
//            <p className='flex-gap-2'>
//            <input className =" w-3 "type="checkbox" value={'Bootwear'} /> Bott 
//            </p> 
//           <p className='flex gap-2'>
//            <input className =" w-3 "type="checkbox" value={'Winterwear'} /> Winterwear 
//            </p> 
//           </div>

//         </div>

//       </div>
//       {/*Right side  */}
//       <div className='flex-1'>
//         <div className='flex justify-between text-base sm:text-2xl mb-4'>
//           <Title text1={"ALL"} text2={"COLLECTION"} />
//           {/* Product Sort */}
//           <select className='border-2 border-gray-300 text-sm px-2'>
//             <option value="relevant">Sort by: Relevent</option>
//             <option value="low-hogh">Sort by: Low to high </option>
//             <option value="high-los"> Sort by: high to low</option>
//           </select>

//         </div>
//         {/* Map to Product */}
//         <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
//         {  
//           filterProducts.map((item,index)=>(
//             <Productitem  key={index} name={item.name} id={item._id} price={item.price} image={item.image}/>
//           ))
// }
//         </div>

//       </div>
//     </div>
//   )
// }

// export default Collection

import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/Context'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import Productitem from '../components/Productitem';

const Collection = () => {

  const {products} = useContext(ShopContext)
  const [showFilter, setShowFilter] =useState(true);
  const [filterProducts,setFilterProducts] = useState([]);
  const [Category,setCategory] =useState([]);
  const [subcategory,setSubcategory] =useState([]);

  const toggleCategory = (e)=>{

    if(Category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item=> item !== e.target.value))
    }
    else{
      setCategory(prev => [...prev,e.target.value])
    }
  }

  const toggleSubcategory = (e) => {

    if(subcategory.includes(e.target.value)){
      setSubcategory(prev => prev.filter(item => item !== e.target.value))
    }
    else{
      setSubcategory(prev => [...prev, e.target.value])
    }

  }

  useEffect(()=>{
    setFilterProducts(products)
  },[products])

  useEffect(()=>{
    console.log(Category);
  },[Category])

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      
      {/* Filter option */}
      <div className='min-w-60'>

        <p onClick={()=>setShowFilter(!showFilter)} className='my-2 text-xl flex items-center cursor-pointer gap-2'>
          FILTERS
          <img className={`h-3 sm:hidden ${showFilter ? 'rotate-90' : ''}`} src={assets.dropdown_icon} alt="" />
        </p>

        {/* Category Filters */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? "" :'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Men'} onChange={toggleCategory} /> Men
           </p> 

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Women'} onChange={toggleCategory}/> Women
           </p> 

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Kids'} onChange={toggleCategory} /> Kids
           </p> 

          </div>

        </div>

        {/* subcategory filter */}
        <div className={`border border-gray-300 pl-5 py-3 my-5 ${showFilter ? "" :'hidden'} sm:block`}>

          <p className='mb-3 text-sm font-medium'>TYPE</p>

          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Topwear'} onChange={toggleSubcategory}/> Topwear
           </p> 

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Bootwear'} onChange={toggleSubcategory}/> Bootwear
           </p> 

           <p className='flex gap-2'>
           <input className="w-3" type="checkbox" value={'Winterwear'} onChange={toggleSubcategory}/> Winterwear
           </p> 

          </div>

        </div>

      </div>

      {/*Right side  */}
      <div className='flex-1'>

        <div className='flex justify-between text-base sm:text-2xl mb-4'>

          <Title text1={"ALL"} text2={"COLLECTION"} />

          {/* Product Sort */}
          <select className='border-2 border-gray-300 text-sm px-2'>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to high </option>
            <option value="high-low"> Sort by: High to low</option>
          </select>

        </div>

        {/* Map to Product */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>

        {  
          filterProducts.map((item,index)=>(
            <Productitem  
              key={index} 
              name={item.name} 
              id={item._id} 
              price={item.price} 
              image={item.image}
            />
          ))
        }

        </div>

      </div>
    </div>
  )
}

export default Collection

import { Package } from 'lucide-react';
import { Laptop } from 'lucide-react';
import { UsersRound } from 'lucide-react';
import { Layers } from 'lucide-react';
import { AlignRight } from 'lucide-react';
import { LogOut } from 'lucide-react';
const Navbar = () => {



  return (
    <>
       <div>
        
        <div className='flex ml-5 mr-5 space-x-2'> 
            <div className='p-3 border rounded-md bg-blue-500 mt-5'>

        <Package className="h-6 w-6 text-white" /> 
            </div>
       <div className='ml-1'> 
            <h1 className=" text-3xl mt-3 font-bold">iHUZA</h1>
                 <span className=''>INVETORY</span> 
                
                 </div>
        
            
            </div>
        
        <div className=" ml-3 p-5 space-y-6"> 
           
        
           <div className='flex space-x-4'>
            <Laptop/> 
            <nav className=' text-sm'>Dashboard </nav>
            </div>
           <div className='flex space-x-4'>
            <UsersRound/> 
            <nav className='text-sm'>Users</nav>
            </div>
            <div className='flex space-x-4'>
                <Package/>
                <nav className='text-sm'> Products</nav>
                </div>
          <div className='flex space-x-4'> 
                <AlignRight/><nav className='text-sm'>Assignments</nav>
            </div> 
            <div className='flex space-x-4'><Layers/><nav className='text-sm'>Categories</nav></div>

            <div className='mt-130 flex space-x-3'>
                <LogOut />
                <nav className='text-sm'>Logout</nav>
            </div>
            </div> 
        </div>
    
    </>
  )
}

export default Navbar
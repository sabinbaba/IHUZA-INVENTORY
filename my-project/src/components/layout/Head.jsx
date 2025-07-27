
import { Moon } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Bell } from 'lucide-react';
import { UserRound } from 'lucide-react';

function Head (){
  return (

    <>
        <div className="mt-2">
            <h1 className="text-3xl font-bold flex-1"> Dashboard</h1>
            <span >Welcome Back, Admin</span>
        </div>
        <div className='mt-7 flex justify-end space-x-20 pr-4'>
            <nav>
                <Moon/>

            </nav>
            <nav>
                <Settings/>
                
            </nav>
            <nav>
                <Bell/>
                
            </nav>
            <div className='flex'><nav>
               Admin@huza.com
            </nav> <UserRound/>
            </div>
        </div>
 

    </>
  )
}


export default Head
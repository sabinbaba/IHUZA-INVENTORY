import { Car } from "lucide-react"
import { Package } from 'lucide-react';
import { CircleCheckBig } from 'lucide-react';

function Card(){
    return(
        <>
            <div className="mb-4">
                <div className="flex">
             <div className="p-3 border rounded-lg bg-blue-300">  <Package className=""/> </div>
               <h1 className="ml-3 text-white tex-3xl font-semibold">iHUZA INVETORY - System Overview</h1></div>
                <p className=" ml-15 text-sm mb-3">Monitor your iHUZA inventory and product assignments in real-time</p>

            <div className="flex">  <CircleCheckBig className="ml-15"/>  <span className="ml-3">All System Operational</span></div>

            </div>
        
        </>
    )
}

export default Card
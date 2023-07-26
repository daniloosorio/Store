import {ShoppingBagIcon} from '@heroicons/react/24/solid'
import { useContext } from "react"
import { NavLink } from "react-router-dom"
import { ShoppingCartContext } from "../../Context"

const Navbar = () => {
    const acttiveStyle = 'underline underline-offset-4'
    const context = useContext(ShoppingCartContext)
    return (
        <nav className="flex justify-between items-center fixed z-10 top-0 w-full py-5 px-8 text-sm font-light">
            <ul className="flex items-center gap-3">
                <li className="font-semibold text-lg">
                    <NavLink to='/'>
                        Store
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/'
                    onClick={()=>context.setSearchByCategory()}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        All
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/clothes'
                    onClick={()=>context.setSearchByCategory("clothes")}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/electronics'
                    onClick={()=>context.setSearchByCategory("electronics")}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/furnitures'
                    onClick={()=>context.setSearchByCategory("furnitures")}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/toys'
                    onClick={()=>context.setSearchByCategory("toys")}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Toy
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/others'
                    onClick={()=>context.setSearchByCategory("others")}
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Others
                    </NavLink>
                </li>
            </ul>

            <ul className="flex items-center gap-3">
                <li className="text-black/60">
                    danilo@gmail.com
                </li>
                <li>
                    <NavLink to='/MyOrders'
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/MyAcount'
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        My Acount
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/SignIn'
                     className={({isActive}) => 
                     isActive ? acttiveStyle : undefined}>
                        Sign In
                    </NavLink>
                </li>
                <li className='flex items-center'>
                        <ShoppingBagIcon className='h-6 w-6 text-black'></ShoppingBagIcon> 
                        <div> {context.cardProducts.length} </div>
                        
                    
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
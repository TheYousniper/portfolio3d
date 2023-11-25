import { NavLink } from "react-router-dom"

const NavBar = () => {
  return (
    <header className="header">
        <NavLink to="/" className=" w-12 h-12 rounded-lg bg-white items-center justify-center flex font-bold shadow-md">
           <img src="https://i.postimg.cc/P539CBkk/marcapersonal.jpg" alt="" className='rounded-lg' />
        </NavLink>
        <nav className="flex text-lg gap-7 font-medium">
            <NavLink to="/about" className={({isActive})=> isActive ? 'text-blue-500': 'text-black'}>
                About
            </NavLink>
            <NavLink to="/projects" className={({isActive})=> isActive ? 'text-blue-500': 'text-black'}>
                Projects
            </NavLink>
            

        </nav>
    </header>
  )
}

export default NavBar
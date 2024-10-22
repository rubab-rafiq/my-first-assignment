import Link from "next/link";
 export default function Navbar(){
    return(
        <header className= "text-white bg-rose-700  p-4" >
            <div className="container mx-auto flex justify-between item-center">
            <div className="flex items-center">
                    <img 
                        src="../rubi..png" 
                        alt="Logo"
                        className="h-10 mr-2" 
                    />
                <h1 className="text-xl font-bold text-rose-100">My Website</h1></div>
                <nav>
                <ul className="flex space-x-4 ">
                    <li><Link href="/" className="hover:text-rose-950">Home</Link></li>
                    <li><Link href="/about" className="hover:text-rose-950">About</Link></li>
                    <li><Link href="/jobs" className="hover:text-rose-950">Jobs</Link></li>
                    <li><Link href="/jobs/proogramming" className="hover:text-rose-950">Programming</Link></li>
                    <li><Link href="/contact"className="hover:text-rose-950">Contact</Link></li>
                </ul>
                </nav>
            </div>
        </header>
    )
    
 }
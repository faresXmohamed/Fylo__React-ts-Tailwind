import logo from '../assets/images/logo.svg'
import {useState , useRef,useEffect} from "react";
import {Link} from "react-router-dom";

const Header = () => {
    const [Links] = useState<string[]>(["Features", "Team", "Sign In"]);
    const headerRef=useRef<HTMLElement | null>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (headerRef.current) {
                if (window.scrollY > 40) {
                    headerRef.current.style.backgroundColor = "#0c1524";
                    headerRef.current.style.padding = "20px 0";
                } else {
                    headerRef.current.style.backgroundColor = "transparent";
                    headerRef.current.style.paddingTop = "35px";
                    headerRef.current.style.paddingBottom = "";
                }
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);
  return (
    <header className="pt-[35px] fixed top-0 left-0 w-full z-50 transition-all duration-500" ref={headerRef}>
        <div className="container mx-auto flex justify-between items-center gap-[30px] sm:gap-0 flex-col sm:flex-row">
      <Link to="/" className="logo">
        <img src={logo} alt="Logo" className='w-[80px] sm:w-[150px]' />
      </Link>
      <nav>
        <ul className='flex items-center gap-5'>
            {Links.map((link,index)=>(<li key={index}>
                <a className="opacity-75 hover:opacity-100 hover:underline transition-all duration-200" href={`#${link.toLowerCase().replace(" ","")}`}>{link}</a>
            </li>))}
        </ul>
      </nav>
        </div>
    </header>
  )
}

export default Header
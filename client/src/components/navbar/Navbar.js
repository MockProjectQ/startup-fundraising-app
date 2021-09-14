import React,{useState,useEffect} from 'react';
import { Link } from "react-router-dom";
import { Button } from '../button/Button';
import './navbar.css';
import '../../App.css'

const Navbar = () => {
    const [click, setClick]=useState(false)
    const [button, setButton] = useState(true);

    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    
    const showButton=()=>{
        if(window.innerWidth <960){
            setButton(false);
        }
        else{
            setButton(true);
        }
    };

    useEffect(()=>{
        showButton();
    },[]
    );

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className="navbar">
                <div className="navbar-container">
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
                        StartUp <i className='fab fa-typo3'/>
                    </Link>

                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars' }/>
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                        <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                        </li>
                        <li className='nav-item'>
                       <Link to='/home' className='nav-links' onClick={closeMobileMenu}>
                            Contact
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/admin/list' className='nav-links' onClick={closeMobileMenu}>
                            Startups
                        </Link>
                        </li>
                        <li className='nav-item'>
                        <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                            LOGIN
                        </Link>
                        </li>
                    </ul>
                    <Link to= '/login'>{button && <Button buttonStyle='btn--outline'  >LOGIN</Button>}
                    </Link>       
                </div>
            </nav>
        </>
    )
}

export default Navbar;
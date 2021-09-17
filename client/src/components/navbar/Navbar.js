import React,{useState,useEffect} from 'react';
import { Link,useHistory } from "react-router-dom";
import { Button } from '../button/Button';
import './navbar.css';
import '../../App.css'
import { auth } from '../../config/firebase';

const Navbar = () => {
    const user=auth.currentUser;
    const history = useHistory();
    const [click, setClick]=useState(false)
    const [button, setButton] = useState(true);

    const handleClick =()=> setClick(!click);
    const closeMobileMenu=()=> setClick(false);
    
    
 
  const handleLogout=async(e)=> {
    e.preventDefault();
    await auth.signOut().then(function(){
        console.log("Signed out")
    }).catch(function(error){
        console.log(error)
        console.log("An error occured")

    });
  
    history.push("/home");
  }

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
                        <Link to='/startups' className='nav-links' onClick={closeMobileMenu}>
                            Startups
                        </Link>
                        </li>
                        <li className='nav-item'>
                        {
                            user?
                            (
                                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu, handleLogout}>
                                    LOGOUT
                                </Link>
                        
                            )
                            :(
                                <Link to='/login' className='nav-links-mobile' onClick={closeMobileMenu}>
                                    LOGIN
                                </Link>
                            )
                        }
                        
                        </li>
                       
                    </ul>
                        {
                            user?
                            (
                            <>
                            <button id="logout--button" onClick={handleLogout }  >LOGOUT</button>
                            </>
                            )
                            :(
                                <>      
                                    <Link to= '/login'>{button && <Button buttonStyle='btn--outline'  >
                                        LOGIN</Button>}
                                    </Link> 
                                </>
                            )
                        }
                    
                        
                        
                      
                </div>
            </nav>
        </>
    )
}

export default Navbar;
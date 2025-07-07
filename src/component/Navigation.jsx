const Navigation= ()=> {
    return(
        <nav>
            <div className="logo">
                <img src="/public/Nike_logo.png" alt="logo" style={{height:100}}></img>
            </div>
            <ul>
                <li>Home</li>
                <li>Menu</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
            <div className="btn"><button>Login</button></div>
            
            
          </nav>  
        )  
}


export default Navigation;
const Hero= () =>{
    return (
        <div className="Hero">
            
            <div className="Herocontent">
                <h1>Your Feet Deserve The Best</h1>
                <br></br>
                <div className="sl">
                    <p>Your Feet Deserve The Best and We are to help you with youe shoes.Your Feet Deserve The Best and We are to help you with youe shoes.</p>
                </div>
                <br></br>
                <div className="Herobutton">
                    <button className="btnshop">Shop Now</button>
                    <button className="btncategory">Category</button>
                </div>
                <br></br>
                <div className="shopping">
                    <p>Also Available on</p>
                    <div className="lastlogo">
                        <img src="/public/flipkart.png"></img>
                        <img src="/public/amazon.png"></img>
                    </div>
                </div>
            </div>

            <div className="Heroimage">
                <img src="/public/shoe_image.png" alt="Shoe Image"></img>
            </div>
            
        </div>
    )
}

export default Hero;
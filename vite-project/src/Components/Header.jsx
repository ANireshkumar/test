

export const Header = () => {

  let customCSS = "code";
  return (
    <><div>
        <h1 className="bannerText">Hai! I am niresh</h1>
        <p className="slogan">Learn react soon</p>
        
        {/* javascript expression in jsx */}
<p className={customCSS}>Changing the color with the cont default</p>
<p className={customCSS}>45+55={45 + 55}</p> 
<p className={customCSS}>This is to check the color blue violet</p>
    <p style={{fontSize:"25PX", color:"darkblue"}}>This is in line styling</p>
        </div></>

)
}

export default Header;
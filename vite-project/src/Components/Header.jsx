

export const Header = () => {
const isLoggedIn = true;
const greeting = isLoggedIn ? <p>Welcome Niresh! using the conditional rendering</p> : <P>Please login</P>
const items = ["Item1", "Item2", "Item3", "Item4", "Item5", "Item6"];

  let customCSS = "code";
  return (
    <><div>
        <h1 className="bannerText">Hai! I am niresh</h1>
        <p className="slogan">Learn react soon</p>
        
        {/* javascript expression in jsx */}
<p className={customCSS}>Changing the color with the const default</p>
<p className={customCSS}>45+55={45 + 55}</p> 
<p className={customCSS}>This is to check the color blue violet</p>
    <p style={{fontSize:"25PX", color:"darkblue"}}>This is in line styling</p>
      
      {/* JSX with conditional rendering */}
      
{greeting}

{/* `JSX with list` */}
<p>This data feching can also done by the fetch api </p>
<ul>
  {items.map((items,index)=>(<li key={index}>{items}</li>))}
</ul>

        </div></>

)
}

export default Header;
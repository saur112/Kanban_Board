
import React ,{useState} from 'react';
const Navbar= ({isDarkMode,groupTickets,sortTickets,toggleDarkMode})=>{
  const [groupingOption, setGroupingOption] = useState("status");
  const [sortBy, setSortBy] = useState("priority");

const icon = !isDarkMode ? (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M12 3a9 9 0 109 9c0-.46-.04-.92-.1-1.36a5.389 5.389 0 01-4.4 2.26 5.403 5.403 0 01-3.14-9.8c-.44-.06-.9-.1-1.36-.1z"></path>
  </svg>
) : (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    viewBox="0 0 24 24"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37a.996.996 0 00-1.41 0 .996.996 0 000 1.41l1.06 1.06c.39.39 1.03.39 1.41 0a.996.996 0 000-1.41l-1.06-1.06zm1.06-10.96a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06zM7.05 18.36a.996.996 0 000-1.41.996.996 0 00-1.41 0l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06z"></path>
  </svg>
);

const styles = {
  backgroundColor: isDarkMode ? "#2d2d2d" : "#fff",
  color: isDarkMode ? "#fff" : "#333",
  float: "right",
  // Add other styles as needed
};
const d_switch={display: "flex",
alignItems: 'center',
justifyContent: 'space-between',
gap: '0.7rem',
borderRadius: '6px',
padding: '0.25rem 0.4rem',
border: '2px solid #4a4a4a',
cursor: 'pointer',
color: '#ebebeb',
boxShadow: '0 0 8px 0 #ffffff22'
}
const category={
backgroundColor: isDarkMode? '#161B22':'white',
textTransform: 'capitalize',
border: 'none',
outline: 'none',
cursor: 'pointer',
fontSize: '1rem',
color: isDarkMode? '#ebebeb':'#161B22',
padding: '0.2rem 2rem 0.2rem 0.5rem',
borderRadius: '6px',
border: '1px solid #4a4a4a'
}
const icon1={
fontSize: '1rem',
  color: '#8D8D8D',
  display: 'flex',
  alignItems: 'center',
  transition: 'transform 0.3s ease-in-out',
  transform: 'rotate(0deg)'
}
const [isDisplayed, setIsDisplayed] = useState(false);
const changedis=()=>{

console.log(1)
// Toggle the state to change the display property
setIsDisplayed(!isDisplayed);


}
const main={
position: 'absolute',
  
 padding: '10px',
  flexDirection: 'column',
  gap: '10px',
  top: '125%',
  left: '0',
  borderRadius: '8px',
  display: isDisplayed? 'none':'block',
  
  overflow: 'hidden',
  transition: 'max-height 0.3s ease-in-out',
  backgroundColor: isDarkMode? '#161B22':'white',
  border: '1px solid #4a4a4a',
  boxShadow: '0 0 8px 0 #ffffff22'
}




return (
  <>
    
      {/* Display options and buttons */}
      <div
        id="nav"
        className="nav h-14 p-4 "
        style={{ backgroundColor: isDarkMode ? "#161B22" : "#fff", display:'flex',justifyContent:'space-between', alignItems:'center', paddingLeft:'20px'}}
      >
       
         
          <div className="display-switch-wrapper " style={{position:'relative',zIndex:'999',marginTop:'auto' }} >
            <div className="display-switch " style={d_switch} onClick={changedis}>
              <div className="switch-icon transform rotate-270  text-base" style={{color:isDarkMode?'#8D8D8D':'black'}}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 16 16"
                  className="icon"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 2h-1v5h1V2zm6.1 5H6.4L6 6.45v-1L6.4 5h3.2l.4.5v1l-.4.5zm-5 3H1.4L1 9.5v-1l.4-.5h3.2l.4.5v1l-.4.5zm3.9-8h-1v2h1V2zm-1 6h1v6h-1V8zm-4 3h-1v3h1v-3zm7.9 0h3.19l.4-.5v-.95l-.4-.5H11.4l-.4.5v.95l.4.5zm2.1-9h-1v6h1V2zm-1 10h1v2h-1v-2z"
                  ></path>
                </svg>
              </div>
              <span style={{color: isDarkMode? '#ebebeb':'#161B22'}}>Display</span>
              <div className="dropdown-icon " style={icon1}>
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0"
                  viewBox="0 0 24 24"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path fill="none" d="M0 0h24v24H0V0z"></path>
                  <path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"></path>
                </svg>
              </div>
            </div>
            
            <section className="dropdown-main" style={main} >
              <div className="dropdown-item grouping d- flex justify-between items-center gap-20 text-base mb-2">
                <span style={{ color: isDarkMode ?'white':'black'}}>Grouping</span>
                <select
                style={category}
            id="groupingOption"
            value={groupingOption}
            onChange={(e) => setGroupingOption(e.target.value)}
            onClick={groupTickets}
          >
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
              </div>
              <div className="dropdown-item ordering d- flex justify-between items-center gap-20 text-base">
                <span style={{ color: isDarkMode ?'white':'black'}}>Ordering</span>
                <select
                style={category}
            id="sortBy"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            onClick={sortTickets}
          >
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
              </div>
            </section>
          </div>
          
        
         

          
        <button
          onClick={toggleDarkMode}
          className="theme-switch"
          type="button"
          style={styles}
        >
          {icon}
        </button>
      </div>
      
      </>
)
}

export default Navbar;

    
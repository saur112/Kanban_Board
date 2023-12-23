import React from 'react'
import {name} from './user'
import {obj,store} from './priority'
const Status=({t,t1,theme})=> {
  const obj={
    0:"Backlog",
    1:"Todo",
    2: 'In Progress'
  }
  
  
  
  return (
    <>
    <div>
      <div className="heading mx-3 d- flex  ">
        <div id="l"
          className="left d- flex justify-between item-center gap-3 my-4 mt-1 mb-3 mx-4 font-semibold text-base color-[#373737]"
        style={{color:!theme?'black':'white'}}>
          {store[t1]}

          <h2 className='my-2'>
            {t1}&nbsp;{t.length}&nbsp;{" "}
          </h2>
        </div>
        <div className="right   d- flex my-6 ml-auto">
          <div className="iconwrapper">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 24 24"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "gray" }}
            >
              <path fill="none" d="M0 0h24v24H0z"></path>
              <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"></path>
            </svg>
          </div>
          <div className="iconwrapper">
            <svg
              stroke="currentColor"
              fill="currentColor"
              strokeWidth="0"
              viewBox="0 0 16 16"
              className="icon"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              style={{ color: "gray" }}
            >
              <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z"></path>
            </svg>
          </div>
        </div>
      </div>
   
 

    </div>
    </>
  )
  
}
const obj3= {
  "No Priority": (
    <div className="icon-wrapper my-1 mr-1">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 1024 1024"
        className="icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "gray" }}
      >
        <path d="M112 476h160v72H112zm320 0h160v72H432zm320 0h160v72H752z"></path>
      </svg>
    </div>
  ),
  "Medium": (
    <div className="icon-wrapper my-1 mr-1">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "gray" }}
      >
        <path d="M2 20h.01"></path>
        <path d="M7 20v-4"></path>
        <path d="M12 20v-8"></path>
      </svg>
    </div>
  ),
  "Low": (
    <div className="icon-wrapper my-1 mr-1">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "gray" }}
      >
        <path d="M2 20h.01"></path>
        <path d="M7 20v-4"></path>
      </svg>
    </div>
  ),
  "High": (
    <div className="icon-wrapper my-1 mr-1">
      <svg
        stroke="currentColor"
        fill="none"
        strokeWidth="2"
        viewBox="0 0 24 24"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "gray" }}
      >
        <path d="M2 20h.01"></path>
        <path d="M7 20v-4"></path>
        <path d="M12 20v-8"></path>
        <path d="M17 20V8"></path>
      </svg>
    </div>
  ),
  "Urgent": (
    <div className="icon-wrapper my-1 mr-1">
      <svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        viewBox="0 0 16 16"
        className="icon"
        height="1em"
        width="1em"
        xmlns="http://www.w3.org/2000/svg"
        style={{ color: "rgb(245, 138, 66)" }}
      >
        <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
      </svg>
    </div>
  ),
};

const B= ({ ticket,user ,theme}) => {
  const user1 = user.find((user) => user.id === ticket.userId)
  const a= user1.name.split(" ")
  
  let s=''
  a.map((e)=>{
    s+=e.charAt(0)
  })

 

 const  user_icon_style={   
  backgroundColor: name[s],
  display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    width: "15px",
    height: "15px",
    borderRadius: "50%",
    fontSize: "0.5rem",
    fontWeight: "400",
    color: "white",
    position: "relative",
}
// console.log(user1['available']);
const avail_icon_style={position: "absolute",
backgroundColor: !user1['available'] ?'gray':'rgb(236, 194, 56)',
  bottom: "0px",
  right: "0px",
  width: "5px",
  height: "5px",
  borderRadius: "50%",
  outline: "1px solid white"}

  

  return (
    <>
      <div className="value border-2 rounded-md shadow my-3 mx-3 w-[245px]">
        <div className="mx-3 my-2">
          <div className="first d- flex  ">
            <p className="my-2 text-slate-400">{ticket.id}</p>
            <div
              className="user-icon ml-auto"
              style={user_icon_style}
            >
              <div>{s}</div>
              <div
                className="available-icon"
                style={avail_icon_style }
              ></div>
             
            
            </div>
          </div>

          <div className="main d- flex">
           
            <div className="second my-2 font-semibold leading-4"style={{color:!theme?'black':'white'}}>{ticket.title}</div>
          </div>
          <div className='d- flex'>
            {obj3[obj[ticket.priority]]}
          <div className="third d- flex p-1 border-2 w-[10rem]">
            <span className="dot h-3 w-3 bg-[#bbb] my-[0.35rem] mx-1 border-2 rounded-[50%] "></span>
            <p className=" text-slate-400">{ticket.tag}</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};



export default Status;
export { B,obj3 };

import React, {useState} from 'react';
import {obj3} from './status';
import {obj,store} from './priority'; 
const name={
    "As": 'rgb(30, 132, 73)',
    "Y":"rgb(144, 12, 63)",
    "SK":'rgb(199, 0, 57)',
    "R": 'lightgray',
    "S": "rgb(144, 12, 63)"
}
const User=({user,t1,theme})=>{
    const a= user.name.split(" ")
        
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
      
      const avail_icon_style={position: "absolute",
      backgroundColor: !user['available'] ?'gray':'rgb(236, 194, 56)',
        bottom: "0px",
        right: "0px",
        width: "5px",
        height: "5px",
        borderRadius: "50%",
        outline: "1px solid white"}
      
        
    return (
        <>
         <div className='d- flex justify-between'>
          <div className="heading mx-3 d- flex  ">
            <div
              id="l"
              className="left d- flex justify-between item-center gap-3 my-5 mx-4 font-semibold text-base color-[#373737]"
            style={{color:!theme?'black':'white'}}>
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
    
              <h2>
                {user.name}&nbsp;
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
      );
    };

const C = ({ ticket,user ,theme}) => {
        // const user1 = user.find((user) => user.id === ticket.userId)
        
        
      
        
      
        return (
          <>
            <div className="value border-2 rounded-md shadow my-3 mx-3 w-[245px]">
              <div className="mx-3 my-2">
                <div className="first d- flex  ">
                  <p className="my-2 text-slate-400">{ticket.id}1</p>
                  
                </div>
      
                <div className="main d- flex">
                  {store[ticket["status"]]}
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
export default User;
export {C,name};
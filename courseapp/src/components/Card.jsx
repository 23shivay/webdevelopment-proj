import React from 'react'
import {FcLike,FcLikePlaceholder } from 'react-icons/fc';
import { apiUrl } from '../data';

import { toast } from "react-toastify";

const Card = (props) => {
  let likedCourses=props.likedCourses;
  let setLikedCourses= props.setLikedCourses;

  function clickHandler(){
    if(likedCourses.includes(props.course.id)){
      setLikedCourses((prev) => prev.filter((cid) => cid !== props.course.id));
      toast.warning("Liked Removed");
    }
    else {
      
      if (likedCourses.length === 0) {
          setLikedCourses([props.course.id]);
      }
      else {
          setLikedCourses((prev) => [...prev, props.course.id]);
      }
      toast.success("Liked Successfully");
  }
     
  }
  return (
    <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
        <div className='relative '>
            
        <img src={props.course.image.url}/>
        <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-12px] grid place-items-center'>
            <button  onClick={clickHandler}>
            {
                            !likedCourses.includes(props.course.id) ? <FcLikePlaceholder fontSize="1.75rem" /> : <FcLike fontSize="1.75rem" />
                        }
            </button>
        </div>
        </div>
       
        <div className='p-4'>
            <p className='text-white text-lg font-semibold leading-6'>{props.course.title}</p>
            
            <p className='mt-2 text-white'>
                    {
                        props.course.description.length > 100 ? (props.course.description.substring(0, 100) + "...") : (props.course.description)
                    }

                </p>
        </div>
    </div>
  )
}

export default Card
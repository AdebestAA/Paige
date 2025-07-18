"use client"
import { useParams } from 'next/navigation';
import React from 'react'

import { closeSubmenu } from '@/store/slices/desktopSubmenuLinksSlice';
import { useDispatch, useSelector } from 'react-redux';
import { dispatchType, RootStateType } from '@/store';
import { CiLocationOn } from "react-icons/ci";
import Link from 'next/link';
// import { jobsList } from '@/utils/jobs';

const HeroSlug = () => {
    const dispatch = useDispatch<dispatchType>()
 const param = useParams()
 const allJobs = useSelector((store:RootStateType)=>{

  return store.alljobsReducer
})
  
  const findJob = allJobs.find(item => item._id == param.slug)
  return (
    <div
      onMouseOver={()=> dispatch(closeSubmenu())}
    className='  '>
        <div className='lg:h-[300px] md:min-h-[250px] min-h-[200px] bg-primary flex flex-col justify-center items-center'>

        <h1 className='text-wht md:text-[3rem] text-[1.8rem]  md:px-16 px-4 text-center'>{findJob?.jobTitle}</h1>
       
        <p className='flex items-center'><span><CiLocationOn/></span> <span>{findJob?.workPlace}</span></p>
        <div className='my-6 flex justify-center'>

<Link className='bg-primary rounded-lg px-4 py-2 text-grayOne hover:opacity-50 border-1 border-grayOne ' href={`#`}>Apply for Position</Link>

</div>
        </div>
    </div>
    )
}

export default HeroSlug
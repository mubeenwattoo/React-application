import React from 'react'
import "./style.css";
import "./Mediaquerry.css";

import {  FaHome }  from 'react-icons/fa';
import img1 from '../components/assets/image 7.png'
import img2 from '../components/assets/image all.png'
import img3 from '../components/assets/image 10.png'
import img4 from '../components/assets/image 13.png'
import img5 from '../components/assets/image 16.png'
import img6 from '../components/assets/image 17.png'


const Home = () => {
  return (
    <>
    
  <div className=" firsti  flex  mt-3 ms-3 sm:gap-[50px]  ">
  <FaHome className='text-3xl  text-[#550D0E]'/>
  <a href="" className='text-2xl text-[#550D0E] ' >Contact</a>
  <a href="" className='text-2xl text-[#550D0E] ' >Help</a>

  <div className="hii ms-auto me-5">
  <a href="" className='text-2xl text-[#550D0E] ' >Sign In/Sign up</a>
   
  </div>

  </div>
  


<div className="seconddd mt-3 flex">

<div className="title text-[#550D0E] sm:text-4xl text-2xl mt-2">BookSpace</div>

<input type="text" className='form-control w-[400px] h-[40px] mt-2 sm:ml-[30px] '
 />
 <button className=' search sm:ml-2 w-[117px] h-[40px] bg-[#E7D6AC] mt-2  rounded-3xl font-bold text-[#550D0E] '>Search</button>
 <button className=' advance w-[164px] h-[37px] mt-2 sm:ml-3  rounded-3xl text-bold text-[#550D0E] font-serif border-[1px]   border-[#550D0E] '>Advance Search</button>



</div>













  



  <div class="dropdown float-end me-5 mt-3">
  <button class=" dropdown-toggle" type="button" id="dropdownMenu2" data-bs-toggle="dropdown" aria-expanded="false">
    English
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenu2">
    <li><button class="dropdown-item" type="button">Action</button></li>
    <li><button class="dropdown-item" type="button">Another action</button></li>
    <li><button class="dropdown-item" type="button">Something else here</button></li>
  </ul>
</div>



<div className="third bg-[#FFF7EC] overflow-x-hidden lg:flex-row flex-col">



<div className="thirdone basis-[20%]  bg-[#F9F4DB] mt-2 md:mr-[290px] p-4 h-[450px] lg:text-center md:text-center   ">

<h1 className='firstheading text-[#550D0E] text-2xl font-serif'>Books by Categories</h1>

<img src={img1} alt="" className='md:mx-auto' />

<div className="items text-[#550D0E] text-xl ">

<h1 className=' font-bold'>Science Fiction</h1>
<h1 className='mt-3' >Dark Pyschology</h1>
<h1 className='mt-3'>Category 3</h1>
<h1 className='mt-3'>Category 4</h1>
<h1 className=' mt-3 font-bold'>More</h1>

</div>

</div>




<div className="thirdtwo  basis-[30%]    mt-[40px] lg:mx-auto  ">
<img src={img2} className='' alt="image" />




<div className="thirdthird mt-[40px]     bg-[#F9F4DB] p-4  h-[250px] w-[400px]  ">
<img src={img3} alt="image" className=' mt-2 mx-auto' />
<h1 className='text-center mt-2 text-[#550D0E]'>Learn about new offers by</h1>
<h1 className='text-center text-[#550D0E]'> joining our news letter </h1>
<input type="text" placeholder='Email' className='mt-2 ml-5  ' />
<button className='w-[100px] h-[30px] bg-[#E7D6AC] mt-2  ml-5  rounded-3xl mt-3 text-[#550D0E]'>Sign Up</button>


</div>

</div>




</div>




<div id="science">
<h1 className="title text-3xl text-center font-serif text-[#550D0E] mt-2">Science Fiction</h1>

<div className="container-fluid mt-2 bg-[#F9F4DB] md:flex-row flex-col">


<div className="sub1 md:ml-5 sm:mx-auto sm:mt-4">
<h1 className='font-bold text-xl text-[#550D0E] '>What I learned from the trees</h1>
<h1 className='text-xl text-[#550D0E] ms-5'>L.E Bowman</h1>
<img src={img4} alt="image" className='ms-4 ' />

<h1 className='font-bold text-2xl text-[#550D0E] ms-4 '>$25.00</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] ms-4 mt-2  rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>





<div className="sub2 mx-auto sm:mt-4">
<h1 className='font-bold text-xl text-[#550D0E]'>Thief River Falls</h1>
<h1 className='text-xl text-[#550D0E] '>Brian Freeman</h1>
<img src={img5} alt="image" className='' />

<h1 className='font-bold text-2xl text-[#550D0E] '>$10.54</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] mt-2 rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>



<div className="sub3 md:ml-auto sm:mx-auto sm:mt-4">
<h1 className='font-bold text-xl text-[#550D0E] '>If It Bleeds</h1>
<h1 className='text-xl text-[#550D0E] '>Brian Freeman</h1>
<img src={img6} alt="image" className='' />

<h1 className='font-bold text-2xl  text-[#550D0E] '>$13.57</h1>
<button className='w-[117px] h-[40px] bg-[#E7D6AC] mt-2   rounded-3xl font-bold text-[#550D0E]  '>Read</button>

</div>





</div>

</div>









    
    
    </>
  )
}

export default Home
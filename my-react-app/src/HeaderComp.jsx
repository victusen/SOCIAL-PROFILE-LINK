import profileImage from './assets/images/vics-image.jpg'; 

function HeaderComp() {
  const imageStyle = { 
    width: 100,
    height: 100, 
    objectFit: 'cover', 
    objectPosition: 'top' 
  }
  const skills = ['Tailwind ', 'React ', 'JavaScript ', 'Firebase']; 
  const colors = ['text-yellow-400', 'text-blue-400', 'text-sky-400', 'text-orange-500'];
  
  
  return (
    <>
      <div className='flex flex-col gap-2'>
        <img 
          src={ profileImage } 
          alt="My Profile image" 
          className="border-6 border-solid border-[#3a3939] rounded-full mb-4"
          style={ imageStyle } 
        />
        <h1 className="font-bold text-white" >Mr. Vic</h1>
      </div>
      <div className=" flex flex-col gap-1 ">
        <p className="text-center text-[#cdf253]">
          { 
            skills.map((skill, index) => ( 
              <span key={index}> 
                {skill} 
                { 
                  index < skills.length - 1 && 
                  <span className="text-[#cdf253] text-xl"> {" · "} </span> 
                } 
              </span> 
            ) 
          )}
        </p>
        <p className='text-gray-300'>Hi, I'm Victor Raymond. A Tech tutor and Website developer.</p>
      </div>
    </>
  )
}

export default HeaderComp;

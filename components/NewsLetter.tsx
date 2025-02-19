"use client"
import { useState } from 'react'
const NewsLetter = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => setIsSubmitted(false), 1000);
  };
    return ( 
        <div className="h-full w-full mx-auto px-4 my-32 max-w-[1350px] md:px-20 text-white dark:text-black">
        <div className="flex flex-col items-start justify-start  w-full px-4 md:px-6 rounded-lg borders py-4 md:py-8 lg:rounded-2xl md:justify-between md:items-center md:flex-row">
          <div className="flex flex-col items-start gap-4 w-full max-w-lg">
            <h4 className="text-xl font-semibold lg:text-4xl md:text-2xl">
              Join our <span className="text-slate-500">newsletter</span>
            </h4>
            <p className="text-base text-slate-500">
              Join our newsletter for exclusive insights, announcements, and
              special offers delivered directly to your inbox.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start w-full mt-5 md:min-w-80 md:mt-0 md:w-max">
            <form
              action=""
              className="flex flex-col items-center gap-2 w-full md:max-w-xs md:flex-row"
            >
              <input
                type="text"
                className="h-9 w-full flex rounded-md borders bg-transparent px-3 py-1 text-sm border-light"
                placeholder="example@gmail.com"
              />
              <div className='flex gap-2'>
              <button className="rounded-md text-white/50 bg-violet-800/50 px-5 py-1.5 w-full lg:w-auto" onClick={handleSubmit}>
                Submit
              </button>
              {isSubmitted && <span className="text-green-600 text-sm flex gap-2 items-center">Submitted</span>}
              </div>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default NewsLetter;
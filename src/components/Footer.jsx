import {FaFacebookSquare, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className='text-lg text-[#111827] flex flex-col items-center md:gap-y-9 gap-y-5 justify-center my-10 mx-2'>
      <div className='text-3xl flex gap-12'>
        <FaFacebookSquare/>
        <FaInstagram />
        <FaTwitter />
        <FaYoutube/>
      </div>
      <div className='flex gap-x-12 gap-y-2 flex-wrap mx-auto justify-center'>
        <p>Condition of Use</p>
        <p>Privacy & Policy</p>
        <p>Press Room</p>
      </div>
      <p className='text-[#6B7280] text-center'>© 2021 MovieBox by Adriana Eka Prayudha  </p>
    </footer>
  )
}

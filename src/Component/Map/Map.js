import React from 'react'

const Map = () => {
  return (
   <>
   <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1766.3838836146035!2d85.24234702260166!3d27.693571702970146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb22f36f6caa45%3A0xf97ab48455065f97!2z4KSs4KSy4KSu4KWN4KSs4KWBLCDgpJrgpKjgpY3gpKbgpY3gpLDgpL7gpJfgpL_gpLDgpYAgNDQ2MDA!5e0!3m2!1sne!2snp!4v1701244800907!5m2!1sne!2snp" 
   width="100%" 
   height="450" 
   style={{border:0}} 
   allowfullscreen="" 
   loading="lazy" 
   referrerpolicy="no-referrer-when-downgrade"
   id='map'></iframe>
   </>
  )
}

export default Map
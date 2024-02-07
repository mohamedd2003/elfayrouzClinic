import React from 'react'

export default function Maps() {
  return (
    <>
    
    
    <div className="col-12 m-0 p-0 maps ">

<div className="mapouter">
  <div className="gmap_canvas">
    <iframe className='w-100'
      height={500}
      id="gmap_canvas"
      src="https://maps.google.com/maps?q=%D8%B9%D9%8A%D8%A7%D8%AF%D8%A9%20%D8%A7%D9%84%D9%81%D9%8A%D8%B1%D9%88%D8%B2%20%D9%84%D9%84%D8%B9%D9%84%D8%A7%D8%AC%20%D8%A7%D9%84%D8%B7%D8%A8%D9%8A%D8%B9%D9%8A,%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C,%20%D8%A3%D9%88%D9%84%20%D8%A7%D9%84%D8%B9%D8%A7%D8%B4%D8%B1%20%D9%85%D9%86%20%D8%B1%D9%85%D8%B6%D8%A7%D9%86%D8%8C%20%D9%85%D8%AD%D8%A7%D9%81%D8%B8%D8%A9%20%D8%A7%D9%84%D8%B4%D8%B1%D9%82%D9%8A%D8%A9%207063123&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} />
    <style dangerouslySetInnerHTML={{ __html: ".mapouter{{ position: 'relative', textAlign: 'right', height: '100%', width: '100%' }}" }} />
    <style dangerouslySetInnerHTML={{ __html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:'100%';}" }} />
  </div>
</div>
</div>
    </>
  )
}

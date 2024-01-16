import React from 'react'
function loaded(){
  
}
export default function Trending() {
  return (
    <div className='container' onLoad={loaded}>

<div className='row'>
<h1 style={{color:'#ED7D31'}}>Testimonials</h1>
<div className='col-sm-12 col-md-6 col-lg-4'>

<figure class="snip1390">
  <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample3.jpg" alt="profile-sample3" class="profile" />
  <figcaption>
    <h2>Eleanor Crisp</h2>
    <h4>UX Design</h4>
    <blockquote>Dad buried in landslide! Jubilant throngs fill streets! Stunned father inconsolable - demands recount!</blockquote>
  </figcaption>
</figure>

</div>

<div className='col-sm-12 col-md-6 col-lg-4'>

<figure class="snip1390 hover"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample5.jpg" alt="profile-sample5" class="profile" />
  <figcaption>
    <h2>Gordon</h2>
    <h4>Accountant</h4>
    <blockquote>Wormwood : Calvin, how about you? Calvin : Hard to say ma'am. I think my cerebellum has just fused. </blockquote>
  </figcaption>
</figure>

</div>

<div className='col-sm-12 col-md-6 col-lg-4'>

<figure class="snip1390"><img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/331810/profile-sample6.jpg" alt="profile-sample6" class="profile" />
  <figcaption>
    <h2>Sue Shei</h2>
    <h4>Public Relations</h4>
    <blockquote>The strength to change what I can, the inability to accept what I can't and the incapacity to tell the difference.</blockquote>
  </figcaption>
</figure>

</div>




      
</div>
    </div>
  )
}

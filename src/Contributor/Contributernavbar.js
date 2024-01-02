import React from 'react'
import img from "../Assets/logo.png"

function Contributernavbar() {
  return (
    <div>
        <ul class="nav nav-underline">
            <li class="nav-item">
                <img src={img} alt='image' height="50px" width="50px"/>
            </li>
    <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>

  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Link</a>
  </li>
</ul>
    </div>
  )
}

export default Contributernavbar
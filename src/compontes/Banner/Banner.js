import React from 'react'
import './Banner.css';

const Banner = () => {
  return (
    <div className='Banner'>
    <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="1000">
      <img src="https://t4.ftcdn.net/jpg/01/67/25/37/360_F_167253732_FVaF7PyA5vat3JVPvP4F5AsCoZkYAnZF.jpg" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN24xUsWF_9VZzCk1QU-B1Phv0QUJl-MAvbw&s" class="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item" data-bs-interval="1000">
      <img src="https://ilovesarees.com/cdn/shop/files/Premium-Barbie-Pink-Banarasi-Silk-Saree-I-Love-Sarees1.webp?v=1727956731" class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
    </div>   
  )

}

export default Banner
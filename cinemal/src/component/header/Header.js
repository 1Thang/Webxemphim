import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header >
        <section>
          <div className='backgrou'>
          <div className="my-flex-container">
            <Link >
              <img src='/logo.png'  style={{height:"60px"}}></img>
            </Link>
            <Link className="datve" >Đặt vé ngay</Link> 
            <div className="my-search-container"  >
                <input style={{height:'30px'}} type="text" placeholder="Tên phim.." name="search" />
                <button style={{height:'35px'}} type="submit">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            <Link className='dangnhap'>Đăng nhập/Đăng ký</Link>         
          </div>
          </div>
          <div className="inline-divs"> 
          <div className="my-topnav">
            <Link>Chọn rạp</Link>
            
          </div>
          <div className='Km'>
            <Link>Khuyến mãi</Link>
            <Link>Giới thiệu</Link>
            </div>
           </div> 
           </div>
      </section>
    </header>
  );
}
export default Header;
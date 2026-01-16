import styled from 'styled-components'

export const NavBar = styled.div`
  position: relative;
  width: 100%;
  background: #fff;
  margin-bottom: 20px;

  .nav-top {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  .logo img {
    width: 150px;
  }

  ul {
    list-style: none;
    display: flex;
   justify-content: end;
    gap: 40px;
    align-items: center;
  }

  li {
    cursor: pointer;
  }

  .quoteBtn {
    padding: 20px 35px;
  }
  .hamBtn {
    display: none;
    font-size: 28px;
    cursor: pointer;
  }
  .mob-menu {
     position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
    overflow: hidden;
    max-height: 0;
    transform: translateY(-10px);
    opacity: 0;
    transition: 
      max-height 0.8s ease,
      transform 0.8s ease,
      opacity 0.6s ease;
  } 

  .mob-menu.open {
    max-height: 500px;  
    transform: translateY(0);
    opacity: 1;
  }
  @media (max-width: 992px) {
    .web-menu,
    .quoteBtn {
      display: none;
    }

    .hamBtn {
      display: block;
    }
  }

`

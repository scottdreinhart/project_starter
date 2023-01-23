import React from 'react';
import Header from '../Header/Header';
import Content from '../Content/Content';
import Content3 from '../Content3';
import Content4 from '../Content4';
import Content5 from '../Content5';
import Content6 from '../Content6';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

function MainPage() {
  return (
    <section>
      <div className="layout">
        <div className="Header">
          <Header />
        </div>
        <div className="Content">
          <Content />
        </div>
        <div className="content3">
          <Content3 />
        </div>
        <div className="content4">
          <Content4 />
        </div>
        <div className="content5">
          <Content5 />
        </div>
        <div className="content6">
          <Content6 />
        </div>
        <div className="Footer">
          <Footer />
        </div>
        <SideBar />
      </div>
    </section>
  );
}

export default MainPage;

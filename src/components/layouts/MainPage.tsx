import React from 'react';

import Header from '../Header/Header';
import Content from '../Content/Content';
import Content3 from '../Content3/Content3';
import Content4 from '../Content4/Content4';
import Content5 from '../Content5/Content5';
import Content6 from '../Content6/Content6';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';

function MainPage() {
  return (
    <section>
      <div className="layout">
        <Header />
        <Content />
        <Content3 />
        <Content4 />
        <Content5 />
        <Content6 />
        <Footer />
        <SideBar />
      </div>
    </section>
  );
}

export default MainPage;

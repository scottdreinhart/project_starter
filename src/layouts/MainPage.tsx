import React from 'react';

import Header from '../components/Header/Header';
import Content from '../components/Content/Content';
import Content3 from '../components/Content3/Content3';
import Content4 from '../components/Content4/Content4';
import Content5 from '../components/Content5/Content5';
import Content6 from '../components/Content6/Content6';
import Footer from '../components/Footer/Footer';
import SideBar from '../components/SideBar/SideBar';

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

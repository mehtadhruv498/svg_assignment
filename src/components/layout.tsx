import React from 'react';
import './__layout.scss';
import Header from './layout_files/header';
import Content from './layout_files/content';
import Sidebar from './layout_files/sidebar';
const BasicLayout = () => {
  return (
    <div className="basic-layout">
      <header className="header"><Header /></header>
      <aside className="sidebar"><Sidebar /></aside>
      <main className="content"><Content /></main>
    </div>
  );
};

export default BasicLayout;

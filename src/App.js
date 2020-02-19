import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import Header from './components/Main/Header';
import Aside from './components/Main/Aside';
import Footer from './components/Main/Footer';
import Routes from './routes';

function App() {
  return (
    <Router>
      <article>
        {/* 主体头部 */}
        <header>
          <Header />
        </header>
        {/* 内容区域 */}
        <main>
          {/* 路由切换 */}
          <section>
            <Routes />
          </section>
          {/* 侧边栏 */}
          <aside>
            <Aside />
          </aside>
        </main>
        {/* 主体底部 */}
        <footer>
          <Footer/>
        </footer>
      </article>
    </Router>
  );
}

export default App;

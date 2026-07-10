import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="content-card">
      <h2>ホームページへようこそ！</h2>
      <p>このサイトでは様々な情報を提供しています。メニューからご興味のあるページをご覧ください。</p>
    </section>
  );
}

const About = () => {
  return (
    <section className="content-card">
      <h2>お問い合わせ</h2>
      <p>ご質問やご相談がありましたら、お気軽にお問い合わせください。</p>
    </section>
  );
}

const Profile = () => {
  return (
    <section className="content-card">
      <h2>プロフィール</h2>
      <p>プロフィール情報をこちらに表示します。</p>
    </section>
  );
}

const App = () => {
  return (
    <BrowserRouter>
      <header className="site-header">
        <nav className="site-nav">
          <h1 className="site-title">MyApp</h1>
          <div className="nav-links">
            <Link className="nav-link active" to="/">🏠 ホーム</Link>
            <Link className="nav-link" to="/profile">👤 プロフィール</Link>
            <Link className="nav-link" to="/about">📧 お問い合わせ</Link>
          </div>
        </nav>
      </header>
      <main className="page-main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;

import { useState } from 'react'
import './App.css'
import { works } from './data/works'

const navigation = [
  ['about', 'About'],
  ['history', 'History'],
  ['interesting', 'Interesting'],
  ['skills', 'Skills'],
  ['works', 'Works'],
  ['contact', 'Contact'],
]

function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <a className="brand" href="#top" aria-label="Ayuma Ishihara トップへ">
        <span>AI</span><span className="brand-dot" />
      </a>
      <button
        className="menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="global-navigation"
        onClick={() => setOpen((value) => !value)}
      >
        <span /><span />
        <span className="sr-only">メニューを開閉</span>
      </button>
      <nav id="global-navigation" className={open ? 'navigation is-open' : 'navigation'} aria-label="メインナビゲーション">
        {navigation.map(([id, label]) => (
          <a key={id} href={`#${id}`} onClick={() => setOpen(false)}>{label}</a>
        ))}
      </nav>
    </header>
  )
}

function SectionTitle({ number, children, light = false }) {
  return (
    <div className={`section-heading${light ? ' section-heading-light' : ''}`}>
      <span>{number}</span>
      <h2>{children}</h2>
    </div>
  )
}

function Hero() {
  return (
    <section className="hero" id="top" aria-labelledby="hero-title">
      <img className="hero-image" src="./assets/ayuma-hero.jpg" alt="ワークショップに参加する石原歩真" />
      <div className="hero-shade" />
      <div className="hero-copy">
        <p className="eyebrow">PORTFOLIO / 2026</p>
        <h1 id="hero-title"><span>A</span>yuma<br />Ishihara</h1>
        <p className="hero-role">Technology × Business × Design</p>
      </div>
      <a className="scroll-cue" href="#about"><span>SCROLL</span><i /></a>
    </section>
  )
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-inner">
        <SectionTitle number="01">About</SectionTitle>
        <div className="about-grid">
          <div className="about-image-wrap">
            <img src="./assets/ayuma-profile.jpg" alt="石原歩真のプロフィール写真" loading="lazy" />
            <span>AYUMA<br />ISHIHARA</span>
          </div>
          <div className="about-copy">
            <p className="lead">AIとロボットで、<br />人の「楽しい」を支える。</p>
            <p>AIとロボットが人間の生活の中に入り込み、本当にドラえもんのような世界が実現する。そんな未来を目指して、技術とビジネスの両面から挑戦しています。</p>
            <p>便利さだけを追うのではなく、人が心から楽しめる時間を支え、その中に残る不便を取り除くこと。それが、私のものづくりです。</p>
            <dl className="profile-meta">
              <div><dt>NAME</dt><dd>石原 歩真 / Ayuma Ishihara</dd></div>
              <div><dt>BASE</dt><dd>Kamiyama, Tokushima</dd></div>
              <div><dt>FOCUS</dt><dd>Physical AI / Robotics / Business</dd></div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}

const history = [
  { step: '01', period: '〜中学校', title: '好奇心の原点', text: '静岡県で生まれ、サッカーに没頭。小中学校ともに県大会へ進出し、地元のイノベーションを考えるコンテストにも挑戦しました。' },
  { step: '02', period: '高専入学〜', title: '技術と事業を学ぶ', text: '起業家を志し、神山まるごと高専へ。1年目はロボットとAI、2年目はビジネスやインターンに軸足を置き、実践を重ねています。' },
  { step: '03', period: '起業〜', title: 'フィジカルAIへ', text: '高専での経験を起点に、AI・ロボットに強い仲間とチームを形成。技術を社会実装するための新たな挑戦を始めています。' },
]

function History() {
  return (
    <section className="section history" id="history">
      <div className="section-inner">
        <SectionTitle number="02" light>History</SectionTitle>
        <div className="timeline">
          {history.map((item) => (
            <article className="history-item" key={item.step}>
              <div className="step"><strong>{item.step}</strong><span>STEP</span></div>
              <div className="history-content">
                <p>{item.period}</p>
                <h3>{item.title}</h3>
                <span>{item.text}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const interests = [
  { number: '01', name: 'ROBOT', text: '人の生活空間で動き、身体性を持って役に立つロボット。機構と制御の両方を学んでいます。' },
  { number: '02', name: 'AI', text: '画像分析を中心に、現実世界を理解するAI。精度だけでなく使う人の体験まで設計します。' },
  { number: '03', name: 'BUSINESS', text: '良い技術を社会へ届け、続く仕組みにするための事業設計。インターンと実践から学んでいます。' },
]

function Interesting() {
  return (
    <section className="section interesting" id="interesting">
      <div className="section-inner">
        <SectionTitle number="03">Interesting</SectionTitle>
        <div className="interest-intro">
          <p className="lead">異なる知識を、<br />ひとつの挑戦に。</p>
          <p>ロボットやAIの専門性と、ビジネスの視点。その二つを組み合わせ、まだ形になっていない価値を社会へ届けます。</p>
        </div>
        <div className="interest-grid">
          {interests.map((item) => (
            <article key={item.name} className="interest-card">
              <span>{item.number}</span><h3>{item.name}</h3><p>{item.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

const skills = ['Python', 'JavaScript', 'React', 'HTML / CSS', 'OpenCV', 'Figma', 'Robot Control', 'Business Strategy']

function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="section-inner">
        <SectionTitle number="04">Skills / Other</SectionTitle>
        <div className="skills-layout">
          <p>デザイン・テクノロジー・起業家精神を横断して学べる環境を活かし、つくる力と届ける力の両方を磨いています。</p>
          <ul>{skills.map((skill, index) => <li key={skill}><span>{String(index + 1).padStart(2, '0')}</span>{skill}</li>)}</ul>
        </div>
      </div>
    </section>
  )
}

function Works() {
  const [active, setActive] = useState('All')
  const categories = ['All', 'Technology', 'Design', 'Business']
  const visibleWorks = active === 'All' ? works : works.filter((work) => work.category === active)

  return (
    <section className="section works" id="works">
      <div className="section-inner">
        <SectionTitle number="05" light>Activities &amp; Works</SectionTitle>
        <p className="works-intro">興味と得意分野を活かして、領域を越えたプロジェクトに取り組んできました。</p>
        <div className="filters" role="group" aria-label="作品カテゴリー">
          {categories.map((category) => (
            <button key={category} type="button" className={active === category ? 'active' : ''} aria-pressed={active === category} onClick={() => setActive(category)}>{category}</button>
          ))}
        </div>
        <div className="works-grid" aria-live="polite">
          {visibleWorks.map((work) => (
            <article className="work-card" key={work.id}>
              <div className="work-visual"><img src={work.image} alt="" loading="lazy" /><span>{work.year}</span></div>
              <div className="work-body">
                <div className="work-tags">{work.tags.map((tag) => <span key={tag}>#{tag}</span>)}</div>
                <h3>{work.title}</h3>
                <p className="work-role">{work.role}</p>
                <p>{work.summary}</p>
                <span className="work-category">{work.category}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'お名前を入力してください。'
  if (!values.email.trim()) errors.email = 'メールアドレスを入力してください。'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) errors.email = '正しいメールアドレスを入力してください。'
  if (!values.message.trim()) errors.message = 'ご相談内容を入力してください。'
  else if (values.message.trim().length < 10) errors.message = '10文字以上で入力してください。'
  return errors
}

function Contact() {
  const [values, setValues] = useState({ name: '', organization: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState(false)
  const update = (event) => setValues({ ...values, [event.target.name]: event.target.value })
  const submit = (event) => {
    event.preventDefault()
    const nextErrors = validate(values)
    setErrors(nextErrors)
    setSent(Object.keys(nextErrors).length === 0)
  }

  return (
    <section className="section contact" id="contact">
      <div className="section-inner">
        <SectionTitle number="06">Contact</SectionTitle>
        <div className="contact-layout">
          <div className="contact-copy">
            <p className="lead">Let&apos;s create<br />the next.</p>
            <p>興味を持ってくださった企業・プロジェクトの皆さま、ぜひ一度ご連絡ください。</p>
          </div>
          <form className="contact-form" onSubmit={submit} noValidate>
            <FormField label="お名前" name="name" value={values.name} error={errors.name} onChange={update} required />
            <FormField label="所属" name="organization" value={values.organization} onChange={update} />
            <FormField label="メールアドレス" name="email" type="email" value={values.email} error={errors.email} onChange={update} required />
            <FormField label="ご相談内容" name="message" value={values.message} error={errors.message} onChange={update} textarea required />
            <button className="submit-button" type="submit"><span>送信内容を確認</span><i>↗</i></button>
            {sent && <p className="form-success" role="status">入力内容を確認できました。送信先サービスを接続すると実際に送信できます。</p>}
          </form>
        </div>
      </div>
    </section>
  )
}

function FormField({ label, name, type = 'text', value, error, onChange, textarea = false, required = false }) {
  const id = `field-${name}`
  const props = { id, name, value, onChange, 'aria-invalid': Boolean(error), 'aria-describedby': error ? `${id}-error` : undefined }
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}{required && <span> *</span>}</label>
      {textarea ? <textarea {...props} rows="6" /> : <input {...props} type={type} />}
      {error && <p className="field-error" id={`${id}-error`}>{error}</p>}
    </div>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <a href="#top" className="footer-name">AYUMA<br />ISHIHARA</a>
      <p>Technology × Business × Design</p>
      <p className="copyright">© 2026 Ayuma Ishihara</p>
    </footer>
  )
}

function App() {
  return <><Header /><main><Hero /><About /><History /><Interesting /><Skills /><Works /><Contact /></main><Footer /></>
}

export default App

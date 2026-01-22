const services = [
  {
    title: 'พัฒนาซอฟต์แวร์ตามความต้องการ',
    description:
      'สร้างระบบเว็บและแอปพลิเคชันที่ยืดหยุ่น เชื่อมต่อ API และรองรับการเติบโตของธุรกิจ'
  },
  {
    title: 'ที่ปรึกษาเทคโนโลยี',
    description:
      'วิเคราะห์โครงสร้างระบบเดิม วางแผน Modernization และเลือกเทคโนโลยีที่เหมาะสม'
  },
  {
    title: 'ดูแลระบบและ DevOps',
    description:
      'จัดการ CI/CD, Cloud Infrastructure และการมอนิเตอร์เพื่อให้ระบบเสถียรตลอดเวลา'
  }
];

const highlights = [
  'ทีมวิศวกรที่มีประสบการณ์กับองค์กรเทคโนโลยีชั้นนำ',
  'ออกแบบสถาปัตยกรรมที่ปลอดภัยและรองรับการขยายระบบ',
  'สื่อสารด้วยรายงานที่ชัดเจนและการส่งมอบตรงเวลา'
];

const steps = [
  {
    step: '01',
    title: 'Discovery',
    detail: 'ทำความเข้าใจเป้าหมายธุรกิจและปัญหาที่ต้องการแก้ไข'
  },
  {
    step: '02',
    title: 'Solution Design',
    detail: 'ออกแบบโซลูชันเชิงเทคนิคและแผนการส่งมอบที่เหมาะสม'
  },
  {
    step: '03',
    title: 'Development',
    detail: 'พัฒนาและทดสอบระบบด้วยมาตรฐานคุณภาพระดับสากล'
  },
  {
    step: '04',
    title: 'Launch & Care',
    detail: 'ติดตั้งระบบ พร้อมดูแลหลังส่งมอบเพื่อให้ใช้งานได้จริง'
  }
];

const testimonials = [
  {
    name: 'คุณปิยะ',
    role: 'CTO, Fintech Startup',
    quote:
      'ทีม BlueWave ช่วยยกระดับระบบเราให้รองรับผู้ใช้งานเพิ่มขึ้น 5 เท่า พร้อมแผน DevOps ที่ชัดเจน'
  },
  {
    name: 'คุณศิริ',
    role: 'Head of Product, SaaS Company',
    quote:
      'การสื่อสารดีมาก และส่งมอบงานตรงเวลา ทำให้ทีมของเราทำงานร่วมกันได้อย่างราบรื่น'
  }
];

const App = () => {
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">BlueWave Tech</div>
          <div className="nav-links">
            <a href="#services">บริการ</a>
            <a href="#solutions">โซลูชัน</a>
            <a href="#process">กระบวนการ</a>
            <a href="#contact" className="button ghost">
              ติดต่อเรา
            </a>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="tag">บริษัทเทคโนโลยีเพื่อการพัฒนาซอฟต์แวร์</p>
            <h1>
              เราช่วยธุรกิจสร้างระบบดิจิทัลที่ทันสมัยด้วยทีมผู้เชี่ยวชาญด้านการเขียนโปรแกรม
            </h1>
            <p className="subtitle">
              BlueWave Tech Services เป็นพาร์ตเนอร์ด้านเทคโนโลยีที่ดูแลตั้งแต่การวางแผน
              พัฒนา ไปจนถึงดูแลระบบหลังเปิดใช้งานอย่างครบวงจร
            </p>
            <div className="hero-actions">
              <button className="button primary">รับคำปรึกษาฟรี</button>
              <button className="button secondary">ดูผลงานล่าสุด</button>
            </div>
            <div className="metrics">
              <div>
                <h3>120+</h3>
                <span>โครงการสำเร็จ</span>
              </div>
              <div>
                <h3>98%</h3>
                <span>ความพึงพอใจลูกค้า</span>
              </div>
              <div>
                <h3>24/7</h3>
                <span>ดูแลระบบ</span>
              </div>
            </div>
          </div>
          <div className="hero-card">
            <h4>โซลูชันเด่นของเรา</h4>
            <ul>
              <li>
                <span>Digital Platform</span>
                <small>แพลตฟอร์มสำหรับการให้บริการลูกค้า</small>
              </li>
              <li>
                <span>Data Analytics</span>
                <small>แดชบอร์ดเรียลไทม์เพื่อการตัดสินใจ</small>
              </li>
              <li>
                <span>Automation</span>
                <small>ระบบอัตโนมัติช่วยลดต้นทุนและเวลา</small>
              </li>
            </ul>
            <div className="card-footer">
              <p>พร้อมเริ่มต้นโปรเจกต์ใหม่?</p>
              <button className="button ghost">นัดหมายคุยงาน</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="services">
        <div className="section-header">
          <h2>บริการหลัก</h2>
          <p>
            โซลูชันครบวงจรสำหรับองค์กรที่ต้องการยกระดับบริการด้วยซอฟต์แวร์คุณภาพสูง
          </p>
        </div>
        <div className="grid three">
          {services.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="solutions">
        <div className="section-header">
          <h2>เหตุผลที่องค์กรเทคโนโลยีเลือกเรา</h2>
          <p>เราสร้างความมั่นใจด้วยมาตรฐานการพัฒนาและการดูแลหลังส่งมอบ</p>
        </div>
        <div className="grid two">
          <div className="stack">
            {highlights.map((item) => (
              <div className="highlight" key={item}>
                <span className="dot"></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="panel">
            <h3>เทคโนโลยีที่เราใช้</h3>
            <p>
              React, Node.js, Python, AWS, Kubernetes และชุดเครื่องมือที่ทันสมัยเพื่อให้ระบบของคุณ
              พร้อมแข่งขันในตลาด
            </p>
            <div className="pill-group">
              <span>Full-Stack</span>
              <span>Cloud Native</span>
              <span>Cyber Security</span>
              <span>UX Research</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-header">
          <h2>กระบวนการทำงาน</h2>
          <p>มีความโปร่งใสทุกขั้นตอน พร้อมรายงานสถานะอย่างสม่ำเสมอ</p>
        </div>
        <div className="grid four">
          {steps.map((item) => (
            <article className="process" key={item.step}>
              <span>{item.step}</span>
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt">
        <div className="section-header">
          <h2>เสียงจากลูกค้า</h2>
          <p>ทีมของเรามุ่งเน้นผลลัพธ์ที่วัดผลได้และทำงานร่วมกับลูกค้าอย่างใกล้ชิด</p>
        </div>
        <div className="grid two">
          {testimonials.map((item) => (
            <article className="testimonial" key={item.name}>
              <p>“{item.quote}”</p>
              <div>
                <strong>{item.name}</strong>
                <span>{item.role}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cta" id="contact">
        <div>
          <h2>พร้อมสร้างระบบที่ขับเคลื่อนธุรกิจของคุณหรือยัง?</h2>
          <p>ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อรับแผนงานและใบเสนอราคาที่เหมาะกับองค์กรคุณ</p>
        </div>
        <button className="button primary">ติดต่อผู้เชี่ยวชาญ</button>
      </section>

      <footer className="footer">
        <div>
          <h3>BlueWave Tech Services</h3>
          <p>ยกระดับธุรกิจของคุณด้วยบริการด้านการเขียนโปรแกรมและโซลูชันดิจิทัล</p>
        </div>
        <div>
          <h4>ติดต่อ</h4>
          <p>hello@bluewavetech.co</p>
          <p>02-123-4567</p>
        </div>
        <div>
          <h4>ที่ตั้งสำนักงาน</h4>
          <p>อาคาร The Blue Hub, กรุงเทพฯ</p>
          <p>เปิดทำการ จ.-ศ. 09:00-18:00</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

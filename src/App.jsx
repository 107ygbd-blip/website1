import { useState } from 'react';

const content = {
  th: {
    nav: {
      logo: 'Qodexity',
      services: 'บริการ',
      solutions: 'โซลูชัน',
      process: 'กระบวนการ',
      contact: 'ติดต่อเรา',
      languageLabel: 'ภาษา'
    },
    hero: {
      tag: 'บริษัทเทคโนโลยีเพื่อการพัฒนาซอฟต์แวร์',
      title:
        'เราช่วยธุรกิจสร้างระบบดิจิทัลที่ทันสมัยด้วยทีมผู้เชี่ยวชาญด้านการเขียนโปรแกรม',
      subtitle:
        'Qodexity Tech Services เป็นพาร์ตเนอร์ด้านเทคโนโลยีที่ดูแลตั้งแต่การวางแผน พัฒนา ไปจนถึงดูแลระบบหลังเปิดใช้งานอย่างครบวงจร',
      primaryCta: 'รับคำปรึกษาฟรี',
      secondaryCta: 'ดูผลงานล่าสุด',
      metrics: [
        { value: '120+', label: 'โครงการสำเร็จ' },
        { value: '98%', label: 'ความพึงพอใจลูกค้า' },
        { value: '24/7', label: 'ดูแลระบบ' }
      ],
      cardTitle: 'โซลูชันเด่นของเรา',
      cardItems: [
        {
          title: 'Digital Platform',
          detail: 'แพลตฟอร์มสำหรับการให้บริการลูกค้า'
        },
        {
          title: 'Data Analytics',
          detail: 'แดชบอร์ดเรียลไทม์เพื่อการตัดสินใจ'
        },
        {
          title: 'Automation',
          detail: 'ระบบอัตโนมัติช่วยลดต้นทุนและเวลา'
        }
      ],
      cardCta: 'นัดหมายคุยงาน',
      cardFooter: 'พร้อมเริ่มต้นโปรเจกต์ใหม่?'
    },
    services: {
      title: 'บริการหลัก',
      subtitle: 'โซลูชันครบวงจรสำหรับองค์กรที่ต้องการยกระดับบริการด้วยซอฟต์แวร์คุณภาพสูง',
      items: [
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
      ]
    },
    solutions: {
      title: 'เหตุผลที่องค์กรเทคโนโลยีเลือกเรา',
      subtitle: 'เราสร้างความมั่นใจด้วยมาตรฐานการพัฒนาและการดูแลหลังส่งมอบ',
      highlights: [
        'ทีมวิศวกรที่มีประสบการณ์กับองค์กรเทคโนโลยีชั้นนำ',
        'ออกแบบสถาปัตยกรรมที่ปลอดภัยและรองรับการขยายระบบ',
        'สื่อสารด้วยรายงานที่ชัดเจนและการส่งมอบตรงเวลา'
      ],
      panelTitle: 'เทคโนโลยีที่เราใช้',
      panelDetail:
        'React, Node.js, Python, AWS, Kubernetes และชุดเครื่องมือที่ทันสมัยเพื่อให้ระบบของคุณพร้อมแข่งขันในตลาด',
      panelPills: ['Full-Stack', 'Cloud Native', 'Cyber Security', 'UX Research']
    },
    process: {
      title: 'กระบวนการทำงาน',
      subtitle: 'มีความโปร่งใสทุกขั้นตอน พร้อมรายงานสถานะอย่างสม่ำเสมอ',
      steps: [
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
      ]
    },
    testimonials: {
      title: 'เสียงจากลูกค้า',
      subtitle: 'ทีมของเรามุ่งเน้นผลลัพธ์ที่วัดผลได้และทำงานร่วมกับลูกค้าอย่างใกล้ชิด',
      items: [
        {
          name: 'คุณปิยะ',
          role: 'CTO, Fintech Startup',
          quote:
            'ทีม Qodexity ช่วยยกระดับระบบเราให้รองรับผู้ใช้งานเพิ่มขึ้น 5 เท่า พร้อมแผน DevOps ที่ชัดเจน'
        },
        {
          name: 'คุณศิริ',
          role: 'Head of Product, SaaS Company',
          quote:
            'การสื่อสารดีมาก และส่งมอบงานตรงเวลา ทำให้ทีมของเราทำงานร่วมกันได้อย่างราบรื่น'
        }
      ]
    },
    cta: {
      title: 'พร้อมสร้างระบบที่ขับเคลื่อนธุรกิจของคุณหรือยัง?',
      subtitle: 'ติดต่อทีมผู้เชี่ยวชาญของเราเพื่อรับแผนงานและใบเสนอราคาที่เหมาะกับองค์กรคุณ',
      button: 'ติดต่อผู้เชี่ยวชาญ'
    },
    footer: {
      brand: 'Qodexity Tech Services',
      description: 'ยกระดับธุรกิจของคุณด้วยบริการด้านการเขียนโปรแกรมและโซลูชันดิจิทัล',
      contactTitle: 'ติดต่อ',
      email: 'hello@qodexity.co',
      phone: '02-123-4567',
      locationTitle: 'ที่ตั้งสำนักงาน',
      location: 'อาคาร The Blue Hub, กรุงเทพฯ',
      hours: 'เปิดทำการ จ.-ศ. 09:00-18:00'
    }
  },
  en: {
    nav: {
      logo: 'Qodexity',
      services: 'Services',
      solutions: 'Solutions',
      process: 'Process',
      contact: 'Contact',
      languageLabel: 'Language'
    },
    hero: {
      tag: 'Technology company for software development',
      title: 'We build modern digital systems with a seasoned programming team.',
      subtitle:
        'Qodexity Tech Services is your technology partner from planning and development to post-launch support.',
      primaryCta: 'Get a free consultation',
      secondaryCta: 'View recent work',
      metrics: [
        { value: '120+', label: 'Projects delivered' },
        { value: '98%', label: 'Client satisfaction' },
        { value: '24/7', label: 'System support' }
      ],
      cardTitle: 'Featured solutions',
      cardItems: [
        {
          title: 'Digital Platform',
          detail: 'Service platforms for better customer experiences'
        },
        {
          title: 'Data Analytics',
          detail: 'Real-time dashboards for smarter decisions'
        },
        {
          title: 'Automation',
          detail: 'Workflow automation that saves time and cost'
        }
      ],
      cardCta: 'Book a discovery call',
      cardFooter: 'Ready to start your next project?'
    },
    services: {
      title: 'Core services',
      subtitle: 'End-to-end solutions for organizations upgrading with high-quality software.',
      items: [
        {
          title: 'Custom software development',
          description:
            'Build scalable web and mobile apps with flexible APIs and future-ready architectures.'
        },
        {
          title: 'Technology consulting',
          description:
            'Assess legacy systems, plan modernization, and choose the right tools and stacks.'
        },
        {
          title: 'Managed systems & DevOps',
          description:
            'Run CI/CD, cloud infrastructure, and monitoring for always-on performance.'
        }
      ]
    },
    solutions: {
      title: 'Why leading tech teams choose us',
      subtitle: 'We build confidence through high standards in delivery and long-term care.',
      highlights: [
        'Seasoned engineers with enterprise technology experience',
        'Secure architectures designed to scale with your business',
        'Clear reporting and on-time delivery at every stage'
      ],
      panelTitle: 'Our technology stack',
      panelDetail:
        'React, Node.js, Python, AWS, Kubernetes, and modern tooling to keep you competitive.',
      panelPills: ['Full-Stack', 'Cloud Native', 'Cyber Security', 'UX Research']
    },
    process: {
      title: 'Delivery process',
      subtitle: 'Transparent checkpoints with consistent progress reports.',
      steps: [
        {
          step: '01',
          title: 'Discovery',
          detail: 'Understand business goals and identify critical challenges.'
        },
        {
          step: '02',
          title: 'Solution Design',
          detail: 'Design the technical solution and a delivery roadmap.'
        },
        {
          step: '03',
          title: 'Development',
          detail: 'Build and test with quality standards and best practices.'
        },
        {
          step: '04',
          title: 'Launch & Care',
          detail: 'Deploy and provide post-launch support for real-world usage.'
        }
      ]
    },
    testimonials: {
      title: 'Client feedback',
      subtitle: 'We focus on measurable outcomes and close collaboration.',
      items: [
        {
          name: 'Piya',
          role: 'CTO, Fintech Startup',
          quote:
            'Qodexity helped us scale to 5x users with a clear DevOps plan that keeps everything stable.'
        },
        {
          name: 'Siri',
          role: 'Head of Product, SaaS Company',
          quote:
            'Communication was excellent and delivery was on time, making collaboration seamless.'
        }
      ]
    },
    cta: {
      title: 'Ready to build the digital systems that move your business forward?',
      subtitle: 'Talk to our experts for a roadmap and pricing that fits your organization.',
      button: 'Contact our experts'
    },
    footer: {
      brand: 'Qodexity Tech Services',
      description: 'Elevate your business with programming services and digital solutions.',
      contactTitle: 'Contact',
      email: 'hello@qodexity.co',
      phone: '+66 2 123 4567',
      locationTitle: 'Office',
      location: 'The Blue Hub Building, Bangkok',
      hours: 'Open Mon-Fri, 09:00-18:00'
    }
  }
};

const App = () => {
  const [language, setLanguage] = useState('th');
  const copy = content[language];
  return (
    <div className="app">
      <header className="hero">
        <nav className="nav">
          <div className="logo">{copy.nav.logo}</div>
          <div className="nav-links">
            <a href="#services">{copy.nav.services}</a>
            <a href="#solutions">{copy.nav.solutions}</a>
            <a href="#process">{copy.nav.process}</a>
            <a href="#contact" className="button ghost">
              {copy.nav.contact}
            </a>
            <div className="language-toggle">
              <span>{copy.nav.languageLabel}</span>
              <button
                className={`button ghost ${language === 'th' ? 'active' : ''}`}
                onClick={() => setLanguage('th')}
                type="button"
              >
                TH
              </button>
              <button
                className={`button ghost ${language === 'en' ? 'active' : ''}`}
                onClick={() => setLanguage('en')}
                type="button"
              >
                EN
              </button>
            </div>
          </div>
        </nav>
        <div className="hero-content">
          <div className="hero-text">
            <p className="tag">{copy.hero.tag}</p>
            <h1>{copy.hero.title}</h1>
            <p className="subtitle">{copy.hero.subtitle}</p>
            <div className="hero-actions">
              <button className="button primary">{copy.hero.primaryCta}</button>
              <button className="button secondary">{copy.hero.secondaryCta}</button>
            </div>
            <div className="metrics">
              {copy.hero.metrics.map((metric) => (
                <div key={metric.label}>
                  <h3>{metric.value}</h3>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card">
            <h4>{copy.hero.cardTitle}</h4>
            <ul>
              {copy.hero.cardItems.map((item) => (
                <li key={item.title}>
                  <span>{item.title}</span>
                  <small>{item.detail}</small>
                </li>
              ))}
            </ul>
            <div className="card-footer">
              <p>{copy.hero.cardFooter}</p>
              <button className="button ghost">{copy.hero.cardCta}</button>
            </div>
          </div>
        </div>
      </header>

      <section className="section" id="services">
        <div className="section-header">
          <h2>{copy.services.title}</h2>
          <p>{copy.services.subtitle}</p>
        </div>
        <div className="grid three">
          {copy.services.items.map((service) => (
            <article className="card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section alt" id="solutions">
        <div className="section-header">
          <h2>{copy.solutions.title}</h2>
          <p>{copy.solutions.subtitle}</p>
        </div>
        <div className="grid two">
          <div className="stack">
            {copy.solutions.highlights.map((item) => (
              <div className="highlight" key={item}>
                <span className="dot"></span>
                <p>{item}</p>
              </div>
            ))}
          </div>
          <div className="panel">
            <h3>{copy.solutions.panelTitle}</h3>
            <p>{copy.solutions.panelDetail}</p>
            <div className="pill-group">
              {copy.solutions.panelPills.map((pill) => (
                <span key={pill}>{pill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="process">
        <div className="section-header">
          <h2>{copy.process.title}</h2>
          <p>{copy.process.subtitle}</p>
        </div>
        <div className="grid four">
          {copy.process.steps.map((item) => (
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
          <h2>{copy.testimonials.title}</h2>
          <p>{copy.testimonials.subtitle}</p>
        </div>
        <div className="grid two">
          {copy.testimonials.items.map((item) => (
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
          <h2>{copy.cta.title}</h2>
          <p>{copy.cta.subtitle}</p>
        </div>
        <button className="button primary">{copy.cta.button}</button>
      </section>

      <footer className="footer">
        <div>
          <h3>{copy.footer.brand}</h3>
          <p>{copy.footer.description}</p>
        </div>
        <div>
          <h4>{copy.footer.contactTitle}</h4>
          <p>{copy.footer.email}</p>
          <p>{copy.footer.phone}</p>
        </div>
        <div>
          <h4>{copy.footer.locationTitle}</h4>
          <p>{copy.footer.location}</p>
          <p>{copy.footer.hours}</p>
        </div>
      </footer>
    </div>
  );
};

export default App;

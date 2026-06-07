'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <main style={{fontFamily:"'Outfit',sans-serif",background:'#050508',color:'#e2e2ee',minHeight:'100vh'}}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400;1,500&family=Outfit:wght@300;400;500&display=swap');
        *{box-sizing:border-box;margin:0;padding:0}
        .nav{display:flex;align-items:center;justify-content:space-between;padding:0 2.5rem;height:66px;background:#050508;border-bottom:0.5px solid rgba(255,255,255,0.07);position:sticky;top:0;z-index:100}
        .logo{font-family:'Cormorant Garamond',serif;font-size:24px;font-weight:600;letter-spacing:4px;color:#fff;text-transform:uppercase}
        .logo em{color:#7c9fff;font-style:italic}
        .nav-links{display:flex;gap:2.5rem;align-items:center}
        .nav-links a{font-size:12px;font-weight:400;color:rgba(255,255,255,0.45);text-decoration:none;cursor:pointer;letter-spacing:0.8px;text-transform:uppercase}
        .nav-links a:hover{color:#fff}
        .btn-si{font-size:11px;font-weight:500;padding:8px 20px;letter-spacing:1px;text-transform:uppercase;border:0.5px solid rgba(255,255,255,0.18);border-radius:6px;background:transparent;color:#fff;cursor:pointer}
        .btn-si:hover{background:rgba(255,255,255,0.05)}
        .hero{min-height:520px;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:5rem 2rem;background:#050508;position:relative;overflow:hidden}
        .hg{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.018) 1px,transparent 1px);background-size:52px 52px}
        .hgl{position:absolute;width:500px;height:220px;background:radial-gradient(ellipse,rgba(100,130,255,0.1) 0%,transparent 70%);top:45%;left:50%;transform:translate(-50%,-50%)}
        .htag{font-size:10px;font-weight:500;letter-spacing:4px;text-transform:uppercase;color:#7c9fff;border:0.5px solid rgba(124,159,255,0.2);padding:5px 18px;border-radius:100px;margin-bottom:2.5rem;position:relative;z-index:1}
        .hero h1{font-family:'Cormorant Garamond',serif;font-size:82px;font-weight:500;line-height:0.92;color:#fff;position:relative;z-index:1;margin-bottom:1.5rem}
        .hero h1 em{font-style:italic;color:#7c9fff}
        .hero p{font-size:14px;font-weight:300;color:rgba(255,255,255,0.45);max-width:460px;line-height:1.85;position:relative;z-index:1;margin-bottom:2.5rem}
        .hbtns{display:flex;gap:1rem;position:relative;z-index:1}
        .bp{font-size:11px;font-weight:500;padding:11px 28px;letter-spacing:1px;text-transform:uppercase;background:#5b7fff;color:#fff;border:none;border-radius:6px;cursor:pointer}
        .bp:hover{background:#4a6ee8}
        .bg{font-size:11px;font-weight:400;padding:11px 28px;letter-spacing:1px;text-transform:uppercase;background:transparent;color:rgba(255,255,255,0.55);border:0.5px solid rgba(255,255,255,0.15);border-radius:6px;cursor:pointer}
        .sec{padding:5rem 2.5rem;max-width:920px;margin:0 auto}
        .eye{font-size:10px;font-weight:500;letter-spacing:4px;text-transform:uppercase;color:#5b7fff;margin-bottom:0.7rem}
        .stl{font-family:'Cormorant Garamond',serif;font-size:44px;font-weight:500;line-height:1.08;color:#fff;margin-bottom:0.7rem}
        .ssb{font-size:13px;font-weight:300;color:rgba(255,255,255,0.42);line-height:1.85;max-width:520px;margin-bottom:2.75rem}
        .cg{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:1px;background:rgba(255,255,255,0.06);border:0.5px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden}
        .gc{background:#0c0c14;padding:1.5rem 1.25rem}
        .gc h3{font-size:13px;font-weight:500;margin-bottom:0.4rem;color:#e2e2ee}
        .gc p{font-size:12px;color:rgba(255,255,255,0.38);line-height:1.7}
        .div{height:0.5px;background:rgba(255,255,255,0.06);margin:0 2.5rem}
        .tabs{display:flex;border:0.5px solid rgba(255,255,255,0.1);border-radius:8px;overflow:hidden;margin-bottom:2rem;width:fit-content}
        .tab{font-size:11px;font-weight:400;padding:9px 22px;cursor:pointer;letter-spacing:1px;text-transform:uppercase;background:transparent;color:rgba(255,255,255,0.38);border:none;border-right:0.5px solid rgba(255,255,255,0.1)}
        .tab:last-child{border-right:none}
        .tab.on{background:#5b7fff;color:#fff;font-weight:500}
        .sv{background:#0c0c14;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;padding:1.25rem;cursor:pointer}
        .sv.sel{border:1.5px solid #5b7fff;background:#0a0d1e}
        .svg2{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:1rem}
        .svtg{font-size:10px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;color:#7c9fff;background:rgba(91,127,255,0.1);padding:3px 10px;border-radius:100px}
        .sv h3{font-size:13px;font-weight:500;margin-bottom:0.4rem;color:#e2e2ee;margin-top:0.6rem}
        .sv p{font-size:12px;color:rgba(255,255,255,0.38);line-height:1.7;margin-bottom:0.8rem}
        .svp{font-size:12px;font-weight:500;color:#7c9fff}
        .bb{background:#08080f;border-radius:12px;padding:1rem 1.5rem;display:flex;align-items:center;justify-content:space-between;margin-bottom:1.75rem;border:0.5px solid rgba(91,127,255,0.2)}
        .bbt{font-size:12px;color:rgba(255,255,255,0.38)}
        .bbt strong{color:#7c9fff;font-weight:500}
        .bbs{font-size:11px;font-weight:500;padding:8px 22px;letter-spacing:0.8px;text-transform:uppercase;background:#5b7fff;color:#fff;border:none;border-radius:6px;cursor:pointer;opacity:0.3}
        .bbs.on{opacity:1}
        .ic{background:#0c0c14;border:0.5px solid rgba(255,255,255,0.07);border-radius:12px;padding:1.5rem;position:relative;overflow:hidden}
        .ic.pop{border:1.5px solid #5b7fff}
        .pb{position:absolute;top:0;right:0;font-size:9px;font-weight:500;letter-spacing:1.5px;text-transform:uppercase;background:#5b7fff;color:#fff;padding:4px 12px;border-bottom-left-radius:8px}
        .ic h3{font-family:'Cormorant Garamond',serif;font-size:20px;font-weight:500;color:#fff;margin-bottom:0.25rem}
        .isub{font-size:11px;color:rgba(255,255,255,0.3);margin-bottom:1rem;font-weight:300}
        .iil{list-style:none;margin-bottom:1.25rem}
        .iil li{font-size:12px;color:rgba(255,255,255,0.38);padding:5px 0;border-bottom:0.5px solid rgba(255,255,255,0.05);display:flex;align-items:center;gap:8px}
        .iil li:last-child{border-bottom:none}
        .iil li::before{content:'✓';color:#5b7fff;font-size:12px}
        .ipr{font-family:'Cormorant Garamond',serif;font-size:22px;font-weight:500;color:#fff;margin-bottom:0.2rem}
        .iprs{font-size:11px;color:rgba(255,255,255,0.28);margin-bottom:1rem}
        .ibb{width:100%;font-size:11px;font-weight:500;padding:9px;letter-spacing:0.8px;text-transform:uppercase;border:0.5px solid rgba(91,127,255,0.4);color:#7c9fff;background:transparent;border-radius:6px;cursor:pointer}
        .ic.pop .ibb{background:#5b7fff;color:#fff;border-color:#5b7fff}
        .fi{border-bottom:0.5px solid rgba(255,255,255,0.06);padding:1.1rem 0;cursor:pointer}
        .fq{display:flex;justify-content:space-between;align-items:center;font-size:13px;color:#e2e2ee}
        .fa{font-size:12px;font-weight:300;color:rgba(255,255,255,0.38);line-height:1.85;padding-top:0.8rem;display:none}
        .fi.op .fa{display:block}
        .foot{background:#050508;border-top:0.5px solid rgba(255,255,255,0.06);padding:2.5rem;display:flex;align-items:center;justify-content:space-between}
        .fl{font-family:'Cormorant Garamond',serif;font-size:18px;font-weight:500;color:rgba(255,255,255,0.35);letter-spacing:3px;text-transform:uppercase}
        .fr{font-size:11px;color:rgba(255,255,255,0.18);letter-spacing:0.5px}
        .ag{display:grid;grid-template-columns:1fr 1fr;gap:4rem;align-items:center}
        .ab{font-size:13px;font-weight:300;color:rgba(255,255,255,0.42);line-height:1.9}
        .ab p+p{margin-top:1rem}
        .sg{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,0.06);border:0.5px solid rgba(255,255,255,0.06);border-radius:14px;overflow:hidden}
        .sc{background:#0c0c14;padding:1.5rem 1rem;text-align:center}
        .sn{font-family:'Cormorant Garamond',serif;font-size:48px;font-weight:500;color:#5b7fff;line-height:1}
        .sl{font-size:11px;font-weight:300;color:rgba(255,255,255,0.35);margin-top:5px;line-height:1.5}
        .ig2{display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:1rem}
      `}</style>

      <nav className="nav">
        <div className="logo">Ordin<em>us</em></div>
        <div className="nav-links">
          <a onClick={()=>document.getElementById('sf').scrollIntoView({behavior:'smooth'})}>Services</a>
          <a onClick={()=>document.getElementById('faq').scrollIntoView({behavior:'smooth'})}>Help / FAQ</a>
          <a onClick={()=>document.getElementById('ab').scrollIntoView({behavior:'smooth'})}>About</a>
          <button className="btn-si" onClick={()=>router.push('/sign-in')}>Client login</button>
        </div>
      </nav>

      <section className="hero">
        <div className="hg"></div>
        <div className="hgl"></div>
        <div className="htag">Operational infrastructure for service firms</div>
        <h1>Your firm should be<br/>billing, not <em>managing</em></h1>
        <p>Modular operations support that runs through your existing channels. No new software. No admin overhead. Just the processes you need, handled.</p>
        <div className="hbtns">
          <button className="bp" onClick={()=>document.getElementById('sf').scrollIntoView({behavior:'smooth'})}>Build your stack</button>
          <button className="bg" onClick={()=>document.getElementById('faq').scrollIntoView({behavior:'smooth'})}>See how it works</button>
        </div>
      </section>

      <div className="div"></div>

      <section className="sec">
        <div className="eye">Why Ordinus</div>
        <div className="stl">Designed for firms that<br/>run on relationships</div>
        <div className="ssb">Your clients expect a seamless experience. Your team shouldn't be managing that manually.</div>
        <div className="cg">
          <div className="gc"><h3>Works through existing channels</h3><p>Everything runs through email, SMS, and calls. No software for your team or clients to adopt.</p></div>
          <div className="gc"><h3>Modular by design</h3><p>Select only what addresses your gaps. No bloated platforms or unused features.</p></div>
          <div className="gc"><h3>White-glove setup</h3><p>We handle implementation end to end. Four pieces of information and your stack is live.</p></div>
          <div className="gc"><h3>Full visibility</h3><p>Track performance through your client dashboard. The system runs itself.</p></div>
        </div>
      </section>

      <div className="div"></div>

      <section className="sec" id="ab">
        <div className="eye">About us</div>
        <div className="stl">Built for firms that<br/>should be scaling</div>
        <div className="ag">
          <div className="ab">
            <p>Professional service firms were losing revenue to operational gaps — slow client intake, inconsistent follow-up, and administrative drag that consumed billable hours.</p>
            <p>We work with law firms, financial advisors, consultancies, real estate brokerages, and insurance agencies. If your business runs on client relationships, our infrastructure runs quietly in the background.</p>
          </div>
          <div>
            <div className="sg">
              <div className="sc"><div className="sn">4</div><div className="sl">data points to get started</div></div>
              <div className="sc"><div className="sn">0</div><div className="sl">platforms to manage</div></div>
              <div className="sc"><div className="sn">24/7</div><div className="sl">operational coverage</div></div>
            </div>
          </div>
        </div>
      </section>

      <div className="div"></div>

      <StoreFront />

      <div className="div"></div>

      <section className="sec" id="faq">
        <div className="eye">Help / FAQ</div>
        <div className="stl">What firms typically ask</div>
        <FAQ />
      </section>

      <footer className="foot">
        <div className="fl">Ordinus</div>
        <div className="fr">Built for firms that should be billing, not managing.</div>
      </footer>
    </main>
  )
}

function StoreFront() {
  const [tab, setTab] = useState('custom')
  const [selected, setSelected] = useState([])

  const toggle = (id) => setSelected(s => s.includes(id) ? s.filter(x=>x!==id) : [...s, id])

  const services = [
    {id:'intake',tag:'Client intake',title:'Eliminate intake friction',desc:'Structured intake sequences capture prospect information, qualify fit, and route leads before your team gets involved.',price:'Starting at $X / mo'},
    {id:'pipeline',tag:'Pipeline follow-up',title:'No prospect falls silent',desc:'Automated follow-up sequences keep your pipeline warm without your team manually chasing every contact.',price:'Starting at $X / mo'},
    {id:'onboard',tag:'Onboarding comms',title:'First impressions, automated',desc:'Contract execution, welcome sequences, and document requests go out on schedule.',price:'Starting at $X / mo'},
    {id:'appt',tag:'Appointment coordination',title:'Eliminate scheduling overhead',desc:'Meeting confirmations, reminders, and rescheduling flows run automatically across email and SMS.',price:'Starting at $X / mo'},
    {id:'retain',tag:'Retention campaigns',title:'Revenue from existing relationships',desc:'Structured touchpoints keep you top of mind with past clients, generating referrals and repeat engagements.',price:'Starting at $X / mo'},
    {id:'report',tag:'Performance reporting',title:'Visibility without the manual work',desc:'Automated summaries of pipeline activity and response rates delivered to your inbox on your schedule.',price:'Starting at $X / mo'},
  ]

  const bundles = [
    {id:'law',pop:true,icon:'⚖️',name:'Law Firms',sub:'Litigation · Corporate · Family · Estate',items:['Structured client intake & qualification','Consultation scheduling & reminders','Retainer onboarding communication','Referral & retention campaigns']},
    {id:'fin',icon:'📈',name:'Financial Advisory',sub:'RIAs · Wealth management · Planning firms',items:['Prospect intake & suitability sequencing','Review meeting scheduling & follow-up','Client onboarding communication','Dormant client reactivation']},
    {id:'con',icon:'🏢',name:'Consulting Firms',sub:'Strategy · Operations · HR · IT consulting',items:['Proposal follow-up sequences','Project kickoff & milestone comms','Stakeholder scheduling automation','Pipeline performance reporting']},
    {id:'re',icon:'🏡',name:'Real Estate',sub:'Brokerages · Commercial · Property management',items:['Lead intake & qualification routing','Showing coordination & confirmation','Transaction milestone communications','Past client referral campaigns']},
    {id:'ins',icon:'🛡️',name:'Insurance Agencies',sub:'Independent · Captive · Specialty lines',items:['Quote request intake & follow-up','Renewal reminder sequences','Policy onboarding communication','Cross-sell & referral campaigns']},
    {id:'cust',icon:'💼',name:"Don't see your firm?",sub:'We scope custom stacks for any service firm',items:['Tell us where revenue is leaking','We identify the right services','Custom stack, same implementation','No technical knowledge required']},
  ]

  return (
    <section className="sec" id="sf" style={{background:'#050508',maxWidth:'100%',padding:'5rem 2.5rem'}}>
      <div style={{maxWidth:920,margin:'0 auto'}}>
        <div className="eye">Build your stack</div>
        <div className="stl">Select what's costing you.<br/>We eliminate it.</div>
        <div className="ssb">Browse individual services or choose a pre-built industry stack. No payment here — submit your selection and we'll scope the engagement.</div>
        <div className="tabs">
          <button className={`tab${tab==='custom'?' on':''}`} onClick={()=>setTab('custom')}>Build your own</button>
          <button className={`tab${tab==='bundles'?' on':''}`} onClick={()=>setTab('bundles')}>Industry stacks</button>
        </div>
        {tab==='custom' && <>
          <div className="bb">
            <div className="bbt">Your stack: <strong>{selected.length===0?'0 services selected':`${selected.length} service${selected.length>1?'s':''} selected`}</strong></div>
            <button className={`bbs${selected.length>0?' on':''}`}>Submit for scoping →</button>
          </div>
          <div className="svg2">
            {services.map(s=>(
              <div key={s.id} className={`sv${selected.includes(s.id)?' sel':''}`} onClick={()=>toggle(s.id)}>
                <span className="svtg">{s.tag}</span>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <div className="svp">{s.price}</div>
              </div>
            ))}
          </div>
        </>}
        {tab==='bundles' && (
          <div className="ig2">
            {bundles.map(b=>(
              <div key={b.id} className={`ic${b.pop?' pop':''}`}>
                {b.pop && <div className="pb">Most selected</div>}
                <div style={{fontSize:22,marginBottom:'0.8rem'}}>{b.icon}</div>
                <h3>{b.name}</h3>
                <div className="isub">{b.sub}</div>
                <ul className="iil">{b.items.map((item,i)=><li key={i}>{item}</li>)}</ul>
                <div className="ipr">Starting at $X / mo</div>
                <div className="iprs">4 services · bundled rate</div>
                <button className="ibb">Request this stack →</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

function FAQ() {
  const [open, setOpen] = useState(null)
  const faqs = [
    {q:'Does this require our team to adopt new software?',a:'No. Everything operates through email, SMS, and phone — the channels your team and clients already use.'},
    {q:'What does implementation look like?',a:'We require four pieces of information: firm name, primary contact name, phone, and email. Most engagements are live within a few business days.'},
    {q:'Can we add services as the firm grows?',a:'Yes. Start with the highest-impact gaps and expand your stack as needs evolve. No long-term contracts.'},
    {q:"What's the difference between building our own stack and choosing an industry stack?",a:'Industry stacks are pre-scoped based on patterns we see across similar firms. Building your own gives more granular control.'},
    {q:'How do we track performance once live?',a:'Every client has access to a private dashboard showing activity, response rates, and pipeline metrics for each active service.'},
    {q:'What happens after we submit our stack selection?',a:'No payment is collected through the site. A member of our team reaches out within one business day to confirm and initiate scoping.'},
  ]
  return (
    <div style={{marginTop:'2rem'}}>
      {faqs.map((f,i)=>(
        <div key={i} className={`fi${open===i?' op':''}`} onClick={()=>setOpen(open===i?null:i)}>
          <div className="fq">{f.q} <span style={{fontSize:15,color:'rgba(255,255,255,0.3)'}}>{open===i?'−':'+'}</span></div>
          <div className="fa">{f.a}</div>
        </div>
      ))}
    </div>
  )
}

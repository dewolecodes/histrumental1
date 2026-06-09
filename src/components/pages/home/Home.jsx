import React, { useEffect, useState } from 'react';
import './Home.css';

export default function Home() {
    const [scale, setScale] = useState(1);
    const [skyUrl, setSkyUrl] = useState(`${process.env.PUBLIC_URL || ''}/images/sky.jpg`);

    useEffect(() => {
        function handleResize() {
            const height = window.innerHeight;
            const scaleH = height / 832;
            setScale(scaleH);
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const base = process.env.PUBLIC_URL || '';
        const candidates = [
            '/images/sky.jpg',
            '/images/sky.png',
            '/images/sky0.jpg',
            '/images/sky1.png',
        ].map(p => `${base}${p}`);

        let mounted = true;

        function tryLoad(list) {
            if (!list.length) return;
            const url = list[0];
            const img = new Image();
            img.onload = () => { if (mounted) setSkyUrl(url); };
            img.onerror = () => tryLoad(list.slice(1));
            img.src = url;
        }

        tryLoad(candidates);
        return () => { mounted = false; };
    }, []);

    return (
        <div className="home-page">
            <div className="home-container" style={{
                transform: `scale(${scale})`,
                width: scale !== 1 ? `calc(100vw / ${scale})` : '100%'
            }}>
                {/* Left Column (Content) */}
                <div className="left-column">
                    <header className="header-left">
                        <a href="/" className="logo-link">
                            <img src="/icons/logo.png" className="logo-img" alt="Histrumental Logo" />
                        </a>
                        <span className="wip-tag">| Our full website is a WIP</span>
                    </header>

                    <main className="main-content">
                        <h1 className="hero-title">
                            The boy-<br />
                            child<br />
                            mental<br />
                            health<br />
                            <span className="nowrap">care org.</span>
                        </h1>

                        <p className="description">
                            Histrumental.org is a next-gen non-profit org. focusing on proactive support for the boy-child mental health care. We exist to help the boy child grow into a socially responsible man.
                        </p>

                        <a href="#volunteer" className="volunteer-btn">
                            <span>Become a volunteer</span>
                            <span className="arrow-circle">
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 7H13M13 7L7 1M13 7L7 13" stroke="#551E08" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </span>
                        </a>

                        <div className="social-icons-container" style={{ '--social-icons-url': "url('/icons/socialicons.png')" }}>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-link instagram" aria-label="Instagram"></a>
                            <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="social-icon-link twitter" aria-label="Twitter"></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon-link facebook" aria-label="Facebook"></a>
                        </div>

                        <blockquote className="quote-text">
                            To ensure a progressive society free from all vices, we believe there is an urgent need to start making effort, at a greater velocity than we witness today...
                        </blockquote>
                    </main>

                    <footer className="footer-left">
                        <span className="copyright">©2026 Histrumental.org. All Rights Reserved</span>
                    </footer>
                </div>

                {/* Right Column (Visuals) */}
                <div className="right-column">
                    <div className="sky-bg-container">
                        <div
                            className="clouds-loop"
                            aria-hidden="true"
                            style={{ '--sky-url': `url(${skyUrl})` }}
                        >
                            <div className="cloud"></div>
                            <div className="cloud"></div>
                        </div>

                        {/* Place illustrations and badge inside the sky container so they
                           are positioned relative to the sky's bottom on mobile */}
                        <div className="boys-illustrations">
                            {/* boy3 is in the back, boy1 is in the front */}
                            <img src="/images/boy3.jpg" className="boy-img boy3" alt="Young boy illustration" />
                            <img src="/images/boy2.jpg" className="boy-img boy2" alt="Boy illustration" />
                            <img src="/images/boy1.jpg" className="boy-img boy1" alt="Older boy illustration" />
                        </div>

                        <div className="sad-text-badge-container">
                            <img src="/icons/boysgetsadtoo2.png" className="sad-badge-bg" alt="Boys Get Sad Too outline shadow" />
                            <img src="/icons/boysgetsadtoo.png" className="sad-badge-fg" alt="Boys Get Sad Too text" />
                        </div>
                        {/* desktop badge above; also include two dedicated mobile images that will
                            be positioned by CSS so they reliably appear on small screens side-by-side */}
                        <img src="/icons/boysgetsadtoo2.png" className="boysgetsadtoo boysgetsadtoo-left" alt="Boys Get Sad Too mobile bg" />
                        <img src="/icons/boysgetsadtoo.png" className="boysgetsadtoo boysgetsadtoo-right" alt="Boys Get Sad Too mobile fg" />
                    </div>

                    {/* mobile-only copyright placed after the sky so it always appears below the image */}
                    <div className="mobile-copyright">©2026 Histrumental.org. All Rights Reserved</div>

                    <div className="donate-container">
                        <img src="/icons/todonate.png" className="donate-badge" alt="To donate today, send us a message" />
                        <a href="mailto:support@histrumental.org" className="donate-link" aria-label="Email support">support@histrumental.org</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

import { faBook, faCloud, faCode, faLightbulb, faPuzzlePiece, faRocket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

const SplashPage: React.FC = () => {
    return (
        <div className="splash-page">
            <div className="hero">
                <h1>Welcome to Arcade AI Documentation</h1>
                <p>Explore our comprehensive guides and API references</p>
                <Link href="/engine/docs" className="cta-button">
                    Get Started
                </Link>
            </div>
            <div className="feature-panes">
                <div className="feature">
                    <FontAwesomeIcon icon={faRocket} size="2x" className="mb-4 text-primary-500" />
                    <h2>Quick Start</h2>
                    <p>Get up and running in minutes with our easy-to-follow guides</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faPuzzlePiece} size="2x" className="mb-4 text-primary-500" />
                    <h2>Integrations</h2>
                    <p>Learn how to integrate Arcade AI with your favorite tools and platforms</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faBook} size="2x" className="mb-4 text-primary-500" />
                    <h2>Tutorials</h2>
                    <p>Step-by-step guides for common use cases and advanced techniques</p>
                </div>
            </div>
            <div className="feature-panes">
                <div className="feature">
                    <FontAwesomeIcon icon={faLightbulb} size="2x" className="mb-4 text-primary-500" />
                    <h2>SDK Reference</h2>
                    <p>Learn how to use the Actor SDK to serve Tools to the Arcade Engine</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faCode} size="2x" className="mb-4 text-primary-500" />
                    <h2>API Reference</h2>
                    <p>Detailed documentation for our API, including examples and best practices</p>
                </div>
                <div className="feature">
                    <FontAwesomeIcon icon={faCloud} size="2x" className="mb-4 text-primary-500" />
                    <h2>Deploy</h2>
                    <p>Discover various deployment options and strategies for your Arcade AI projects</p>
                </div>
            </div>
        </div>
    );
};

export default SplashPage;


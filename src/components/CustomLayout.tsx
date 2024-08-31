import SplashPage from '@components/SplashPage';
import { useRouter } from 'next/router';
import React from 'react';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { asPath } = useRouter();

    if (asPath === '/') {
        return <SplashPage />;
    }

    return (
        <div className="custom-layout">
            <main className="custom-main">
                <div className="nx-container">
                    {children}
                </div>
            </main>
        </div>
    );
};

export default CustomLayout;


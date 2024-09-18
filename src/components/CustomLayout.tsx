import { useRouter } from 'next/router';
import React from 'react';

const CustomLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const { asPath } = useRouter();

    return (
        <main className="custom-main">
            {children}
        </main>
    );
};

export default CustomLayout;


import FuzzyText from '@/components/FuzzyText';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import React from 'react';

const NotFoundPage = () => {
    return (
        <div className="flex flex-col gap-5 items-center justify-center min-h-screen  px-4">
            <FuzzyText
                baseIntensity={0.2}

            >

                404 - Page Not Found

            </FuzzyText>
            <div className="mt-6">
                <Button variant="gradient">
                    <Link href="/">Go Home</Link>
                </Button>
            </div>
        </div>
    );
};

export default NotFoundPage;
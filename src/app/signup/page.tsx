import SignUPForm from '@/components/Auth/LoginForm/SignUPForm/SignUPForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
    title: 'Sign Up',
    description: 'Create a new account',
    keywords: ['signup', 'register', 'create account'],
}
const page = () => {
    return (
        <div>
            <SignUPForm />
        </div>
    );
};

export default page;
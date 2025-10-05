import LoginForm from '@/components/Auth/LoginForm/LoginForm';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Login ",
  description:
    "Login to your account to access exclusive features and personalized content. Enter your credentials below to get started.",
};
const Login = () => {
    return (
        <div>
            <LoginForm />
        </div>
    );
};

export default Login;
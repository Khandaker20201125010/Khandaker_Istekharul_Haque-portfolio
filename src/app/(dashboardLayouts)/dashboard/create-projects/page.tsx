import React from 'react';
import CreateProjectForm from '../../(dasboardPublicComponenets)/ProjectsComponents/CreateProjectForm/CreateProjectForm';
import { Metadata } from 'next';

export const metadata :Metadata ={
    title: "Create New Project - Khandaker Istekharul Haque",
    description: "Create a new project showcasing your skills and expertise in web development, programming, and technology.",
} 
const CreateProjects = () => {
    return (
        <div>
            <CreateProjectForm />
        </div>
    );
};

export default CreateProjects;
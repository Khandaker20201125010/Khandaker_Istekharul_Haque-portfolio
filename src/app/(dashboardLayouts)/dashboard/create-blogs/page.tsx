import React from 'react';
import CreateBlogsForm from '../../(dasboardPublicComponenets)/Blogscomponents/CreateBlogsForm/CreateBlogsForm';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Create New Blog - Khandaker Istekharul Haque",
    description: "Create a new blog post on various topics including web development, programming, and technology.",

}
const CreateBlogs = () => {
    return (
        <div>
            <CreateBlogsForm />
        </div>
    );
};

export default CreateBlogs;
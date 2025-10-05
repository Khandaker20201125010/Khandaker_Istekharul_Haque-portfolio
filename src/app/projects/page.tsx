import MapProject from '@/components/PageCards/Project/MapProject';
import { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: "Projects of Khandaker Istekharul Haque",
  description:
    "Explore my projects showcasing my skills in web development, including React, Next.js, and more.",
};
const ProjectsPage = () => {
     
    return (
        <div>
            <MapProject />
        </div>
    );
};

export default ProjectsPage;
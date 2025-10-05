import MapBlogs from "@/components/PageCards/Blogs/MapBlogs";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blogs of Khandaker Istekharul Haque",
  description:
    "Explore the blogs written by Khandaker Istekharul Haque on various topics including web development, programming, and technology.",
};
const Blogs = () => {


  return (
    <div>
       <MapBlogs />
    </div>
  );
};

export default Blogs;

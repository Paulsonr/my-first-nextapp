import { useRouter } from "next/router";

function BlogPage(){
    const router =  useRouter();
    console.log("Client home > ", router.pathname, router.query);
    return <div><h1>Blog Page</h1></div>
}

export default BlogPage;
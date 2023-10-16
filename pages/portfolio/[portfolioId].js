import { useRouter } from "next/router";

function PortfolioDetailPage(){
    const router =  useRouter();
    console.log("Router hook > pathname|query > ", router.pathname, router.query.portfolioId);
    return <div><h1>Portfolio detail page</h1></div>
}

export default PortfolioDetailPage;
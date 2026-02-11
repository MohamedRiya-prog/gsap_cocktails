import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
gsap.registerPlugin(ScrollTrigger, SplitText);

const Page = () => {
    return (
        <main className="flex-center h-screen">
            <h1 className="font-bold text-3xl font-modern-negra">Riz Welcome Back to Coding</h1>
        </main>
    )
}
export default Page

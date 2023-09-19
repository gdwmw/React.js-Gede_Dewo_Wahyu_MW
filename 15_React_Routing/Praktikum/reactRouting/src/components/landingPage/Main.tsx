import tailwindImages from "../../images/Tailwind.svg";
import { useNavigate } from "react-router-dom";

export default function Main() {
  const navigate = useNavigate();
  return (
    <main>
      <section id="Home" className="from-tailwindGreen bg-gradient-to-b to-white py-48 ">
        <div className="container mx-auto grid grid-cols-2 px-10">
          <div className="my-auto space-y-10">
            <div className="space-y-4 text-white">
              <h1 className="text-5xl font-bold">Better Solution For Your Business</h1>
              <p>We are a team of talented designers making websites with Tailwind</p>
            </div>
            <div className="space-x-10">
              <button
                type="button"
                onClick={() => {
                  navigate("/createproduct");
                }}
                className="bg-tailwindBlue hover:bg-tailwindBlueSecondary rounded-full px-6 py-3 font-bold text-white"
              >
                Get Started
              </button>
              <a
                href="https://www.youtube.com/watch?v=4OQmtrYtkPg"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-tailwindBlue text-white"
              >
                Watch Video
              </a>
            </div>
          </div>
          <img src={tailwindImages} alt="image" width={500} height={500} className="ml-auto drop-shadow-xl" />
        </div>
      </section>

      <section id="Newsletter" className="bg-white py-36">
        <div className="container mx-auto space-y-10 px-10 text-center">
          <div className="space-y-4">
            <h2 className="text-tailwindBlue text-4xl font-bold">Join Our Newsletter</h2>
            <p className="text-gray-600">Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
          </div>
          <form action="#" method="post" className="flex items-center justify-center gap-x-4">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              className="focus:border-tailwindBlue w-[700px] rounded-full border-2 border-gray-300 px-4 py-2.5 outline-none"
            />
            <a
              href="/4_HTML/Praktikum/Create Account/createAccount.html"
              className="bg-tailwindBlue hover:bg-tailwindBlueSecondary rounded-full px-6 py-3 font-bold text-white"
            >
              Subscribe
            </a>
          </form>
        </div>
      </section>
    </main>
  );
}

import Image from "next/image";
import { User } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function Home() {
  const iconData = [
    { icon: "/apple.png", name: "Apple" },
    { icon: "/github.png", name: "Github" },
    { icon: "/instagram.png", name: "Instagram" },
    { icon: "/linkedin.png", name: "Linkedin" },
    { icon: "/twitter.png", name: "Twitter" }, 
    { icon: "/facebook.png", name: "Facebook" },
  ];
  return (
    <>
      <Navbar />
      <div className="h-full w-full mx-auto px-40 max-w-[1350px] md:px-20">
        <div className="flex flex-col items-center justify-center min-h-screen py-40 gap-32">
          <div className="max-w-2xl text-center flex flex-col gap-5">
            <h1 className="font-semibold text-3xl lg:text-[56px] md:text-4xl lg:leading-[60px]">
              Boost Your Productivity with{" "}
              <span className="text-violet-800">TodoFusion</span>
            </h1>
            <p className="text-muted-foreground">
              Transform task management with TodoFusion. Combine powerful to-do
              lists, productivity tracking, and seamless integrations to stay
              focused and achieve more
            </p>
            <div className="flex gap-5 items-center justify-center">
              <button className="px-6 py-2 bg-violet-700 rounded-md shadow">
                Get Started
              </button>
              <button className="bg-slate-950 rounded-md px-6 py-2 shadow">
                See how it works
              </button>
            </div>
          </div>

          <div className="borders h-full rounded-3xl image-color backdrop-blur-lg p-6 shadow-[0px_0px_100px_5px_rgba(59,92,163,0.4)]">
            <Image
              src="/set.webp"
              alt="site picture"
              width={900}
              height={900}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto px-4 md:px-20 text-center max-w-[1350px]">
        <div className="w-full h-full">
          <p className="mt-6">
            Trusted by <span className="font-bold">800K+</span> freelancers and{" "}
            <span className="font-bold">20k+ teams</span> like.
          </p>
        </div>
        <div className="py-10 w-full md:py-20">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
            <div className="w-full h-full flex overflow-hidden p-2 flex-row gap-20">
              {iconData.map((data, index) => (
                <div key={index} className="flex flex-row items-center justify-center gap-2">
                  <img src={data.icon} alt={data.name} className="w-10 text-white"/>
                  <p>{data.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col items-center justify-center py-12 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-xl mx-auto text-start md:text-center">
            <span className="h-full w-full items-center justify-center rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-blue-800">
              Know who you are
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl">
              Get to know your habits, Improve them everyday
            </h2>
            <p className="text-gray-400 mt-6">
              Track your habits consistently, identify patterns, and make small
              improvements daily to enhance your productivity and well-being
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 rounded-2xl p-6 bg-background shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)]">
            <div>
              <h3 className="text-xl font-semibold">Measure time spent</h3>
              <p className="text-gray-500 mt-4">
                Get a deep understanding of where your time goes
              </p>
            </div>
            <div className="hidden md:flex flex-1 bg-gray-800  rounded-2xl" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 flex-1 rounded-2xl p-6 bg-background shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)]">
              <div>
                <h3 className="text-xl font-semibold">Track your habits</h3>
                <p className="text-gray-500 mt-4">
                  Keep track of your habits and see how consistent you are
                </p>
              </div>
              <div className="flex flex-1 bg-gray-800  rounded-2xl p-20" />
            </div>
            <div className="flex flex-col gap-4 flex-1 rounded-2xl p-6 bg-background shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)]">
              <div>
                <h3 className="text-xl font-semibold">Set goals</h3>
                <p className="text-gray-500 mt-4">
                  Set goals and track your progress
                </p>
              </div>
              <div className="flex flex-1 bg-gray-800 rounded-2xl p-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col items-center justify-center py-32 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-md mx-auto text-start md:text-center">
            <span className="h-full w-full items-center justify-center border border-blue-800 rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              What we offer as price
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl">
              What are peaople saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how fusion empowers businesses of all sizes. Here's what real
              people are saying on Twitter
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="grid grid-cols-1 gap-5 my-20 mx-auto max-w-3xl md:grid-cols-2">
            <div className="flex flex-col gap-4 p-8 rounded-xl borders bg-background">
              <div>
                <h3 className="text-xl font-semibold">Monthly plan</h3>
                <p className="text-muted-foreground mt-4">
                  Flexible and affordable. Boost your productivity month by
                  month.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-2xl font-semibold">$4.9</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Regular updates and new features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Premium support</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>No recurring fees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-8 borders bg-background rounded-xl">
              <div>
                <h3 className="text-xl font-semibold">Pay once lifetime</h3>
                <p className="text-muted-foreground mt-4">
                  One-time payment. Unlimited access forever. Ultimate
                  productivity investment.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-2xl font-semibold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <div className="flex flex-col gap-2">
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Regular updates and new features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>Premium support</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>.</span>
                    <span>No recurring fees</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col items-center justify-center py-12 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-md mx-auto text-start md:text-center">
            <span className="h-full w-full items-center justify-center border border-blue-800 rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              What they say
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl">
              What are peaople saying
            </h2>
            <p className="text-muted-foreground mt-6">
              See how fusion empowers businesses of all sizes. Here's what real
              people are saying on Twitter
            </p>
          </div>
        </div>

        <div className="w-full py-10 md:py-20">
          <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden py-10">
            <div className="group flex gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s]">
              {Array.from({ length: 10 }).map((_, index) => (
                <figure key={index} className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <User />
                    </div>
                    <div className="flex flex-col">
                      <figcaption className="font-medium text-sm">
                        Username
                      </figcaption>
                      <p className="text-muted-foreground text-xs font-medium">
                        @username
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-sm">
                    Nothing the first time and others
                  </blockquote>
                </figure>
              ))}
            </div>
            <div className="group flex  gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s]">
              {Array.from({ length: 10 }).map((_, index) => (
                <figure key={index} className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointe">
                  <div className="flex flex-row items-center gap-2">
                    <div>
                      <User />
                    </div>
                    <div className="flex flex-col">
                      <figcaption className="font-medium text-sm">
                        Username
                      </figcaption>
                      <p className="text-muted-foreground text-xs font-medium">
                        @username
                      </p>
                    </div>
                  </div>
                  <blockquote className="mt-2 text-sm">
                    Nothing the first time and others
                  </blockquote>
                </figure>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto px-4 my-32 max-w-[1350px] md:px-20">
        <div className="flex flex-col items-start justify-start  w-full px-4 md:px-6 rounded-lg borders py-4 md:py-8 lg:rounded-2xl md:justify-between md:items-center md:flex-row">
          <div className="flex flex-col items-start gap-4 w-full max-w-lg">
            <h4 className="text-xl font-semibold lg:text-4xl md:text-2xl">
              Join our <span className="text-muted-foreground">newsletter</span>
            </h4>
            <p className="text-base text-muted-foreground">
              Join our newsletter for exclusive insights, announcements, and
              special offers delivered directly to your inbox.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-start w-full mt-5 md:min-w-80 md:mt-0 md:w-max">
            <form
              action=""
              className="flex flex-col items-center gap-2 w-full md:max-w-xs md:flex-row"
            >
              <input
                type="text"
                className="h-9 w-full flex rounded-md borders bg-transparent px-3 py-1 text-sm"
                placeholder="example@gmail.com"
              />
              <button className="rounded-md text-white/50 bg-violet-800/50 px-5 py-1.5">
                Submit
              </button>
            </form>
            <p className="text-xs text-gray-500">
              By subscribing you agree with our Privacy Policy
            </p>
          </div>
        </div>
      </div>

      <div className="py-10">
        <div className="h-full w-full mx-auto px-4 max-w-[1350px] md:px-20">
          <div className="flex flex-col gap-10 pb-28 border-b border-bottom lg:flex-row">
            <div className="flex flex-1 gap-5 flex-col">
              <div className="flex gap-2 items-center text-lg font-medium">
                <div className="size-8 rounded-md bg-slate-900 transition-all duration-200" />
                <span>
                  Todo<span className="text-gray-400">Fusion</span>
                </span>
              </div>
              <p className="text-base text-gray-400">
                Simplify tasks, boost productivity, and manage projects
                seamlessly.
              </p>
            </div>
            <div className="flex flex-row flex-1 gap-10">
              <div className="flex flex-col gap-5 flex-1">
                <h3>Pages</h3>
                <ul className="flex flex-col gap-2 text-gray-400">
                  <li>Home</li>
                  <li>Features</li>
                  <li>Integrations</li>
                  <li>Pricing</li>
                  <li>Docs</li>
                  <li>Contacts</li>
                </ul>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-5">
                  <h3>Pages</h3>
                  <ul className="flex flex-col gap-2 text-gray-400">
                    <li>Features</li>
                    <li>Integrations</li>
                    <li>Docs</li>
                  </ul>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-5">
                  <h3>Pages</h3>
                  <ul className="flex flex-col gap-2 text-gray-400">
                    <li>Blog</li>
                    <li>FAQ</li>
                    <li>FAQ</li>
                    <li>FAQ</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="py-10 flex flex-col gap-5">
            <div className="flex items-center justify-between ">
              <p>© 2024 TodoFusion. All rights reserved.</p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md cursor-pointer bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer bg-slate-900" />
              </div>
            </div>
            <p className="text-sm text-foreground text-center font-medium">
              Made with 🩶{" "}
              <a className="duration-200 text-blue-800">by Kwaham Grace.</a>{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

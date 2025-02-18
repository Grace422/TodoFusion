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
    { icon: "/youtube.png", name: "Youtube" },
    { icon: "/messager.png", name: "Messenger" },
  ];
  return (
    <>
      <Navbar />
      <div className="h-full w-full mx-auto px-5 max-w-[1350px] md:px-20 z-10">
        <div className="flex flex-col items-center justify-center min-h-screen py-40 gap-32">
          <div className="max-w-2xl text-center flex flex-col gap-5">
            <h1 className="font-semibold text-white text-3xl lg:text-[56px] md:text-4xl lg:leading-[60px] dark:text-black">
              Boost Your Productivity with{" "}
              <span className="text-violet-800">TodoFusion</span>
            </h1>
            <p className="text-slate-500 dark:text-black">
              Transform task management with TodoFusion. Combine powerful to-do
              lists, productivity tracking, and seamless integrations to stay
              focused and achieve more
            </p>
            <div className="flex gap-5 items-center justify-center">
              <button className="px-6 py-2 bg-violet-700 rounded-md shadow text-slate-950">
                Get Started
              </button>
              <button className="bg-white text-black dark:bg-slate-950 dark:text-white rounded-md px-6 py-2 shadow">
                See how it works
              </button>
            </div>
          </div>

          <div className="borders h-full rounded-3xl image-color overflow-hidden relative backdrop-blur-lg p-1 shadow-[0px_0px_100px_5px_rgba(59,92,163,0.4)] running-div">
            <Image
              src="/set.webp"
              alt="site picture"
              width={900}
              height={900}
              objectFit="contain"
              className="z-0"
            />
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto px-4 md:px-20 text-center max-w-[1350px]">
        <div className="w-full h-full text-white dark:text-black">
          <p className="mt-6 transition-all duration-300">
            Trusted by <span className="font-bold">800K+</span> freelancers and{" "}
            <span className="font-bold">20k+ teams</span> like.
          </p>
        </div>
        <div className="py-10 w-full md:py-20">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden marquee py-10">
            <div className="w-full h-full flex overflow-hidden p-2 flex-row gap-20 marquee-content">
              <div className="flex flex-row gap-20">
                {iconData.map((data, index) => (
                  <div
                    key={index}
                    className="flex flex-row items-center justify-center gap-2"
                  >
                    <Image
                      src={data.icon}
                      alt={data.name}
                      className="w-10 text-white dark:text-black"
                      width={50} height={50}
                    />
                    <p className="text-white dark:text-black">{data.name}</p>
                  </div>
                ))}
              </div>
              <div className="flex flex-row gap-20">
                {iconData.map((data, index) => (
                  <div
                    key={index + iconData.length}
                    className="flex flex-row items-center justify-center gap-2"
                  >
                    <Image src={data.icon} alt={data.name} className="w-10" width={50} height={50}/>
                    <p className="text-white dark:text-black">{data.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col py-12 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-xl mx-auto text-start md:text-center">
            <span className="h-full w-full items-center justify-center lg:items-start lg:justify-start rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl border border-blue-800">
              Know who you are
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl text-white dark:text-black">
              Get to know your habits, Improve them everyday
            </h2>
            <p className="text-gray-400 mt-6">
              Track your habits consistently, identify patterns, and make small
              improvements daily to enhance your productivity and well-being
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 text-white dark:text-black">
          <div className="flex flex-col gap-4 rounded-2xl p-6 shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)] dark:shadow-[0px_0px_10px_10px_rgba(128,128,128,0.1)]">
            <div>
              <h3 className="text-xl font-semibold">Measure time spent</h3>
              <p className="text-gray-500 mt-4">
                Get a deep understanding of where your time goes
              </p>
            </div>
            <div className="hidden md:flex flex-1 bg-slate-800 dark:bg-gray-200 rounded-2xl" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 flex-1 rounded-2xl p-6 bg-background shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)] dark:shadow-[0px_0px_10px_10px_rgba(128,128,128,0.1)]">
              <div>
                <h3 className="text-xl font-semibold">Track your habits</h3>
                <p className="text-gray-500 mt-4">
                  Keep track of your habits and see how consistent you are
                </p>
              </div>
              <div className="flex flex-1 bg-slate-800 dark:bg-gray-200  rounded-2xl p-20" />
            </div>
            <div className="flex flex-col gap-4 flex-1 rounded-2xl p-6 bg-background shadow-[0px_0px_10px_10px_rgba(0,0,0,0.9)] dark:shadow-[0px_0px_10px_10px_rgba(128,128,128,0.1)]">
              <div>
                <h3 className="text-xl font-semibold">Set goals</h3>
                <p className="text-gray-500 mt-4">
                  Set goals and track your progress
                </p>
              </div>
              <div className="flex flex-1 bg-slate-800 dark:bg-gray-200 rounded-2xl p-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="gradient"></div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col py-32 relative gap-10 md:px-20">
        <div className="w-full h-full text-white dark:text-black">
          <div className="max-w-md mx-auto text-start md:text-center">
            <span className="h-full w-full items-center justify-center border border-blue-800 rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              What we offer as price
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl">
              What are peaople saying
            </h2>
            <p className="text-slate-500 mt-6">
              See how fusion empowers businesses of all sizes. Here&apos;s what real
              people are saying on Twitter
            </p>
          </div>
        </div>

        <div className="w-full h-full">
          <div className="grid grid-cols-1 gap-5 my-20 mx-auto max-w-3xl md:grid-cols-2">
            <div className="flex flex-col gap-4 p-8 rounded-xl borders">
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-black">
                  Monthly plan
                </h3>
                <p className="text-slate-500 dark:text-black mt-4">
                  Flexible and affordable. Boost your productivity month by
                  month.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-2xl font-semibold text-white dark:text-black">
                    $4.9
                  </span>
                  <span className="text-muted-foreground text-white dark:text-black">
                    /month
                  </span>
                </div>

                <div className="flex flex-col gap-2 text-white dark:text-black px-4">
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">Full access to all features</li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">
                        Regular updates and new features
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">Premium support</li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">No recurring fees</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-8 borders rounded-xl">
              <div>
                <h3 className="text-xl font-semibold text-white dark:text-black">
                  Pay once lifetime
                </h3>
                <p className="text-slate-500 dark:text-black mt-4">
                  One-time payment. Unlimited access forever. Ultimate
                  productivity investment.
                </p>
              </div>

              <div className="flex flex-col gap-4 mt-4 text-white dark:text-black">
                <div className="flex flex-row items-center justify-between">
                  <span className="text-2xl font-semibold">$99</span>
                  <span className="text-muted-foreground">/month</span>
                </div>

                <div className="flex flex-col gap-2 px-4">
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">Full access to all features</li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">
                        Regular updates and new features
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">Premium support</li>
                    </ul>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <ul>
                      <li className="list-disc">No recurring fees</li>
                    </ul>
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
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl text-white dark:text-black">
              What are peaople saying
            </h2>
            <p className="mt-6 text-slate-500 dark:text-black">
              See how fusion empowers businesses of all sizes. Here&apos;s what real
              people are saying on Twitter
            </p>
          </div>
        </div>

        <div className="w-full py-10 md:py-20">
          <div className="relative h-full w-full flex flex-col items-center justify-center overflow-hidden py-10">
            <div className="marquee">
              <div className="group flex gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s] marquee-content text-white dark:text-black">
                {Array.from({ length: 10 }).map((_, index) => (
                  <figure
                    key={index}
                    className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div>
                        <User />
                      </div>
                      <div className="flex flex-col">
                        <figcaption className="font-medium text-sm">
                          Username
                        </figcaption>
                        <p className="text-xs text-slate-500 font-medium">
                          @username
                        </p>
                      </div>
                    </div>
                    <blockquote className="mt-2 text-sm">
                      Nothing the first time and others
                    </blockquote>
                  </figure>
                ))}
                {Array.from({ length: 10 }).map((_, index) => (
                  <figure
                    key={index}
                    className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer"
                  >
                    <div className="flex flex-row items-center gap-2">
                      <div>
                        <User />
                      </div>
                      <div className="flex flex-col">
                        <figcaption className="font-medium text-sm">
                          Username
                        </figcaption>
                        <p className="text-xs font-medium text-slate-500">
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
            <div className="marquee-bottom text-white dark:text-black">
              <div className="group flex  gap-4 overflow-hidden p-2 select-none flex-row [--duration.20s] marquee-content">
                <div className="flex gap-4 marquee-inner flex-row">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <figure
                      key={index}
                      className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointe"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div>
                          <User />
                        </div>
                        <div className="flex flex-col">
                          <figcaption className="font-medium text-sm">
                            Username
                          </figcaption>
                          <p className="text-slate-500 text-xs font-medium">
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
                <div className="flex gap-4 marquee-inner flex-row">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <figure
                      key={index}
                      className="relative w-64 p-4 borders over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer"
                    >
                      <div className="flex flex-row items-center gap-2">
                        <div>
                          <User />
                        </div>
                        <div className="flex flex-col">
                          <figcaption className="font-medium text-sm">
                            Username
                          </figcaption>
                          <p className="text-slate-500 text-xs font-medium">
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
        </div>
      </div>
    </>
  );
}

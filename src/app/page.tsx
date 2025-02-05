import Image from "next/image";
import { User } from "lucide-react";
import Navbar from "../../components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="h-full w-full mx-auto px-40 max-w-[1350px] md:px-20">
        <div className="flex flex-col items-center justify-center min-h-screen py-40 gap-32">
          <div className="max-w-2xl text-center flex flex-col gap-5">
            <h1 className="font-semibold text-3xl">
              Boost Your Productivity with{" "}
              <span className="text-primary">TodoFusion</span>
            </h1>
            <p className="text-muted-foreground">
              Transform task management with TodoFusion. Combine powerful to-do
              lists, productivity tracking, and seamless integrations to stay
              focused and achieve more
            </p>
            <div className="flex gap-5 items-center justify-center">
              <button>Get Started</button>
              <button>See how it works</button>
            </div>
          </div>

          <div className="border h-full rounded-3xl bg-background/50 backdrop-blur-lg p-5">
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

      <div className="h-full w-full mx-auto px-40 max-w-[1350px]">
        <p className="w-full h-full">
          Trusted by <span className="font-bold">800K+</span> freelancers and{" "}
          <span className="font-bold">20k+ teams</span> like.
        </p>
        <div className="py-10 w-full md:py-20">
          <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden py-10">
            <div className="w-full h-full flex overflow-hidden p-2 flex-row"></div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col items-center justify-center py-12 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-xl mx-auto text-start md:text-center">
            <span className="inline-flex h-full w-full items-center justify-center rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              Know who you are
            </span>
            <h2 className="text-3xl font-semibold pt-6 lg:text-4xl">
              Get to know your habits, Improve them everyday
            </h2>
            <p className="text-muted-foreground mt-6">
              Track your habits consistently, identify patterns, and make small
              improvements daily to enhance your productivity and well-being
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          <div className="flex flex-col gap-4 bento-card">
            <div>
              <h3 className="text-xl font-semibold">Measure time spent</h3>
              <p className="text-muted-foreground mt-4">
                Get a deep understanding of where your time goes
              </p>
            </div>
            <div className="flex flex-1 bg-muted rounded-2xl" />
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-4 flex-1 bento-card">
              <div>
                <h3 className="text-xl font-semibold">Track your habits</h3>
                <p className="text-muted-foreground mt-4">
                  Keep track of your habits and see how consistent you are
                </p>
              </div>
              <div className="flex flex-1 bg-muted rounded-2xl p-20" />
            </div>
            <div className="flex flex-col gap-4 flex-1 bento-card">
              <div>
                <h3 className="text-xl font-semibold">Set goals</h3>
                <p className="text-muted-foreground mt-4">
                  Set goals and track your progress
                </p>
              </div>
              <div className="flex flex-1 bg-muted rounded-2xl p-20" />
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full mx-auto max-w-[1350px] px-4 flex flex-col items-center justify-center py-12 relative gap-10 md:px-20">
        <div className="w-full h-full">
          <div className="max-w-md mx-auto text-start md:text-center">
            <span className="inline-flex h-full w-full items-center justify-center rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
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
            <div className="flex flex-col gap-4 p-8 rounded-xl border border-border bg-background">
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
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>Regular updates and new features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>Premium support</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>No recurring fees</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4 p-8 border border-border bg-background rounded-xl">
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
                    <span>Full access to all features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>Regular updates and new features</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
                    <span>Premium support</span>
                  </div>
                  <div className="flex flex-row items-centergap-2">
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
            <span className="inline-flex h-full w-full items-center justify-center rounded-full cursor-pointer bg-slate-950 px-4 py-1 text-sm font-medium text-white backdrop-blur-3xl">
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
            <div className="group flew overflow-hidden p-2 select-none flex-row [--duration.20s]">
              <figure className="relative flex-shrink-0 w-64 p-4 border border-border over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer">
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
            </div>
            <div className="group flew overflow-hidden p-2 select-none flex-row [--duration.20s]">
              <figure className="relative flex-shrink-0 w-64 p-4 border border-border over:lg-zinc-50/[.15] overflow-hidden rounded-xl bg-background cursor-pointer">
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

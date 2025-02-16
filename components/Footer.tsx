import Link from "next/link";
const Footer = () => {
    return ( 
        <div className="py-10">
        <div className="h-full w-full mx-auto px-4 max-w-[1350px] md:px-20">
          <div className="flex flex-col gap-10 pb-28 border-bottom lg:flex-row text-white dark:text-black">
            <div className="flex flex-1 gap-5 flex-col">
              <div className="flex gap-2 items-center text-lg font-medium">
                <div className="size-8 rounded-md dark:bg-slate-600 bg-slate-900 transition-all duration-200" />
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
                  <Link href="/">
                    <li>Home</li>
                  </Link>
                  <Link href="/features">
                    <li>Features</li>
                  </Link>
                  <Link href="/integrations">
                    <li>Integrations</li>
                  </Link>
                  <Link href="/pricing">
                    <li>Pricing</li>
                  </Link>
                  <Link href="/docs">
                    <li>Docs</li>
                  </Link>
                  <Link href="/contacts">
                    <li>Contacts</li>
                  </Link>
                </ul>
              </div>
              <div className="flex-1">
                <div className="flex flex-col gap-5">
                  <h3>Pages</h3>
                  <ul className="flex flex-col gap-2 text-gray-400">
                    <Link href="/features">
                      <li>Features</li>
                    </Link>
                    <Link href="/integretions">
                      <li>Integrations</li>
                    </Link>
                    <Link href="/docs">
                      <li>Docs</li>
                    </Link>
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
              <p className="text-slate-500">
                © 2024 TodoFusion. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
                <div className="w-6 h-6 rounded-md cursor-pointer dark:bg-slate-600 bg-slate-900" />
              </div>
            </div>
            <p className="text-sm text-center font-medium text-white dark:text-black">
              Made with 🩶 by
              <a className="duration-200 text-blue-800"> Kwaham Grace.</a>{" "}
            </p>
          </div>
        </div>
      </div>
     );
}
 
export default Footer;

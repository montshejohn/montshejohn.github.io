import Link from 'next/link';
import Image from 'next/image';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <nav className="navbar fixed top-0 left-0 h-screen w-64 bg-primary text-white">
        <div className="p-4">
          <Link href="/#page-top" className="block text-center">
            <span className="block lg:hidden">Montshe Mokgokong</span>
            <span className="hidden lg:block">
              <Image
                className="rounded-full mx-auto mb-2"
                src="/me.jpeg"
                alt="Profile"
                width={160}
                height={160}
              />
            </span>
          </Link>
          <button
            className="lg:hidden navbar-toggler"
            type="button"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="navbar-collapse">
            <ul className="mt-8 space-y-4">
              <li>
                <Link href="/#about" className="block hover:text-gray-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#interests" className="block hover:text-gray-300">
                  Interests
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="block hover:text-gray-300">
                  Skills
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="ml-64">
        {children}
      </main>
    </div>
  );
}
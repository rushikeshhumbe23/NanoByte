import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

const Logo = (props: any) => {
  return (
    <svg height={32} viewBox="0 0 120 28" xmlns="http://www.w3.org/2000/svg" {...props}>
      {/* Your SVG path here */}
    </svg>
  );
};

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <a
      href={href}
      className="bg-blackAlpha.100 hover:bg-blackAlpha.200 rounded-full w-8 h-8 cursor-pointer inline-flex items-center justify-center transition duration-300"
    >
      <span className="sr-only">{label}</span>
      {children}
    </a>
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <p className="font-semibold text-lg mb-2">
      {children}
    </p>
  );
};

export default function LargeWithNewsletter() {
  return (
    <div className="bg-gray-50 dark:bg-gray-900 text-gray-700 dark:text-gray-200">
      <div className="container mx-auto py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8">
          <div className="col-span-1">
            <div className="mb-6">
              <Logo className="text-gray-700 dark:text-white" />
            </div>
            <p className="text-sm">© 2022 Chakra Templates. All rights reserved</p>
            <div className="flex mt-4">
              <SocialButton label="Twitter" href="#">
                <FaTwitter />
              </SocialButton>
              <SocialButton label="YouTube" href="#">
                <FaYoutube />
              </SocialButton>
              <SocialButton label="Instagram" href="#">
                <FaInstagram />
              </SocialButton>
            </div>
          </div>
          <div className="col-span-1">
            <ListHeader>Company</ListHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="#">About us</a>
              <a href="#">Blog</a>
              <a href="#">Contact us</a>
              <a href="#">Pricing</a>
              <a href="#">Testimonials</a>
            </div>
          </div>
          <div className="col-span-1">
            <ListHeader>Support</ListHeader>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <a href="#">Help Center</a>
              <a href="#">Terms of Service</a>
              <a href="#">Legal</a>
              <a href="#">Privacy Policy</a>
              <a href="#">Status</a>
            </div>
          </div>
          <div className="col-span-1">
            <ListHeader>Stay up to date</ListHeader>
            <div className="flex">
              <input
                type="email"
                placeholder="Your email address"
                className="bg-blackAlpha.100 dark:bg-whiteAlpha.100 border border-transparent focus:bg-whiteAlpha.300 transition duration-300 py-2 px-4 rounded-l-full focus:outline-none"
              />
              <button
                className="bg-green-400 dark:bg-green-800 hover:bg-green-600 transition duration-300 rounded-r-full p-2 flex items-center justify-center"
                aria-label="Subscribe"
              >
                <BiMailSend className="text-white dark:text-gray-800" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


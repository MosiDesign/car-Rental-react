import React from 'react';
import logoCar from "../images/logo-car.svg";


interface FooterLink {
  label: string;
  href: string;
}

interface LinkGroup {
  title: string;
  links: FooterLink[];
}

interface SocialIconProps {
  name: 'facebook' | 'instagram' | 'twitter' | 'mail';
  svgPath: React.ReactNode;
}

const linkGroups: LinkGroup[] = [
  {
    title: 'Quick Links',
    links: [
      { label: 'Home', href: '#' },
      { label: 'Browse Cars', href: '#' },
      { label: 'List Your Car', href: '#' },
      { label: 'About Us', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Help Center', href: '#' },
      { label: 'Terms of Service', href: '#' },
      { label: 'Privacy Policy', href: '#' },
      { label: 'Insurance', href: '#' },
    ],
  },
];

const SocialIcon: React.FC<SocialIconProps> = ({ name, svgPath }) => (
  <a href="#" aria-label={name} className="hover:text-gray-800 transition-colors">
    <svg 
      width="20" 
      height="20" 
      viewBox="0 0 20 20" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      className="w-5 h-5 text-gray-500 hover:text-gray-800"
    >
      {svgPath}
    </svg>
  </a>
);

const socialIcons: SocialIconProps[] = [
    {
      name: 'facebook',
      svgPath: (
        <path 
          d="M14.9997 1.66602H12.4997C11.3946 1.66602 10.3348 2.105 9.5534 2.8864C8.77199 3.66781 8.33301 4.72761 8.33301 5.83268V8.33268H5.83301V11.666H8.33301V18.3327H11.6663V11.666H14.1663L14.9997 8.33268H11.6663V5.83268C11.6663 5.61167 11.7541 5.39971 11.9104 5.24343C12.0667 5.08715 12.2787 4.99935 12.4997 4.99935H14.9997V1.66602Z" 
          stroke="currentColor" 
          strokeWidth="1.66667" 
          strokeLinecap="round" 
          strokeLinejoin="round" 
        />
      ),
    },
    {
      name: 'instagram',
      svgPath: (
        <>
          <path d="M14.167 1.66602H5.83366C3.53247 1.66602 1.66699 3.5315 1.66699 5.83268V14.166C1.66699 16.4672 3.53247 18.3327 5.83366 18.3327H14.167C16.4682 18.3327 18.3337 16.4672 18.3337 14.166V5.83268C18.3337 3.5315 16.4682 1.66602 14.167 1.66602Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M13.3337 9.47525C13.4366 10.1688 13.3181 10.8771 12.9952 11.4994C12.6723 12.1218 12.1614 12.6264 11.5351 12.9416C10.9088 13.2569 10.1991 13.3666 9.5069 13.2552C8.81468 13.1438 8.17521 12.817 7.67944 12.3212C7.18367 11.8255 6.85685 11.186 6.74546 10.4938C6.63408 9.80154 6.74379 9.09183 7.05901 8.46556C7.37423 7.8393 7.8789 7.32837 8.50123 7.00545C9.12356 6.68254 9.83187 6.56407 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60717C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M14.583 5.41602H14.5913" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      ),
    },
    {
      name: 'twitter',
      svgPath: (
        <path d="M18.3337 3.3327C18.3337 3.3327 17.7503 5.0827 16.667 6.16603C18.0003 14.4994 8.83366 20.5827 1.66699 15.8327C3.50033 15.916 5.33366 15.3327 6.66699 14.166C2.50033 12.916 0.416992 7.99937 2.50033 4.16603C4.33366 6.3327 7.16699 7.5827 10.0003 7.49937C9.25033 3.99937 13.3337 1.99937 15.8337 4.3327C16.7503 4.3327 18.3337 3.3327 18.3337 3.3327Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
      ),
    },
    {
      name: 'mail',
      svgPath: (
        <>
          <path d="M16.667 3.33398H3.33366C2.41318 3.33398 1.66699 4.08018 1.66699 5.00065V15.0007C1.66699 15.9211 2.41318 16.6673 3.33366 16.6673H16.667C17.5875 16.6673 18.3337 15.9211 18.3337 15.0007V5.00065C18.3337 4.08018 17.5875 3.33398 16.667 3.33398Z" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M18.3337 5.83398L10.8587 10.584C10.6014 10.7452 10.3039 10.8307 10.0003 10.8307C9.69673 10.8307 9.39927 10.7452 9.14199 10.584L1.66699 5.83398" stroke="currentColor" strokeWidth="1.66667" strokeLinecap="round" strokeLinejoin="round"/>
        </>
      ),
    }
  ];

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-24 xl:px-32 mt-60 text-sm text-gray-500">
      <div className="flex flex-wrap justify-between items-start gap-8 pb-6 border-gray-200 border-b">
        
        <div>
          <img 
            alt="logo" 
            className="h-8 md:h-9" 
            src={logoCar} 
          />
          <p className="max-w-80 mt-3">
            Premium car rental service with a wide selection of luxury and everyday vehicles for all your driving needs.
          </p>
          
          <div className="flex items-center gap-3 mt-6">
            {socialIcons.map((icon) => (
              <SocialIcon key={icon.name} name={icon.name} svgPath={icon.svgPath} />
            ))}
          </div>
        </div>
        
        <div className="flex flex-wrap justify-between w-full md:w-1/2 gap-8">
          
          {linkGroups.map((group) => (
            <div key={group.title}>
              <h2 className="text-base font-medium text-gray-800 uppercase">
                {group.title}
              </h2>
              <ul className="mt-3 flex flex-col gap-1.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} className="hover:text-gray-800 transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h2 className="text-base font-medium text-gray-800 uppercase">Contact</h2>
            <ul className="mt-3 flex flex-col gap-1.5">
              <li>1234 Luxury Drive</li>
              <li>San Francisco, CA 94107</li>
              <li>+1 234 567890</li>
              <li className="hover:text-gray-800 transition-colors cursor-pointer">info@example.com</li>
            </ul>
          </div>

        </div>
      </div>
      
      <div className="flex flex-col md:flex-row gap-2 items-center justify-between py-5">
        <p>© 2025 Brand. All rights reserved.</p>
        <ul className="flex items-center gap-4">
            <li><a href="#" className="hover:text-gray-800 transition-colors">Privacy</a></li>
            <li>|</li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Terms</a></li>
            <li>|</li>
            <li><a href="#" className="hover:text-gray-800 transition-colors">Cookies</a></li>
        </ul>
    </div>
    </footer>
  );
};

export default Footer;
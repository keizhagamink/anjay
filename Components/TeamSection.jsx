import { assets } from '@/Assets/assets';
import Image from 'next/image';

const TeamSection = () => {
  return (
    <section id="team" className="relative pt-20 pb-8 md:pt-16 bg-white dark:bg-gray-800">
      <div className="container xl:max-w-6xl mx-auto px-4">
        {/* Section Header */}
        <header className="text-center mx-auto mb-12">
          <h2 className="text-2xl leading-normal mb-2 font-bold text-gray-800 dark:text-gray-100">
            <span className="font-light">OUR</span> TEAM
          </h2>
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 60"
            style={{ margin: '0 auto', height: '35px' }}
            xmlSpace="preserve"
          >
            <circle cx="50.1" cy="30.4" r="5" className="stroke-primary" style={{ fill: 'transparent', strokeWidth: 2, strokeMiterlimit: 10 }} />
            <line x1="55.1" y1="30.4" x2="100" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }} />
            <line x1="45.1" y1="30.4" x2="0" y2="30.4" className="stroke-primary" style={{ strokeWidth: 2, strokeMiterlimit: 10 }} />
          </svg>
        </header>

        {/* Team Members */}
        <div className="flex flex-wrap flex-row -mx-4 justify-center">
          {[{
            name: 'Clarissa Mulya Darmawan',
            role: '2301875',
            socialLinks: {
              twitter: '#',
              facebook: '#',
              instagram: '#',
              linkedin: '#'
            }
          }, {
            name: 'Hilwa Nur Falah',
            role: '2312509',
            socialLinks: {
              twitter: 'https://x.com/zendaya?s=21',
              facebook: 'https://www.facebook.com/share/uRKarwtFEN7VZwPf/?mibextid=LQQJ4d',
              instagram: 'https://www.instagram.com/zendaya?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
              linkedin: '#'
            }
          }, {
            name: 'Keizha Kamila',
            role: '2301585',
            socialLinks: {
              twitter: '#',
              facebook: '#',
              instagram: '#',
              linkedin: '#'
            }
          }].map((member, index) => (
            <div key={index} className="flex-shrink max-w-full px-4 w-2/3 sm:w-1/2 md:w-5/12 lg:w-1/4 xl:px-6">
              <div className="relative overflow-hidden bg-white dark:bg-gray-800 mb-12 hover-grayscale-0">
                <div className="relative overflow-hidden px-6">
                  <Image
                    src={assets.iconfemale}
                    alt={`${member.name} profile`}
                    width={200}
                    height={200}
                    className="max-w-full h-auto mx-auto rounded-full bg-gray-50 grayscale"
                  />
                </div>
                <div className="pt-6 text-center">
                  <p className="text-lg leading-normal font-bold mb-1">{member.name}</p>
                  <p className="text-gray-500 leading-relaxed font-light">{member.role}</p>
                  <div className="mt-2 mb-5 space-x-2">
                    <a className="hover:text-blue-700" aria-label="Twitter link" href={member.socialLinks.twitter}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M496,109.5a201.8,201.8,0,0,1-56.55,15.3,97.51,97.51,0,0,0,43.33-53.6,197.74,197.74,0,0,1-62.56,23.5A99.14,99.14,0,0,0,348.31,64c-54.42,0-98.46,43.4-98.46,96.9a93.21,93.21,0,0,0,2.54,22.1,280.7,280.7,0,0,1-203-101.3A95.69,95.69,0,0,0,36,130.4C36,164,53.53,193.7,80,211.1A97.5,97.5,0,0,1,35.22,199v1.2c0,47,34,86.1,79,95a100.76,100.76,0,0,1-25.94,3.4,94.38,94.38,0,0,1-18.51-1.8c12.51,38.5,48.92,66.5,92.05,67.3A199.59,199.59,0,0,1,39.5,405.6,203,203,0,0,1,16,404.2,278.68,278.68,0,0,0,166.74,448c181.36,0,280.44-147.7,280.44-275.8,0-4.2-.11-8.4-.31-12.5A198.48,198.48,0,0,0,496,109.5Z"></path>
                      </svg>
                    </a>
                    <a className="hover:text-blue-700" aria-label="Facebook link" href={member.socialLinks.facebook}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M455.27,32H56.73A24.74,24.74,0,0,0,32,56.73V455.27A24.74,24.74,0,0,0,56.73,480H256V304H202.45V240H256V189c0-57.86,40.13-89.36,91.82-89.36,24.73,0,51.33,1.86,57.51,2.68v60.43H364.15c-28.12,0-33.48,13.3-33.48,32.9V240h67l-8.75,64H330.67V480h124.6A24.74,24.74,0,0,0,480,455.27V56.73A24.74,24.74,0,0,0,455.27,32Z"></path>
                      </svg>
                    </a>
                    <a className="hover:text-blue-700" aria-label="Instagram link" href={member.socialLinks.instagram}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M349.33,69.33a93.62,93.62,0,0,1,93.34,93.34V349.33a93.62,93.62,0,0,1-93.34,93.34H162.67a93.62,93.62,0,0,1-93.34-93.34V162.67a93.62,93.62,0,0,1,93.34-93.34H349.33m0-37.33H162.67C90.8,32,32,90.8,32,162.67V349.33C32,421.2,90.8,480,162.67,480H349.33C421.2,480,480,421.2,480,349.33V162.67C480,90.8,421.2,32,349.33,32Z"></path>
                        <path fill="currentColor" d="M377.33,162.67a28,28,0,1,1,28-28A27.94,27.94,0,0,1,377.33,162.67Z"></path>
                        <path fill="currentColor" d="M256,181.33A74.67,74.67,0,1,1,181.33,256,74.74,74.74,0,0,1,256,181.33Z"></path>
                      </svg>
                    </a>
                    <a className="hover:text-blue-700" aria-label="LinkedIn link" href={member.socialLinks.linkedin}>
                      <svg xmlns="http://www.w3.org/2000/svg" className="inline-block" width="1rem" height="1rem" viewBox="0 0 512 512">
                        <path fill="currentColor" d="M100,80A48,48,0,1,1,48,128,48,48,0,0,1,100,80ZM0,416V208H72v208H0ZM128,0h72v208H128ZM208,0h72v208H208ZM400,416h72V208H400Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

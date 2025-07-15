import React from "react";
import { SocialIcon } from 'react-social-icons';

const socialLinks = [
  { network: "x", url: "https://x.com/" },
  { network: "instagram", url: "https://instagram.com/" },
  { network: "youtube", url: "https://youtube.com/" },
  { network: "facebook", url: "https://facebook.com/" },
];

const Footer: React.FC = () => (
  <footer className="px-8 py-4 bg-[#4169E1] flex items-center justify-between">
    {/* Left links */}
    <div className="flex gap-6">
      <a href="#" className="text-[#111] font-semibold no-underline text-sm">Newsletter</a>
      <a href="#" className="text-[#111] font-semibold no-underline text-sm">Contact Us</a>
    </div>
    {/* Social icons for social links */}
    <div className="flex items-center">
      {socialLinks.map(({ network, url }) => (
        <SocialIcon
          key={network}
          url={url}
          network={network}
          bgColor="#111"
          fgColor="#fff"
          style={{ height: 32, width: 32, marginLeft: 16 }}
        />
      ))}
    </div>
  </footer>
);

export default Footer;

"use client";

import React from 'react'
import Image from 'next/image';
import UberLogoWhite from '@repo/assets/icons/Uber_Logo_White_RGB.png';
import { useTranslation } from "@repo/internationalization/localProvider";
import { HeadingLevel, Heading } from '@repo/design-system/components/ui/heading-level';
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaXTwitter } from '@repo/design-system';
import { LocaleSwitcher } from '@/components/local-switcher';
import { Link } from '@repo/design-system/components/ui/Link';

interface FooterProps {
  country: string;
  locale: string;
}

export const Footer = ({ country, locale }: FooterProps) => {
  const { dictionary: { footer } } = useTranslation('(home)');

  const socialLinks = [
    {
      icon: FaFacebook,
      href: 'https://facebook.com/uber',
      label: 'Facebook'
    },
    {
      icon: FaXTwitter,
      href: 'https://twitter.com/uber',
      label: 'Twitter'
    },
    {
      icon: FaLinkedin,
      href: 'https://linkedin.com/company/uber',
      label: 'LinkedIn'
    },
    {
      icon: FaYoutube,
      href: 'https://youtube.com/uber',
      label: 'YouTube'
    },
    {
      icon: FaInstagram,
      href: 'https://instagram.com/uber',
      label: 'Instagram'
    },
  ];

  return (
    <footer className='bg-black flex-1 text-white py-16'>
      <div className='max-w-7xl mx-auto px-6 sm:px-8 lg:px-12'>
        <div className='space-y-12'>

          {/* Logo and Help Center Section */}
          <div className='flex flex-col space-y-6 '>
            <div className='flex-shrink-0'>
              <Image
                src={UberLogoWhite}
                width={90}
                height={90}
                alt="Uber Logo"
                className='w-auto h-12'
                priority
              />
            </div>

            {footer?.help_center && (
              <Link
                href={`/${country}/${locale}/${footer.help_center}`}
                className="text-white hover:text-white font-uber-medium text-lg ml-4"
                animate
                animateColor='white'
              >
                {footer.help_center}
              </Link>
            )}
          </div>

          {/* Navigation Lists */}
          {footer?.lists && footer.lists.length > 0 && (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 ml-4'>
              {footer.lists.map((list, listIndex) => (
                <div key={listIndex} className='space-y-4'>
                  <HeadingLevel>
                    <Heading level={5} className='text-white font-uber-medium text-base'>
                      {list.title}
                    </Heading>
                  </HeadingLevel>

                  <ul className='space-y-3'>
                    {list.items?.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <Link
                          href={`/${country}/${locale}/${item.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-white hover:text-neutral-400 w-fit transition-colors duration-200 text-sm font-uber-medium leading-relaxed block"
                        >
                          {item}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {/* Social Media and Language Switcher */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 pt-8'>
            <div className='flex gap-16'>
              {socialLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={idx}
                    href={link.href}
                    aria-label={link.label}
                    className='py-2 px-2.5 hover:bg-neutral-800 rounded-lg text-white  transition-all duration-200 '
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Icon className='w-5 h-5  duration-200' />
                  </Link>
                );
              })}
            </div>

            <LocaleSwitcher
              country={country}
              locale={locale}
            />
          </div>

          {/* Copyright and Legal Links */}
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-8'>
            <p className="text-neutral-400 text-xs font-uber-regular">
              © {new Date().getFullYear()} Uber Technologies Inc.
            </p>

            {footer?.legal_and_policy_links_text && footer.legal_and_policy_links_text.length > 0 && (
              <ul className='flex flex-wrap gap-6'>
                {footer.legal_and_policy_links_text.map((link, idx) => (
                  <li key={idx}>
                    <Link
                      href={`/${country}/${locale}/${link.toLowerCase().replace(/\s+/g, '-')}`}
                      className="text-neutral-300 hover:text-white font-uber-regular text-xs transition-colors duration-200"
                    >
                      {/* {typeof link === 'string' ? link : link.title || link.label} */}
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </footer>
  )
}
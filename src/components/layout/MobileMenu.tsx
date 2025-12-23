'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { mainNavigation, type NavItem } from '@/config/navigation';

interface MobileMenuProps {
  onClose: () => void;
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname.startsWith(href);
  };

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  return (
    <div className="lg:hidden border-t border-neutral-200 bg-white">
      <nav className="px-4 py-4 space-y-1 max-h-[calc(100vh-5rem)] overflow-y-auto">
        {mainNavigation.map((item) => (
          <div key={item.href}>
            <div className="flex items-center justify-between">
              <Link
                href={item.href}
                onClick={onClose}
                className={`
                  flex-1 px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${
                    isActive(item.href)
                      ? 'text-primary bg-primary/10'
                      : 'text-neutral-700 hover:text-primary hover:bg-neutral-100'
                  }
                `}
              >
                {item.label}
              </Link>

              {item.submenu && (
                <button
                  onClick={() => toggleExpanded(item.label)}
                  className="p-2 text-neutral-600 hover:text-primary"
                  aria-label={`Toggle ${item.label} submenu`}
                >
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      expandedItems.has(item.label) ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Submenu */}
            {item.submenu && expandedItems.has(item.label) && (
              <div className="ml-4 mt-1 space-y-1">
                {item.submenu.map((subItem) => (
                  <Link
                    key={subItem.href}
                    href={subItem.href}
                    onClick={onClose}
                    className={`
                      block px-3 py-2 rounded-md text-sm transition-colors
                      ${
                        isActive(subItem.href)
                          ? 'text-primary bg-primary/10 font-medium'
                          : 'text-neutral-600 hover:text-primary hover:bg-neutral-50'
                      }
                    `}
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}

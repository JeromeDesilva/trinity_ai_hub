import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navigationItems = [
    { path: '/homepage', label: 'Home' },
    { path: '/trinity-cluster-explorer', label: 'Cluster Explorer' },
    { path: '/solutions-architecture', label: 'Solutions' },
    { path: '/digital-products-suite', label: 'Products' },
    { path: '/success-stories', label: 'Success Stories' },
  ];

  const moreMenuItems = [
    { path: '/trinity-academy', label: 'Academy' },
    { path: '/partnership-portal', label: 'Partnership' },
  ];

  const isActivePath = (path) => location?.pathname === path;

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header className="header">
        <div className="header-container">
          <Link to="/homepage" className="header-logo">
            <div className="header-logo-icon">
              <Icon name="Sparkles" size={24} color="white" />
            </div>
            <span className="header-logo-text">Trinity AI Hub</span>
          </Link>

          <nav className="header-nav">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`header-nav-link ${isActivePath(item?.path) ? 'active' : ''}`}
              >
                {item?.label}
              </Link>
            ))}
            
            <div className="relative group">
              <button className="header-nav-link flex items-center gap-1">
                More
                <Icon name="ChevronDown" size={16} />
              </button>
              <div className="absolute top-full right-0 mt-1 w-48 bg-popover border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-out">
                <div className="py-2">
                  {moreMenuItems?.map((item) => (
                    <Link
                      key={item?.path}
                      to={item?.path}
                      className={`block px-4 py-2 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted transition-colors duration-300 no-underline ${
                        isActivePath(item?.path) ? 'text-primary bg-primary/10' : ''
                      }`}
                    >
                      {item?.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </nav>

          <div className="header-actions">
            <Button variant="outline" size="sm" className="hidden lg:inline-flex">
              Sign In
            </Button>
            <Button variant="default" size="sm" className="hidden lg:inline-flex">
              Get Started
            </Button>
            
            <button
              onClick={toggleMobileMenu}
              className="header-mobile-toggle"
              aria-label="Toggle mobile menu"
            >
              <Icon name={isMobileMenuOpen ? 'X' : 'Menu'} size={24} />
            </button>
          </div>
        </div>
      </header>
      {isMobileMenuOpen && (
        <>
          <div 
            className="mobile-menu-overlay" 
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          <div className="mobile-menu">
            <div className="mobile-menu-header">
              <span className="text-lg font-bold text-foreground">Menu</span>
              <button
                onClick={closeMobileMenu}
                className="mobile-menu-close"
                aria-label="Close mobile menu"
              >
                <Icon name="X" size={24} />
              </button>
            </div>
            
            <nav className="mobile-menu-nav">
              {[...navigationItems, ...moreMenuItems]?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  className={`mobile-menu-link ${isActivePath(item?.path) ? 'active' : ''}`}
                  onClick={closeMobileMenu}
                >
                  {item?.label}
                </Link>
              ))}
              
              <div className="mt-4 pt-4 border-t border-border space-y-2">
                <Button variant="outline" fullWidth onClick={closeMobileMenu}>
                  Sign In
                </Button>
                <Button variant="default" fullWidth onClick={closeMobileMenu}>
                  Get Started
                </Button>
              </div>
            </nav>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
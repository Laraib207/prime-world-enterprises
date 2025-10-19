'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [windowWidth, setWindowWidth] = useState(1024) // Default to desktop

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }

    // Set initial width
    setWindowWidth(window.innerWidth)

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <>
      {/* Top Bar - Contact Info */}
      <div style={{
        position: 'fixed',
        top: 0,
        width: '100%',
        zIndex: 1000,
        background: 'linear-gradient(135deg, #0a0e27 0%, #1a1f3a 100%)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '40px',
          fontSize: '0.875rem'
        }}>
          <div style={{ display: 'flex', gap: '2rem', color: '#a8b2d1' }}>
            <a href="tel:+919999999999" style={{ 
              color: '#a8b2d1', 
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>
              📞 +91-9999-999-999
            </a>
            <a href="mailto:info@primeworldenterprises.com" style={{
              color: '#a8b2d1',
              textDecoration: 'none',
              transition: 'color 0.3s',
              display: windowWidth < 768 ? 'none' : 'inline'
            }}>
              📧 info@primeworldenterprises.com
            </a>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.25rem 1rem',
            background: 'rgba(0, 212, 255, 0.1)',
            border: '1px solid rgba(0, 212, 255, 0.3)',
            borderRadius: '50px',
            fontSize: '0.75rem'
          }}>
            <span style={{
              width: '8px',
              height: '8px',
              background: '#00d4ff',
              borderRadius: '50%',
              display: 'inline-block',
              animation: 'pulse 2s infinite'
            }}></span>
            <span style={{ color: '#00d4ff', fontWeight: 'bold' }}>24/7 Available</span>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav style={{
        position: 'fixed',
        top: '40px',
        width: '100%',
        zIndex: 999,
        background: scrolled ? 'rgba(10, 14, 39, 0.95)' : 'rgba(10, 14, 39, 0.8)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 10px 40px rgba(0, 102, 255, 0.2)' : 'none'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '80px'
          }}>
            {/* Logo */}
            <Link href="/" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: '1rem',
              textDecoration: 'none',
              position: 'relative'
            }}>
              <div style={{
                width: '50px',
                height: '50px',
                background: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
                borderRadius: '12px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '1.5rem',
                color: '#ffffff',
                boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
                transition: 'transform 0.3s ease'
              }}>
                PW
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{
                  fontWeight: 'bold',
                  fontSize: '1.25rem',
                  background: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  lineHeight: '1.2'
                }}>
                  Prime World
                </span>
                <span style={{
                  fontSize: '0.75rem',
                  color: '#a8b2d1',
                  fontWeight: '500',
                  letterSpacing: '0.1em'
                }}>
                  ENTERPRISES
                </span>
              </div>
            </Link>

            {/* Desktop Menu */}
            <div style={{
              display: windowWidth >= 1024 ? 'flex' : 'none',
              alignItems: 'center',
              gap: '2rem'
            }}>
              <Link href="/" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s',
                position: 'relative'
              }}>
                Home
              </Link>
              <Link href="/about" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}>
                About
              </Link>
              <Link href="/services" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}>
                Services
              </Link>
              <Link href="/contact" style={{
                color: '#ffffff',
                textDecoration: 'none',
                fontSize: '1rem',
                fontWeight: '600',
                transition: 'color 0.3s'
              }}>
                Contact
              </Link>
              
              {/* CTA Button */}
              <Link href="/contact" style={{
                padding: '0.75rem 2rem',
                background: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
                color: '#ffffff',
                borderRadius: '50px',
                fontWeight: 'bold',
                textDecoration: 'none',
                boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)',
                transition: 'all 0.3s ease',
                display: 'inline-block'
              }}>
                Get Quote →
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              style={{
                display: windowWidth >= 1024 ? 'none' : 'flex',
                flexDirection: 'column',
                gap: '6px',
                width: '40px',
                height: '40px',
                alignItems: 'center',
                justifyContent: 'center',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: 0
              }}
            >
              <span style={{
                width: '24px',
                height: '2px',
                background: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: isOpen ? 'rotate(45deg) translateY(8px)' : 'none'
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                opacity: isOpen ? 0 : 1
              }}></span>
              <span style={{
                width: '24px',
                height: '2px',
                background: '#ffffff',
                borderRadius: '2px',
                transition: 'all 0.3s',
                transform: isOpen ? 'rotate(-45deg) translateY(-8px)' : 'none'
              }}></span>
            </button>
          </div>

          {/* Mobile Menu */}
          {isOpen && (
            <div style={{
              display: 'block',
              paddingBottom: '1.5rem',
              animation: 'fadeIn 0.3s ease-out'
            }}>
              <div style={{
                background: 'rgba(26, 31, 58, 0.8)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                padding: '1.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem'
              }}>
                <Link 
                  href="/" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                >
                  🏠 Home
                </Link>
                <Link 
                  href="/about" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                >
                  ℹ️ About
                </Link>
                <Link 
                  href="/services" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                >
                  🔧 Services
                </Link>
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    color: '#ffffff',
                    textDecoration: 'none',
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    padding: '0.75rem 1rem',
                    borderRadius: '8px',
                    transition: 'background 0.3s'
                  }}
                >
                  📞 Contact
                </Link>
                
                <Link 
                  href="/contact" 
                  onClick={() => setIsOpen(false)}
                  style={{
                    marginTop: '1rem',
                    padding: '1rem 2rem',
                    background: 'linear-gradient(135deg, #0066ff 0%, #00d4ff 100%)',
                    color: '#ffffff',
                    borderRadius: '12px',
                    fontWeight: 'bold',
                    textDecoration: 'none',
                    textAlign: 'center',
                    boxShadow: '0 4px 20px rgba(0, 102, 255, 0.3)'
                  }}
                >
                  Get Quote →
                </Link>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: '120px' }}></div>
    </>
  )
}

import { Link } from 'react-router';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='bg-gray-50 border-t border-gray-200 mt-auto'>
      <div className='max-w-6xl mx-auto px-6 py-8'>
        <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-6'>
          {/* About Section */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Yingjian Bai
            </h3>
            <p className='text-sm text-gray-600'>
              Full-stack engineer passionate about building scalable systems and
              clean code.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Quick Links
            </h3>
            <ul className='space-y-2 text-sm'>
              <li>
                <Link
                  to='/'
                  className='text-gray-600 hover:text-blue-600 transition'
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to='/projects'
                  className='text-gray-600 hover:text-blue-600 transition'
                >
                  Projects
                </Link>
              </li>
              <li>
                <Link
                  to='/blog'
                  className='text-gray-600 hover:text-blue-600 transition'
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to='/about'
                  className='text-gray-600 hover:text-blue-600 transition'
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to='/contact'
                  className='text-gray-600 hover:text-blue-600 transition'
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold text-gray-900 mb-3'>
              Connect
            </h3>
            <div className='flex gap-4'>
              <a
                href='https://github.com/BigBigBai'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600 transition text-2xl'
                aria-label='GitHub'
              >
                <FaGithub />
              </a>
              <a
                href='https://linkedin.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600 transition text-2xl'
                aria-label='LinkedIn'
              >
                <FaLinkedin />
              </a>
              <a
                href='https://twitter.com'
                target='_blank'
                rel='noopener noreferrer'
                className='text-gray-600 hover:text-blue-600 transition text-2xl'
                aria-label='Twitter'
              >
                <FaTwitter />
              </a>
              <a
                href='mailto:your.email@example.com'
                className='text-gray-600 hover:text-blue-600 transition text-2xl'
                aria-label='Email'
              >
                <FaEnvelope />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='pt-6 border-t border-gray-200 text-center'>
          <p className='text-sm text-gray-600'>
            © {currentYear} Yingjian Bai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

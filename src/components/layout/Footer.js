import React from 'react';

export default function Footer() {
  return (
    <footer className="container mx-auto py-16 mb-8 text-gray-800">
      <div className="text-center sm:text-left sm:flex space-y-8 sm:space-y-0 sm:justify-between px-16">
        <div>
          <h2 className="text-lg font-semibold">Contact us</h2>
          <p className="mt-4 leading-loose">
            <a href="mailto:hello@pano.dev">hello@pano.dev</a>
          </p>
        </div>

        <div className="space-y-8 sm:space-y-0 sm:flex sm:space-x-16">
          <div>
            <h2 className="text-lg font-semibold">Social</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://slack.pano.dev">Slack Community →</a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Resources</h2>
            <ul className="mt-4 leading-loose">
              <li>
                <a href="https://docs.pano.dev">Documentation →</a>
              </li>
              <li>
                <a href="https://github.com/panoramichq/panoramic-cli">GitHub →</a>
              </li>
              <li>
                <a href="https://www.panoramichq.com/privacy-policy">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}


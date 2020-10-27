import React from 'react';

export default function Footer() {
  return (
    <footer className="container mx-auto py-16 px-3 mb-8 text-gray-800">
      <div className="flex">
        <div className="w-2/4 px-3">
          <h2 className="text-lg font-semibold">About Us</h2>
          <p className="mt-5 text-gray-500">
            1041 N Formosa Avenue
            <br />
            Formosa West Building #500
            <br />
            West Hollywood, CA 90046
          </p>
        </div>
        <div className="w-1/4 px-3">
          <h2 className="text-lg font-semibold">Social</h2>
          <ul className="mt-4 leading-loose">
            <li>
              <a href="https://slack.pano.dev">Slack Community →</a>
            </li>
          </ul>
        </div>
        <div className="w-1/4 px-3 ">
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
    </footer>
  );
}

export default function Footer() {
  return (
    <footer id="Contact" className="bg-white px-10 py-8">
      <div className="flex justify-between">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-[#47B2E4]">ARSHA</h2>
          <ul>
            <li>
              <p>A108 Adam Street</p>
            </li>
            <li>
              <p>New York, NY 535022</p>
            </li>
            <li>
              <p>United States</p>
            </li>
            <li className="mt-5">
              <p>
                <strong>Phone:</strong> +1 5589 55488 55
              </p>
            </li>
            <li>
              <p>
                <strong>Email:</strong> info@example.com
              </p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#47B2E4]">Useful Links</h4>
          <ul className="text-gray-600">
            <li>
              <p>Home</p>
            </li>
            <li>
              <p>About Us</p>
            </li>
            <li>
              <p>Service</p>
            </li>
            <li>
              <p>Terms of Service</p>
            </li>
            <li>
              <p>Privacy Policy</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#47B2E4]">Our Service</h4>
          <ul className="text-gray-600">
            <li>
              <p>Web Design</p>
            </li>
            <li>
              <p>Web Development</p>
            </li>
            <li>
              <p>Product Management</p>
            </li>
            <li>
              <p>Marketing</p>
            </li>
            <li>
              <p>Graphic Design</p>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <h4 className="text-xl font-bold text-[#47B2E4]">Our Social Networks</h4>
          <p className="text-gray-600">
            Cras fermentum odio eu feugiat lide par
            <br /> naso tierra videa magna derita valies
          </p>
          <div className="flex space-x-4">
            <div className="h-6 w-6 rounded-full bg-[#3692bd]"></div>
            <div className="h-6 w-6 rounded-full bg-[#3692bd]"></div>
            <div className="h-6 w-6 rounded-full bg-[#3692bd]"></div>
            <div className="h-6 w-6 rounded-full bg-[#47B2E4]"></div>
          </div>
        </div>
      </div>

      <section className="mt-8 text-center">
        <p className="text-gray-600">&copy; 2023 Gede Dewo Wahyu M.W. All rights reserved.</p>
      </section>
    </footer>
  );
}

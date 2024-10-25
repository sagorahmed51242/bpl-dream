
const Footer = () => {
  return (
    <div className="bg-[#06091A]">
      <div className="container mx-auto">
              <div className="flex justify-center pt-20">
                <img src="../../../src/assets/images/logo-footer.png" alt="" />
              </div>
              <div className="flex justify-between text-[#FFFFFF99] py-20">
                  <div>
                    <h2 className="text-white text-xl mb-2">About Us</h2>
                    <p>We are a passionate team <br /> dedicated to providing the best<br /> services to our customers.</p>
                  </div>
                  <div>
                    <h2 className="text-white text-xl mb-2">Quick Links</h2>
                    <ul className="list-disc pl-8">
                      <li>Home</li>
                      <li>Services</li>
                      <li>About</li>
                      <li>Contact</li>
                    </ul>
                  </div>
                  <div>
                    <h2 className="text-white text-xl mb-2">Subscribe</h2>
                    <p>Subscribe to our newsletter for the latest updates.</p>
                    <input type="email" placeholder="Enter your email" />
                    <input type="submit" value="Subscribe" />
                  </div>
              </div>
               </div>
               <hr className="border-t-1 border-[#FFFFFF99]"/>

              <div><p className="text-[#FFFFFF99] text-center py-10">@2024 Your Company All Rights Reserved.</p></div>
    </div>
  )
}


export default Footer
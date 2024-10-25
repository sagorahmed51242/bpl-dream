
const NewsLetter = () => {
  return (
    <div className="bg-white py-24 border rounded-3xl outline outline-1 outline-[white] outline-offset-16 relative -bottom-40 z-50" style={{backgroundImage:'url("../../../src/assets/images/bg-shadow.png")',backgroundSize:"cover", backgroundRepeat:"no-repeat"}}>
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold">Subscribe to our Newsletter</h1>
        <p className="text-xl text-[#131313B3] py-2">Get the latest updates and news right in your inbox!</p>
        <div>
          <input type="email" placeholder="Enter your email" className="p-3 w-[400px] mr-2 rounded-lg border" />
          <input type="submit" className="py-3 px-10 text-black font-bold  rounded-lg bg-gradient-to-r from-[#ff8ff8] to-[#f8c455] " value="Subscribe" />
        </div>
      </div>
    </div>
  )
}

export default NewsLetter
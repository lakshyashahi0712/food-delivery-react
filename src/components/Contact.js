const Contact = () =>{
    return(
        <div>
            <h1 className="font-bold text-3xl m-4 p-4">Contact Us page</h1>
            <form>
                <input type="text" className="border-black p-2 m-2" placeholder="Name" />
                <input type="text" className="border-black p-2 m-2" placeholder="Message" />
                <button className="border-black p-2 m-2 border bg-gray-300 rounded-lg">Submit</button>
            </form>
            </div>
    )
}
export default Contact;
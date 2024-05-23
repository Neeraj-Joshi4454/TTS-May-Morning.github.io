
const Home = () => {
    return(
        <>
            <div className="w-[25vw] border m-5 shadow-lg rounded-xl">
                <img src="https://www.w3schools.com/howto/img_avatar.png" className="h-[300px] w-[100%] border-t-4" alt="demo-img" />
                <div className="p-3">
                    <h1 className="text-4xl text-gray-800 text-center my-2">Jhon Doe</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas, unde odit rem minima hic in tempora, enim nostrum atque illum corporis quis sit esse iusto beatae quasi magni quia id.</p>
                    <button className="bg-black text-white p-2 mt-2 rounded-md shadow-md">Know More</button>

                </div>
            </div>
        </>
    );
}

export default Home;
import robot from '../home/image.png'
const Home = () => {
    return (
        <div style={{display:'flex', justifyContent:'space-evenly'}}>
            <div>
                <h1 className='text-center'>Welcome To Robots World!</h1>
                <p className='loremText'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus accusantium<br/> ad aperiam, architecto
                    beatae cum distinctio, dolor doloribus ducimus esse explicabo<br/> facilis in laudantium maiores minima
                    molestiae nam nesciunt nulla pariatur provident<br/> quae quasi reiciendis rem repellat sapiente soluta
                    temporibus?</p>
            </div>

            <div>
                <img style={{border:'solid 5px white'}}  width={'600px'} src={robot}/>
            </div>

        </div>
    )

}
export default Home
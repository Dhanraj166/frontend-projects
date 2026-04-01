// https://api.openweathermap.org/data/2.5/weather?q=trichy&appid=e7ab4e259606ba503278e184ed755d98&units=metric



const getUser = async () => {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=Chenne&appid=e7ab4e259606ba503278e184ed755d98&units=metric");

    if(!response.ok){
        throw new Error("URL is Invallid")
    }
    const user = await response.json()
    console.log(user);

    
}
getUser()
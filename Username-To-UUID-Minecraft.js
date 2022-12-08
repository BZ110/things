const MojangAPI = async function (username){
    const url = "https://api.mojang.com/users/profiles/minecraft/" + username;
    const response = await fetch(url);
    let json;
    try {
        json = await response.json();
    } catch (error) {
        json = {id:null, error: "Invalid username"};
    }
    return json;
}
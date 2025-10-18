// localStorage data output
const getInstallApp = () => {
    const storeInstallAppStr = localStorage.getItem("Installed"); // localStorage string need
    if (storeInstallAppStr) {
        return JSON.parse(storeInstallAppStr); // JSON string → array 
    }
    return []; 
};


// localStorage add data
const addToStore = (id) => {
    const storedAppData = getInstallApp(); // installed app id need
    const numericId = parseInt(id); // convert number

    // dabble installed id then alert 
    if (storedAppData.includes(numericId)) {
        alert("Already installed!");
    }
    // new id localStorage add
    else {
        storedAppData.push(numericId); // new array
        localStorage.setItem("Installed", JSON.stringify(storedAppData)); // array → string > set id
    }
};


// Uninstall app remove localStorage
const removeFromStore = (id) => {
    const storedAppData = getInstallApp(); 
    const numericId = parseInt(id); 
    const updatedData = storedAppData.filter(appId => appId !== numericId); 
    localStorage.setItem("Installed", JSON.stringify(updatedData)); 
};


export { addToStore, getInstallApp, removeFromStore };

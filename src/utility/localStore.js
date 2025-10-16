const getInstallApp = () => {

    const storeInstallAppStr = localStorage.getItem("Installed");
    if (storeInstallAppStr) {
        const storedAppData = JSON.parse(storeInstallAppStr);
        return storedAppData;
    }
    else {
        return [];
    }
}

const addToStore = (id) => {

    const storedAppData2 = getInstallApp();
    if (storedAppData2.includes(id)) {
        alert("alrady installed")
    }
    else {
        storedAppData2.push(id);
        const data = JSON.stringify(storedAppData2);
        localStorage.setItem("Installed", data);
    }
}

export { addToStore, getInstallApp};
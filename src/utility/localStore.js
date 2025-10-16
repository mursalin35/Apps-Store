// 🔹 localStorage থেকে ইনস্টল হওয়া অ্যাপগুলোর ডাটা বের করে আনে
// যদি ডাটা না থাকে, তাহলে খালি অ্যারে [] রিটার্ন করে
const getInstallApp = () => {
    const storeInstallAppStr = localStorage.getItem("Installed"); // localStorage থেকে string ডাটা নেয়া
    if (storeInstallAppStr) {
        return JSON.parse(storeInstallAppStr); // JSON string → array তে রূপান্তর
    }
    return []; // কিছু না পেলে খালি array রিটার্ন করবে
};



// 🔹 নতুন কোনো অ্যাপ ইনস্টল হলে, সেটাকে localStorage এ যোগ করে রাখে
const addToStore = (id) => {
    const storedAppData = getInstallApp(); // আগের ইনস্টল হওয়া অ্যাপ আইডি গুলো নেয়া
    const numericId = parseInt(id); // string হলে number এ কনভার্ট করা

    // যদি আগেই ইনস্টল করা থাকে তাহলে সতর্কবার্তা দেখাবে
    if (storedAppData.includes(numericId)) {
        alert("Already installed!");
    }
    // না থাকলে নতুন আইডি যুক্ত করে localStorage আপডেট করা হবে
    else {
        storedAppData.push(numericId); // নতুন id array তে যোগ
        localStorage.setItem("Installed", JSON.stringify(storedAppData)); // array → string করে save
    }
};



// 🔹 কোনো অ্যাপ Uninstall করলে, সেটাকে localStorage থেকে মুছে দেয়
const removeFromStore = (id) => {
    const storedAppData = getInstallApp(); // ইনস্টল হওয়া সব অ্যাপ আইডি নেয়া
    const numericId = parseInt(id); // নিশ্চিত করা হচ্ছে id সংখ্যা টাইপের
    const updatedData = storedAppData.filter(appId => appId !== numericId); // মুছে ফেলা আইডি বাদ দেওয়া
    localStorage.setItem("Installed", JSON.stringify(updatedData)); // নতুন ডাটা আবার সেভ করা
};



// 🔹 সব ফাংশন export করা হচ্ছে যাতে অন্য কম্পোনেন্টে ব্যবহার করা যায়
export { addToStore, getInstallApp, removeFromStore };

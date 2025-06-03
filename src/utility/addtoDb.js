import { toast } from "./toast"
const getStoredDoctor = () =>{
    const storedDoctorSTR = localStorage.getItem('appointment')

    if (storedDoctorSTR){
        const storedDoctordata = JSON.parse(storedDoctorSTR)
        return storedDoctordata
    }
    else{
        return []
    }

}

const addToStoredDB = (id, doctorName) => {
    const storedDoctordata = getStoredDoctor();

    if (storedDoctordata.includes(id)) {
        toast.success(`❌ Dr. ${doctorName} is already booked.`);
    } else {
        storedDoctordata.push(id);
        const data = JSON.stringify(storedDoctordata);
        localStorage.setItem("appointment", data);
        toast.success(`✅ Appointment booked with Dr. ${doctorName}.`);
    }
}


const removeFromStoredDB = (id) => {
    const storedDoctordata = getStoredDoctor();
    
    if(storedDoctordata.includes(id)){
        const updatedData = storedDoctordata.filter(item => item !== id);
        const data = JSON.stringify(updatedData);
        localStorage.setItem("appointment", data);
    }
    else{
        alert('Item not found in storage');
    }
}

export {addToStoredDB,getStoredDoctor,removeFromStoredDB}
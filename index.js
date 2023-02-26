const Clock = () => {

    const now = new Date()
    
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const date = now.toLocaleDateString()
    const hour12time = (hours - 12)
    
    if(hour12time < 10){
        document.getElementById("hours").innerHTML = "0" + hour12time
    }else{
        document.getElementById("hours").innerHTML = hour12time
    }
    
    if(hours > 12){
        document.getElementById("ampm").innerHTML = "pm"
    }

    if(minutes < 10){
        document.getElementById("minutes").innerHTML = "0" + minutes
    }else{
        document.getElementById("minutes").innerHTML = minutes
    }
    
    if(seconds < 10){
        document.getElementById("seconds").innerHTML = "0" + seconds
    }else{
        document.getElementById("seconds").innerHTML = seconds
    }

    document.getElementById("date").innerHTML = date

}

setInterval(Clock, 1000)
import logo from '../assets/logo.png'
import '../styles/Banner.css'


function Rec() {
    const currentMonth = new Date().getMonth()
    const isSpring = currentMonth > 2 && currentMonth < 5
    const rec =  isSpring ? ("c'est le printemps") : ("c'est hiver")
    console.log(rec)   
    return (
        <div >

            <h2>{rec}</h2>
       </div>
    )
}

export default Rec
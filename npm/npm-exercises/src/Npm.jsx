import {format} from 'date-fns'; //new installed package
import {v4 as uuidv4} from 'uuid'; //head to the npmjs.com to learn about the packages

function Npm(){
    console.log(`date-fns pkg: ${format(new Date(), 'yyyyMMdd\tHH:mm:ss')}`)
    console.log(`uuid pkg: ${uuidv4()}`)
    return(
        <h1>Check the console</h1>
    );
}
export default Npm;
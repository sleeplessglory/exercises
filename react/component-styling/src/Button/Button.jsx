import styles from './Button.module.css'

function Button(){
    return(
        <>
            <button className={styles.button}>Click me</button>
            {/*to apply module CSS, use its import name (styles) and specify the class (.button)*/}
        </>
    );
}
export default Button
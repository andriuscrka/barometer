import styles from './css/Loader.module.css';

const Loader = ({ role} ) => {
    return (
        <div className={styles.loader} role={role}/>
    );
};

export default Loader;
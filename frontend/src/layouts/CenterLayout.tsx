import styles from './css/CenterLayout.module.css';

const CenterLayout = ({children}) => {
    return (
        <div className={styles.wrapper}>
            <div>
                {children}
            </div>
        </div>
    );
};

export default CenterLayout;
import styles from '../../styles/components/events/error-alert.module.css';

function ErrorAlert(props) {
  return <div className={styles.alert}>{props.children}</div>;
}

export default ErrorAlert;

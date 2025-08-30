import styles from "./CompletedTasks.module.sass";
import IllustrationEmptyList from "../../IllustrationEmptyList";

type CompletedTasksProps = {
    isVisible: boolean;
};

const CompletedTasks = ({ isVisible }: CompletedTasksProps) => {
    return (
        isVisible && (
            <div className={styles.completedTasks}>
                <div className={styles.header}>
                    <div className={styles.title}>Completed Tasks</div>
                </div>
                <div className={styles.illustration}>
                    <IllustrationEmptyList
                        className={styles.illustration}
                        completedTasks={true}
                    />
                </div>
            </div>
        )
    );
};

export default CompletedTasks;

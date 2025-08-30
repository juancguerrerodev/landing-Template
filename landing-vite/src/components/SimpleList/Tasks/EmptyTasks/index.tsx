import styles from "./EmptyTasks.module.sass";
import IllustrationEmptyList from "../../IllustrationEmptyList";

type EmptyTasksProps = {
    isVisible: boolean;
};

const EmptyTasks = ({ isVisible }: EmptyTasksProps) => {
    return (
        isVisible && (
            <div className={styles.emptyTasks}>
                <div className={styles.illustration}>
                    <IllustrationEmptyList
                        className={styles.illustration}
                        emptyTasks={true}
                    />
                </div>
                <div className={styles.text}>
                    No tasks yet. Create your first task to get started!
                </div>
            </div>
        )
    );
};

export default EmptyTasks;

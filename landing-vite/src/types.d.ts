// Type declarations for the migrated project

declare module '*.module.sass' {
  const classes: { [key: string]: string };
  export default classes;
}

// Store types
interface TasksStore {
  tasks: any[];
  updateGroupOrder: (sourceIndex: number, destinationIndex: number) => void;
  addNewGroup: (title: string, icon: string, colorIcon: string) => void;
  removeGroup: (groupId: string) => void;
  duplicateGroup: (groupId: string) => void;
  clearGroup: (groupId: string) => void;
  updateTitleGroup: (groupId: string, newTitle: string) => void;
  updateIconGroup: (groupId: string, newIcon: string) => void;
  updateIconColorGroup: (groupId: string, newColor: string) => void;
  addNewTask: (groupId: string, title: string) => void;
  toggleTaskCompletion: (groupId: string, taskId: string) => void;
  updateTaskOrder: (
    activeGroupId: string | null,
    sourceIndex: number,
    destinationIndex: number
  ) => void;
  toggleShowCompleted: (groupId: string) => void;
  updateTitleTask: (
    groupId: string,
    taskId: string,
    newTitle: string
  ) => void;
  duplicateTask: (groupId: string, taskId: string) => void;
  deleteTask: (groupId: string, taskId: string) => void;
}

interface EventsStore {
  isNewGroup: boolean;
  isNewTask: boolean;
  isOpenActions: boolean;
  activeGroupOptionsId: string | null;
  activeTaskOptionsId: string | null;
  search: string;
  setNewGroup: (value: boolean) => void;
  setNewTask: (value: boolean) => void;
  setOpenActions: (value: boolean) => void;
  setActiveGroupOptionsId: (id: string | null) => void;
  setActiveTaskOptionsId: (id: string | null) => void;
  setSearch: (value: string) => void;
}

// Component prop types
interface HeadProps {
  title: string;
  addButtonRef: React.RefObject<HTMLButtonElement | null>;
}

interface NewTaskProps {
  groupId: string;
  addButtonRef: React.RefObject<HTMLButtonElement | null>;
}

interface NewGroupProps {
  addButtonRef: React.RefObject<HTMLButtonElement | null>;
}

interface WrapProps {
  listRef: React.RefObject<HTMLDivElement | null>;
}

interface IllustrationEmptyListProps {
  className?: string;
  emptyTasks?: boolean;
  completedTasks?: boolean;
}

interface NoResultSearchProps {
  search: string;
  isVisible: boolean;
}

interface EmptyTasksProps {
  isVisible: boolean;
}

interface CompletedTasksProps {
  isVisible: boolean;
}
import React from 'react';
import { StyleSheet, View } from 'react-native';
import Task from './Task';

type TaskListProps = {
    taskData?: {
        data: {
            id: number;
            attributes: {
                title: string; description: string
            }
        }[]
        meta: {
            page: number;
            pageCount: number;
            pageSize: number;
            total: number;
        }
    }
};


const App: React.FC<TaskListProps> = ({ taskData }) => {
    ;
    const tasks = taskData?.data;
    const meta = taskData?.meta;
    return (
        <View style={styles.container}>
           {tasks?.map((task) => (
                <Task key={task.id} title={task.attributes.title} description={task.attributes.description} />
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        padding: 16,
    },
});

export default App;
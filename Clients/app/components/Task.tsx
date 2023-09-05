import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import TaskEdit from './TaskEdit';

interface TaskProps {
    id: number;
    title: string;
    description: string;
}

const Task: React.FC<TaskProps> = ({ id, title, description }) => {
    const [completed, setCompleted] = useState(false);

    const handlePress = () => {
        setCompleted(!completed);
    };

    const [visible, setVisible] = useState(false);
    const handlePressEdit = () => {
       setVisible(!visible);
    };

    return (
        <View>
            <TouchableOpacity onPress={handlePressEdit}>
                <MaterialIcons name="edit" size={24} color="black" />
            </TouchableOpacity>
            <View style={{display: visible ? 'none' : 'flex'}}>
                <TouchableOpacity onPress={handlePress}>
                    <View style={styles.container}>
                        <View style={styles.checkbox}>
                            {completed && <MaterialIcons name="check" size={24} color="#fff" />}
                        </View>
                        <View style={styles.textContainer}>
                            <Text style={styles.title}>{id}</Text>
                            <Text style={styles.title}>{title}</Text>
                            <Text style={styles.description}>{description}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
            <View style={{display: visible ? 'flex' : 'none'}}>
            <TaskEdit id={id} title={title} description={description} onDelete={() => {}} onSave={() => {}} />
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 4,
        borderWidth: 2,
        borderColor: '#ccc',
        marginRight: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textContainer: {
        flex: 1,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    description: {
        fontSize: 16,
    },
});

export default Task;
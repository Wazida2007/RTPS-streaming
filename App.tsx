import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import Video from 'react-native-video';

const RTSPStreamingApp = () => {
    const [rtspUrl, setRtspUrl] = useState('');
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        if (!rtspUrl) {
            Alert.alert("Error", "Please enter a valid RTSP URL.");
            return;
        }
        setIsPlaying(true);
    };

    const handlePause = () => setIsPlaying(false);

    return (
        <View style={styles.container}>
            {/* Heading */}
            <Text style={styles.headerText}>RTSP Streaming </Text>

            <TextInput
                style={styles.input}
                placeholder="Enter RTSP URL"
                placeholderTextColor="#aaa"
                value={rtspUrl}
                onChangeText={setRtspUrl}
            />
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button} onPress={handlePlay}>
                    <Text style={styles.buttonText}>Play</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={handlePause}>
                    <Text style={styles.buttonText}>Pause</Text>
                </TouchableOpacity>
            </View>
            {isPlaying && (
                <Video
                    source={{ uri: rtspUrl }}
                    style={styles.video}
                    controls
                    resizeMode="contain"
                    onError={() => Alert.alert("Streaming Error", "Unable to stream video.")}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#2A2A2A',
        alignItems: 'center',
    },
    headerText: {
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 50,
        color: '#fff',
        textAlign: 'center',
        marginBottom: 20,
    },
    input: {
        width: '100%',
        height: 50,
        borderWidth: 3,
        borderColor: '#aaa',
        borderRadius: 9,
        paddingHorizontal: 10,
        marginTop: 100,
        marginBottom: 30,
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: 'monospace',
        fontSize: 16,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        marginBottom: 10,
    },
    button: {
        flex: 1, 
        backgroundColor: '#e6e6fa',
        paddingVertical: 12,
        marginHorizontal: 5,
        borderRadius: 9,
        alignItems: 'center',
    },
    buttonText: {
        color: '#000',
        fontSize: 18,
        fontWeight: 'bold',
    },
    video: {
        width: '100%',
        height: 300,
    },
});

export default RTSPStreamingApp;

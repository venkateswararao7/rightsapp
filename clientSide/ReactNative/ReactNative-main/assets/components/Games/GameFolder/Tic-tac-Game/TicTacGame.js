import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import React, { useState, useEffect } from 'react'
import Board from './Board';

const TicTacGame = () => {
    const initialBoard = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ]

    const [board, setBoard] = useState(initialBoard);
    const [player, setPlayer] = useState('x');
    const [winner, setWinner] = useState('');

    useEffect(() => {
        checkWinner();
    }, [board]);

    const handlePress = (rowIndex, cellIndex) => {
        if (board[rowIndex][cellIndex] === '' && !winner) {
            const newBoard = [...board];
            newBoard[rowIndex][cellIndex] = player;
            setBoard(newBoard);
            setPlayer(player === 'x' ? 'O' : 'x');
        }
    }

    const checkWinner = () => {
        //rows
        for (let i = 0; i < 3; i++) {
            if (board[i][0] !== '' && board[i][0] === board[i][1] && board[i][1] === board[i][2]) {
                setWinner(board[i][0]);
                break;
            }
        }
        //coloums
        for (let i = 0; i < 3; i++) {
            if (board[0][i] !== '' && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                setWinner(board[0][i]);
            }
        }
        //diagonal
        if (board[0][0] !== '' && board[0][0] === board[1][2] && board[0][0] === board[2][2]) {
            setWinner(board[0][0]);
        } else if (board[0][2] !== '' && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            setWinner(board[0][2])
        }
    }

    const resetBoard = () => {
        setBoard(initialBoard);
        setPlayer('x');
        setWinner('');
    }

    useEffect(() => {
        if (winner) {
            Alert.alert(
                `player ${winner} won!`,
                '',
                [
                    {
                        text: 'Ok', onPress: resetBoard
                    }
                ]
            )
        }
    }, [winner])
    useEffect(() => {
        if (!winner) {
            const isBoardFull = board.every((row) => row.every((cell) => cell !== ''));
            if (isBoardFull) {
                Alert.alert(
                    "It's a tie !!",
                    `Two Player Played Well `,
                    [
                        {
                            text: 'Ok', onPress: resetBoard
                        }
                    ]
                );
            }
        }
    }, [board]);

    return (
        <View style={styles.container}>
            <View style={styles.content}>
                <Board
                    board={board}
                    onPress={handlePress}
                />
                <TouchableOpacity onPress={resetBoard}>
                    <View style={styles.restButton}>
                        <Text style={styles.buttonText}>Reset Button</Text>
                    </View>
                </TouchableOpacity>

            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: '#F4EAE0'
    },
    restButton: {
        backgroundColor: 'black',
        marginTop: 30,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15
    },
    content: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default TicTacGame;

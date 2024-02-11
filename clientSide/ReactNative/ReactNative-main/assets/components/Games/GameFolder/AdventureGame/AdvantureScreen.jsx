// AdventureScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

const AdventureScreen = () => {
    const [currentTurn, setCurrentTurn] = useState('Attorney');
    const [attorneyStatement, setAttorneyStatement] = useState('');
    const [witnessTestimony, setWitnessTestimony] = useState('');
    const [judgeDecision, setJudgeDecision] = useState('');
    const [verdict, setVerdict] = useState('');

    const handleNextTurn = () => {
        setCurrentTurn(currentTurn === 'Attorney' ? 'Witness' : 'Judge');
    };

    const handleAttorneyStatement = (statement) => {
        setAttorneyStatement(statement);
        const result =
            statement.toLowerCase().includes('guilty') ? 'Guilty' : 'Not Guilty';
        setJudgeDecision(result);
        setVerdict(result);
        handleNextTurn();
    };

    const handleWitnessTestimony = (testimony) => {
        setWitnessTestimony(testimony);
        const result =
            testimony.toLowerCase().includes('credible')
                ? 'Credible'
                : 'Not Credible';
        setJudgeDecision(result);
        setVerdict(result);
        handleNextTurn();
    };

    const handleJudgeDecision = (decision) => {
        setJudgeDecision(decision);
        let finalVerdict = 'Inconclusive';

        if (
            attorneyStatement.toLowerCase().includes('guilty') &&
            witnessTestimony.toLowerCase().includes('credible') &&
            decision.toLowerCase().includes('guilty')
        ) {
            finalVerdict = 'Guilty';
        } else if (
            attorneyStatement.toLowerCase().includes('not guilty') &&
            witnessTestimony.toLowerCase().includes('not credible') &&
            decision.toLowerCase().includes('not guilty')
        ) {
            finalVerdict = 'Not Guilty';
        }

        setVerdict(finalVerdict);
        handleNextTurn();
    };

    const handleResetAll = () => {
        setAttorneyStatement('');
        setWitnessTestimony('');
        setJudgeDecision('');
        setVerdict('');
        setCurrentTurn('Attorney')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>Courtroom Simulation</Text>
            {currentTurn === 'Attorney' && (
                <AttorneyTurn
                    onStatementSubmit={handleAttorneyStatement}
                />
            )}
            {currentTurn === 'Witness' && (
                <WitnessTurn
                    onTestimonySubmit={handleWitnessTestimony}
                />
            )}
            {currentTurn === 'Judge' && (
                <JudgeTurn
                    onDecisionSubmit={handleJudgeDecision}
                />
            )}
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsText}>
                    Attorney Statement: {attorneyStatement}
                </Text>
                <Text style={styles.resultsText}>
                    Witness Testimony: {witnessTestimony}
                </Text>
                <Text style={styles.resultsText}>
                    Judge Decision: {judgeDecision}
                </Text>
                <Text style={styles.resultsText}>Verdict: {verdict}</Text>
            </View>
            <TouchableOpacity
                style={styles.resetAllButton}
                onPress={handleResetAll}
            >
                <Text style={styles.buttonText}>Reset All</Text>
            </TouchableOpacity>
        </View>
    );
};

const AttorneyTurn = ({ onStatementSubmit }) => {
    const [attorneyStatement, setAttorneyStatement] = useState('');

    return (
        <View>
            <Text style={styles.turnText}>Attorney's Turn</Text>
            <Text style={styles.label}>Present Your Statement:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your statement..."
                onChangeText={(text) => setAttorneyStatement(text)}
                value={attorneyStatement}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onStatementSubmit(attorneyStatement)}
            >
                <Text style={styles.buttonText}>Submit Statement</Text>
            </TouchableOpacity>
        </View>
    );
};

const WitnessTurn = ({ onTestimonySubmit }) => {
    const [witnessTestimony, setWitnessTestimony] = useState('');

    return (
        <View>
            <Text style={styles.turnText}>Witness's Turn</Text>
            <Text style={styles.label}>Present Your Testimony:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your testimony..."
                onChangeText={(text) => setWitnessTestimony(text)}
                value={witnessTestimony}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onTestimonySubmit(witnessTestimony)}
            >
                <Text style={styles.buttonText}>Submit Testimony</Text>
            </TouchableOpacity>
        </View>
    );
};

const JudgeTurn = ({ onDecisionSubmit }) => {
    const [judgeDecision, setJudgeDecision] = useState('');

    return (
        <View>
            <Text style={styles.turnText}>Judge's Turn</Text>
            <Text style={styles.label}>Make Your Decision:</Text>
            <TextInput
                style={styles.input}
                placeholder="Type your decision..."
                onChangeText={(text) => setJudgeDecision(text)}
                value={judgeDecision}
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => onDecisionSubmit(judgeDecision)}
            >
                <Text style={styles.buttonText}>Submit Decision</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    turnText: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    label: {
        fontSize: 16,
        marginBottom: 5,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        padding: 10,
        marginBottom: 10,
        width: 250,
    },
    button: {
        backgroundColor: '#3498db',
        padding: 10,
        borderRadius: 8,
        width: 150,
        alignItems: 'center',
    },
    resetAllButton: {
        backgroundColor: '#e74c3c',
        padding: 10,
        borderRadius: 8,
        width: 200,
        marginTop: 20,
        alignItems: 'center',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
    },
    resultsContainer: {
        marginTop: 20,
    },
    resultsText: {
        fontSize: 16,
        marginBottom: 10,
    },
});

export default AdventureScreen;
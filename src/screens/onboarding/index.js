import React from 'react';
import { Image, View, Text, Button, StyleSheet, TouchableOpacity} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';
import styles from './style';

const OnboardingScreen = ({navigation}) => {
    return (
        <Onboarding
        nextLabel={"Avançar"}
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.replace("Login")}
        pages={[
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-1.png')} />,
            title:
                <View 
                style={styles.onboardingTitleView}>
                    <Text 
                    style={styles.onboardingTitle}>
                        Aprenda a qualquer hora e em qualquer lugar
                    </Text>
                </View>,
            subtitle: 
                    <View
                    style={styles.onboardingBodyTextView}>
                        <Text style={styles.onboardingBodyText}>
                            Tenha em suas mãos perguntas sobre os mais variados assuntos e aprenda errando!
                        </Text>
                    </View>
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-2.png')} />,
            title:
                <View 
                style={styles.onboardingTitleView}>
                    <Text 
                    style={styles.onboardingTitle}>
                        Diversos assuntos para você
                    </Text>
                </View>,
            subtitle: 
                    <View
                    style={styles.onboardingBodyTextView}>
                        <Text style={styles.onboardingBodyText}>
                        São vários quizes diferentes para você. Escolha um e se aventure!
                        </Text>
                    </View>
          },
          {
            backgroundColor: '#fff',
            image: <Image source={require('../../../assets/onboarding-3.png')} />,
            title:
                <View 
                style={styles.onboardingTitleView}>
                    <Text 
                    style={styles.onboardingTitle}>
                        Melhore suas habilidades
                    </Text>
                </View>,
            subtitle: 
                    <View
                    style={styles.onboardingBodyTextView}>
                        <Text style={styles.onboardingBodyText}>
                        Memorize os conteúdos do aplicativo e melhore suas habilidades!
                        </Text>
                    </View>
          },
        ]}
        />
)}

export default OnboardingScreen
import React, { useState } from 'react';
import { TextInput, Keyboard, View } from 'react-native';
import { Wrapper, Container, Header, SearchBox, Button } from './styles';
import {MaterialCommunityIcons, Feather, EvilIcons, AntDesign } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PayMain from '../../components/PayMain';
import PayLocals from '../../components/PayLocals';
import PayStore from '../../components/PayStore';

const Tab = createMaterialTopTabNavigator();

export default function Pay(){

    const [showSearchButton, setShowSearchButton] = useState(true);
    const [inputText, setInputText] = useState("");

    function handleCleanText(){
        setInputText("");
    }

    function handleReset() {
        setShowSearchButton(true);
        setInputText("");
        Keyboard.dismiss()
    }

    return (
        <Wrapper>
            <Container keyboardShouldPersistTaps="handled">
                <Header>
                    <Button>
                        { !showSearchButton 
                            ? <AntDesign name="arrowleft" size={25} color="#fff" onPress={handleReset} />
                            : <MaterialCommunityIcons name="qrcode-scan" size={30} color="#10c86e" />
                        }
                    </Button>

                    <SearchBox>  

                        { showSearchButton
                            ?   <Button>
                                    <EvilIcons name="search" size={25} color="#fff" />
                                </Button>
                            : null
                        }
                     
                        <TextInput
                            placeholderTextColor="#fff"
                            style={{color: "#fff"}}
                            placeholder="Quem você quer pagar?"
                            underlineColorAndroid="transparent"
                            onChangeText={text => setInputText(text)}
                            onFocus={() => setShowSearchButton(false)}
                            value={inputText}
                        />

                        <Button>
                            { inputText.length > 0
                                ? <Feather name="x" size={30} color="#fff" onPress={handleCleanText} />        
                                : null
                            }
                        </Button>
                        
                    </SearchBox>

                </Header>
                <NavigationContainer independent={true}>
                    <Tab.Navigator 
                        tabBarOptions={{
                            labelStyle: { fontSize: 12, color: '#fff' },
                            style: { backgroundColor: '#000', flex: 1},
                            indicatorStyle: {
                                backgroundColor: '#10c86e',
                            },
                        }}>

                        <Tab.Screen name="Principais" component={PayMain} />
                        <Tab.Screen name="Locais" component={PayLocals} />
                        <Tab.Screen name="Store" component={PayStore} />
                        
                    </Tab.Navigator>
                </NavigationContainer>
          </Container>
        </Wrapper>
    );
}
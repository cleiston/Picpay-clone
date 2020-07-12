import styled from 'styled-components/native';
import {MaterialCommunityIcons } from '@expo/vector-icons';


export const Wrapper = styled.View`
    background: #000;
    flex: 1;
`;

export const Container = styled.ScrollView`    
`;

export const Header = styled.View`
    height: 50px;
    padding: 0 15px;
    margin: 15px 0;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;

export const SearchBox = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
    margin: 0 20px;
    border-radius: 20px;
    background: #1d1d1d;
    flex: 1;
`;

export const Input = styled.TextInput`
    color: #fff;
`;

export const Button = styled.TouchableOpacity``;
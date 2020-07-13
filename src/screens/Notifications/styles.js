import styled from 'styled-components/native';

export const Wrapper = styled.View`
    background-color: #000;
    flex: 1;
`;

export const Container = styled.View`
    padding-bottom: 50px;
`;

export const Header = styled.View`
    background-color: #191919;
    flex-direction: row;
    justify-content: space-between;
    padding: 20px;
`;

export const HeaderTitle = styled.Text`
    color: #fff;
    font-weight: bold;
    font-size: 16px;
`;

export const ConfigButton = styled.TouchableOpacity`
`;

export const TextButton = styled.Text`
    font-size: 14px;
    color: #0db060;
`;

export const Messages = styled.ScrollView`
`;

export const Message = styled.View.attrs({
    borderBottomColor: '#888',
    borderBottomWidth: 0.5,    
})`
    padding: 20px;
`;

export const ClickMessage = styled.TouchableOpacity`
    
`;

export const MessageContent = styled.Text`
    color: #fff;
    margin-bottom: 5px;
`;

export const MessageDate = styled.Text`
    color: #888;
`;
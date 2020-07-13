import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    background-color: #000;
`;

export const Container = styled.ScrollView`
  
`;

export const Header = styled.View`
    color: #fff;
    height: 360px;
    background: #333;
    padding: 10px 20px;
`;

export const HeaderHelp = styled.Text`
    color: #00ab4b;
    flex: 1;
    text-align: right;
    font-weight: bold;
    font-size: 20px;
`;

export const HeaderUserInfo = styled.View`
    align-items: center;
`;

export const HeaderMyAccount = styled.Text`
    color: #fff;
    font-size: 14px;
    padding-top: 10px;
`;

export const Username = styled.Text`
    color: #fff;
    font-size: 25px;
`;

export const Fullname = styled.Text`
    color: #fff;
    font-size: 18px;
`;

export const ViewProfile = styled.TouchableOpacity`
    flex-direction: row;
    align-items: center;
`;

export const ViewProfileText = styled.Text`
    color: #00ab4b;
    font-size: 16px;
    margin: 10px 2px 10px;
`;

export const Img = styled.Image`
    width: 140px;
    height: 140px;
    margin-bottom: 20px;
`;

export const Section = styled.View`

`;

export const Item = styled.View.attrs({
    borderBottomColor: '#888',
    borderBottomWidth: 0.5,
})`
    padding: 20px;
`;

export const ClickableItem = styled.TouchableOpacity``;

export const ItemTitle = styled.Text`
    color: #fff;
    font-size: 16px;
`;

export const ItemDescription = styled.Text`
    color: #999;
    font-size: 14px;
`;
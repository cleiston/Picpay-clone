import styled from 'styled-components/native';

export const Wrapper = styled.View`
    flex: 1;
    padding: 10px;
    background-color: #000;
`;

export const Container = styled.ScrollView`

`;

export const Section = styled.View`

`;

export const Title = styled.Text`
    font-weight: bold;
    font-size: 16px;
    padding: 0 0 10px 0;
    color: #fff;
`;

export const Items = styled.View.attrs({
        borderBottomColor: '#888',
        borderBottomWidth: 0.5,
        marginBottom: 30,
        paddingBottom: 20
    })`
    margin-bottom: 20px;
`;

export const Item = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  margin: 5px;
`;

export const Img = styled.Image`

`;

export const ItemContent = styled.View`
    padding: 10px 20px;
`;

export const ItemTitle = styled.Text`
    font-weight: bold;
    color: #fff;
`;

export const ItemDescription = styled.Text`
    color: #777;
`;

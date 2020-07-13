import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { 
    Wrapper, 
    Container,
    Header,
    HeaderHelp,
    HeaderUserInfo,
    HeaderMyAccount,
    Username,
    Fullname,
    ViewProfile,
    ViewProfileText,
    Img,
    Section,
    Item,
    ClickableItem,
    ItemTitle,
    ItemDescription
} from './styles';

import userImg from '../../images/user.png';

const items = [
    {
        title: 'Meu PicPay',
        description: '@cleiston'
    },
    {
        title: 'Meu número',
        description: '(**)****-9332'
    },
    {
        title: 'Meu E-mail',
        description: 'c*******s@g****.com'
    },
    {
        title: 'Dados pessoais',
        description: 'Nome, CPF e data de nascimento'
    },
    {
        title: 'Conta Bancária',
        description: 'Taxas e Limites'
    },
    {
        title: 'Meus endereços',
    },
    {
        title: 'Meus favoritos',
    },
    {
        title: 'Validar identidade',
        description: 'Não verificado'
    }
];

export default function Settings() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderHelp>Ajuda</HeaderHelp>
                    <HeaderUserInfo>
                        <Img source={userImg} />
                        <Username>@cleiston</Username>
                        <Fullname>Cleiston Rodrigues</Fullname>
                        <ViewProfile>
                            <ViewProfileText>Ver meu perfil</ViewProfileText> 
                            <Ionicons name="ios-arrow-forward" size={24} color="#00ab4b" style={{padding: 5}} />
                        </ViewProfile>
                    </HeaderUserInfo>
                    <HeaderMyAccount>
                        Minha Conta
                    </HeaderMyAccount>
                </Header>
                <Section>
                    {items.map((item, index) => (
                        <Item key={String(index)}>
                            <ClickableItem>
                                <ItemTitle>
                                    {item.title}
                                </ItemTitle>
                                <ItemDescription>
                                    {item.description}
                                </ItemDescription>
                            </ClickableItem>
                    </Item>
                    ))}                 
                </Section>
            </Container>
        </Wrapper>
    );
}
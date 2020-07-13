import React from 'react';

import {
    Wrapper,
    Container, 
    Section, 
    Title, 
    Items, 
    Item,
    Img, 
    ItemContent, 
    ItemTitle, 
    ItemDescription 
} from './styles';

import maquininha from '../../images/11.png';
import recarga from '../../images/01.png';
import conta from '../../images/06.png';
import cobrar from '../../images/07.png';

const items = [
    {
        title: 'Pagar nas Maquininhas',
        description: 'Pague com o PicPay em máquinas Cielo escaneando o QR code.',
        img: maquininha
    },
    {
        title: 'Pagar Conta',
        description: 'Pague sua conta de luz, água, boletos bancários etc.',
        img: conta
    },
    {
        title: 'Cobrar',
        description: 'Cobre um amigo.',
        img: cobrar
    },
    {
        title: 'Recarga de Celular',
        description: 'Vivo, Claro, Tim, Oi, Nextel, Algar, Sercomtel, Correios.',
        img: recarga
    }
];

export default function PayMain() {
    return (
        <Wrapper>
            <Container>
                <Section>
                    <Title>Serviços</Title>
                    <Items>
                        {items.map((item, index) => (
                            <Item key={String(index)}>
                            <Img source={item.img} />
                            <ItemContent>
                                <ItemTitle>{item.title}</ItemTitle>
                                <ItemDescription>
                                    {item.description}
                                </ItemDescription>
                            </ItemContent>
                        </Item>
                        ))}                        
                    </Items>
                </Section>
                <Section>
                    <Title>
                        Contatos
                    </Title>

                </Section>
            </Container>
        </Wrapper>
    );
}
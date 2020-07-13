import React from 'react';

import { 
    Wrapper, 
    Container,
    Header,
    HeaderTitle,
    ConfigButton,
    TextButton,
    Messages,
    Message,
    MessageContent,
    ClickMessage,
    MessageDate
} from './styles';

const messages = Array(10)
    .fill('Você ganhou R$ 10,00 de volta na sua carteira PicPay. Aproveite!')

export default function Notifications() {
    return (
        <Wrapper>
            <Container>
                <Header>
                    <HeaderTitle>
                        Notificações
                    </HeaderTitle>
                    <ConfigButton>
                        <TextButton>Configurar</TextButton>
                    </ConfigButton>
                </Header>
                <Messages>
                    {messages.map((message, index) => (
                        <Message key={String(index)}>
                            <ClickMessage>
                                <MessageContent>
                                    { message }
                                </MessageContent>
                                <MessageDate>
                                    {
                                        (new Date()).toLocaleDateString()
                                    }
                                </MessageDate>
                            </ClickMessage>
                        </Message>
                    ))}                  
                </Messages>
            </Container>
        </Wrapper>
    );
}
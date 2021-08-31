import React from 'react';
import useContent from '../../../hooks/useContent';
import { ButtonWrapper, DescriptionMain, FinancingText, SecondaryBackgroundWrapper } from './elements';
import { PrimaryButton } from '../../../common/components';
import { Container, VerticalSpacer, TitleSecondary } from '../../../common/elements';

const ButtonWidth = 200;

export const AreYouReadySection = () => {
    const { content } = useContent("home")
    const sectionKey = "areyoureadySection";

    return (
        <>
            <Container>
                <VerticalSpacer extraLarge />
                <TitleSecondary>{content([sectionKey, "title"])}</TitleSecondary>
                <VerticalSpacer extraLarge />
                <ButtonWrapper>
                    <PrimaryButton width={ButtonWidth} to="/the-bike">{content(["areyoureadySection", "shopBikeBtn"])}</PrimaryButton>
                </ButtonWrapper>
                <VerticalSpacer extraLarge />
                <DescriptionMain>
                    <FinancingText>
                        {content(["areyoureadySection", "financingContent"])}
                    </FinancingText>
                </DescriptionMain>
            </Container>
        </>
    )
}

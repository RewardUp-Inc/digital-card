import React from 'react';
import {QRCodeSVG} from 'qrcode.react';
import styled from 'styled-components';
import LogoSvg from './LogoSvg';

const WIDTH = 375;
const STRIP_IMAGE_HEIGHT = 98;
const LOGO_HEIGHT = 30;

type stripImageFitTyp = 'cover' | 'contain' | 'fill';

const Box = styled.div`
  box-sizing: border-box;
`;

const Text = styled.span`
  display: inline-block;
  box-sizing: border-box;
  line-height: 1.3;
  font-family: 'Helvetica', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
`;

const Pad = styled(Box)`
  padding: 8px 15px;
`;

const Header = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoCon = styled(Box)`
  flex: 1 1;
  margin-right: 10px;
  display: flex;
  align-items: center;
  min-width: 0;
`;

const LogoImg = styled(Box)`
  line-height: 0;
  margin-right: 15px;
`;

const Logo = styled.img`
  max-width: 160px;
  height: ${LOGO_HEIGHT}px;
`;

const Title = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Row = styled(Box)`
  display: flex;
`;

export const HalfCol = styled(Box)`
  flex: 0 0 50%;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

export const FieldStl = styled(Box) <{ isEnd: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: ${props => (props.isEnd ? 'flex-end' : 'flex-start')};
  text-align: ${props => (props.isEnd ? 'right' : 'left')};
`;

const Card = styled(Box) <{ backgroundColor: string; textColor: string }>`
  width: 100%;
  max-width: ${WIDTH}px;
  background-color: ${props => props.backgroundColor || ''};
  color: ${props => props.textColor};
  box-sizing: border-box;
  border-radius: 5px;
  box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
  0px 7px 10px 1px rgba(0, 0, 0, 0.14), 0px 2px 16px 1px rgba(0, 0, 0, 0.12);
`;

const StripImage = styled(Box) <{ stripImageFit: stripImageFitTyp }>`
  position: relative;
  padding-top: ${(STRIP_IMAGE_HEIGHT / WIDTH) * 100}%;
  margin-bottom: 3px;

  img {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: ${props => props.stripImageFit || 'cover'};
    box-sizing: border-box;
  }
`;

const FieldTitle = styled(Text)`
  font-size: 9px;
  text-transform: uppercase;
  font-weight: 400;
`;

const FieldDesc = styled(Text)`
  font-size: 16px;
  font-weight: 400;
`;

const QrCodeCon = styled(Box)`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
  padding-bottom: 15px;
`;

const QrCodeStl = styled(Box)`
  padding: 12px;
  border-radius: 5px;
  background-color: #fff;
`;

const PassId = styled(Text)`
  display: block;
  margin-top: 2px;
  text-align: center;
  font-size: 14px;
  color: #000;
`;

export interface RewardCardProps {
  displayPoints?: boolean;
  displayAvailableRewards?: string;
  displayGiftBalance?: boolean;
  displayNextLevelAt?: boolean;
  title?: string;
  textColor?: string;
  backgroundColor?: string;
  logoImage?: string;
  points?: number | string;
  stripImage?: string;
  name?: string;
  rewards?: number | string;
  giftBalance?: number | string;
  nextLevel?: number | string;
  cardNumber?: string;
}

interface FieldProps {
  title: string;
  desc?: number | string;
  isEnd?: boolean;
}

const Field = ({title, desc, isEnd = false}: FieldProps) => {
  return (
    <FieldStl isEnd={isEnd}>
      <FieldTitle>{title}</FieldTitle>
      <FieldDesc>{desc}</FieldDesc>
    </FieldStl>
  );
};

const toNum = (n: any) => {
  const num = parseFloat(n);
  return isNaN(num) ? 0 : num;
};

export const RewardCard = ({
                             displayPoints,
                             displayAvailableRewards,
                             displayGiftBalance,
                             displayNextLevelAt,
                             title = '',
                             textColor = '#fff',
                             backgroundColor = '#000',
                             logoImage,
                             points = 0,
                             stripImage,
                             name = '--',
                             rewards = '--',
                             giftBalance = 0,
                             nextLevel = 0,
                             cardNumber = '',
                           }: RewardCardProps) => {
  const gift = toNum(giftBalance);
  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <Pad>
        <Header>
          <LogoCon>
            <LogoImg>
              {logoImage ? (
                <Logo src={logoImage}/>
              ) : (
                <LogoSvg height={LOGO_HEIGHT} fill={textColor}/>
              )}
            </LogoImg>
            <Title>{title}</Title>
          </LogoCon>
          {displayPoints && (
            <Field isEnd title="Points" desc={`${toNum(points)} pts`}/>
          )}
        </Header>
      </Pad>
      <StripImage stripImageFit='cover'>
        {!!stripImage && <img src={stripImage} alt=""/>}
      </StripImage>
      <Pad>
        <Row>
          <HalfCol>
            <Field title="Name" desc={name}/>
          </HalfCol>
          <HalfCol>
            {displayAvailableRewards && (
              <Field isEnd title='Available Rewards' desc={rewards}/>
            )}
          </HalfCol>
        </Row>
        <Row>
          <HalfCol>
            {displayGiftBalance && (
              <Field
                title="Gift Balance"
                desc={gift > 0 ? `$${gift.toFixed(2)}` : '--'}
              />
            )}
          </HalfCol>
          <HalfCol>
            {displayNextLevelAt && (
              <Field
                isEnd
                title="Next Level At"
                desc={toNum(nextLevel) > 0 ? `${nextLevel} pts` : '--'}
              />
            )}
          </HalfCol>
        </Row>
        <QrCodeCon>
          <QrCodeStl>
            <QRCodeSVG
              level="Q"
              bgColor='white'
              size={100}
              value={cardNumber}
              fgColor='black'
              includeMargin={false}/>
            <PassId>{cardNumber}</PassId>
          </QrCodeStl>
        </QrCodeCon>
      </Pad>
    </Card>
  );
};

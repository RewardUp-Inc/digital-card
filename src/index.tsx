import {QRCodeSVG} from 'qrcode.react';
import styled from 'styled-components';

// ----------------------------------------------------------------------

const WIDTH = 375;
const STRIP_IMAGE_HEIGHT = 98;
const LOGO_HEIGHT = 30;

type stripImageFitTyp = 'cover' | 'contain' | 'fill';

// ----------------------------------------------------------------------

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

interface FieldStlProps {
  isEnd: boolean;
}

export const FieldStl = styled(Box) <FieldStlProps>`
    display: flex;
    flex-direction: column;
    align-items: ${props => props.isEnd ? 'flex-end' : 'flex-start'};
    text-align: ${props => props.isEnd ? 'right' : 'left'};
`;

interface CardProps {
  backgroundColor: string;
  textColor: string;
}

const Card = styled(Box) <CardProps>`
    width: 100%;
    max-width: ${WIDTH};
    background-color: ${props => props.backgroundColor || ''};
    color: ${props => props.textColor};
    box-sizing: border-box;
    border-radius: 5px;
    box-shadow: 0 4px 5px -2px rgba(0, 0, 0, 0.2),
    0 7px 10px 1px rgba(0, 0, 0, 0.14), 0 2px 16px 1px rgba(0, 0, 0, 0.12);
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

// ----------------------------------------------------------------------

export interface DigitalCardProps {
  icon?: string;
  title?: string;
  displayHeaderField: boolean;
  headerFieldLabel?: string;
  headerFieldValue?: string;
  displayLeftField: boolean;
  leftFieldLabel?: string;
  leftFieldValue?: string;
  displayRightField: boolean;
  rightFieldLabel?: string;
  rightFieldValue?: string;
  backgroundColor: string;
  textColor: string;
  stripImage: string;
  qrCodeLabel: string;
  qrCodeValue: string;
}

interface FieldProps {
  label?: string;
  value?: string;
  isEnd?: boolean;
}

const Field = ({label, value, isEnd = false}: FieldProps) => {
  return (
    <FieldStl isEnd={isEnd}>
      <FieldTitle>{label}</FieldTitle>
      <FieldDesc>{value}</FieldDesc>
    </FieldStl>
  );
};

// ----------------------------------------------------------------------

const RewardSvg = ({fill = '#3b88c3', ...props}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 754.08 909.33" {...props}>
      <g>
        <g>
          <g>
            <g>
              <g>
                <path
                  fill={fill}
                  d="M644,109.94C496.58-37.44,258.45-36.25,111.06,111.13S-37.36,497.19,110,644.54L376.3,909.33,643.13,642.46c147.39-147.39,148.2-385.13.84-532.52ZM377,698C198.76,698,54.23,553.46,54.23,375.18S198.77,52.32,377,52.32,699.85,196.86,699.85,375.18,555.32,698,377,698Z"
                />
                <path
                  fill={fill}
                  d="M359.08,145.57c13.8-11.82,38-7.85,45.83,9,15.86,39.29,31.44,78.71,47.2,118,.27,1.33,1.52,1.79,2.75,1.79,39.44,2.69,78.86,5.9,118.31,8.73,11.3.24,22.52,6.47,27.64,16.74,6.33,11.54,4.2,27.54-6.16,36.08-31.81,26.16-63.32,52.66-95,78.9a10.56,10.56,0,0,0-2.37,2.53c9,39,19,77.85,28.39,116.79,7.1,19.53-9.55,42.57-30.47,41-7.22-.09-13.52-4-19.27-8q-46.65-29.47-93.36-58.93c-2.65-1.63-5.15-3.67-8.13-4.62-35.3,21.24-70,43.46-105.24,64.89a31.08,31.08,0,0,1-32-.41c-10-6-16.18-18.27-13.83-29.87,10.14-41.62,21.55-83.08,31.24-124.78-28.6-24.62-57.63-48.72-86.36-73.16-6.5-5.29-13.57-10.8-16.39-19-6.9-16.5,4-38,22.1-40.58,43-3.64,86.36-5.17,129.28-9.11C318,236.16,332.27,200.41,347,164.83c2.74-7.12,5.88-14.52,12.12-19.26Z"
                />
              </g>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

const GiftSvg = ({fill = '#3b88c3', ...props}) => {
  return (
    <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path fill={fill}
            d="m386.8 156.4c9.3-6.5 17.7-14 26.1-21.4 16.8-16.8 27.9-37.2 31.7-58.6 3.7-23.3-1.9-43.8-15.8-58.6-11.3-11.3-27.1-17.8-43.9-17.8-25.1 0-51.2 12.1-72.6 33.5-33.5 33.5-53.1 80.1-64.2 113.6-7.4-33.5-23.3-78.2-54-108.9-15.8-15.9-37.2-24.2-56.8-24.2-15.8 0-31.7 5.6-42.8 16.8-25.1 25.1-21.4 69.8 7.4 99.6 10.2 10.2 23.3 19.5 35.4 26.1h-108v129.4h32.6v226.1h388.2v-225.3h32.6v-130.3h-95.9zm-49.3-96.8c14-14 31.7-22.3 46.5-22.3 5.6 0 13 0.9 18.6 6.5 13 13 5.6 43.8-15.8 65.2-22.3 22.3-52.1 37.2-78.2 47.5h-25.1c9.3-29 26-69 54-96.9zm-222.5 16.7c0-4.7 0-13 6.5-19.5 5.6-5.6 12.1-6.5 16.8-6.5 11.2 0 22.3 4.7 30.7 14 16.8 16.8 31.7 44.7 41 79.1l0.9 2.8-3.7-0.9c-34.4-9.3-61.4-23.3-79.1-41-7.5-7.5-12.2-17.7-13.1-28zm108 404h-129.4v-210.3h129.4v210.3zm0-226.2h-162v-65.1h162v65.1zm194.5 226.2h-129.4v-210.3h129.4v210.3zm32.6-226.2h-162v-65.1h162v65.1z"/>
    </svg>
  );
};

const StoreCreditSvg = ({fill = '#3b88c3', ...props}) => {
  return (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fill={fill}
        d="M3 9H21M6.2 19H17.8C18.9201 19 19.4802 19 19.908 18.782C20.2843 18.5903 20.5903 18.2843 20.782 17.908C21 17.4802 21 16.9201 21 15.8V8.2C21 7.0799 21 6.51984 20.782 6.09202C20.5903 5.71569 20.2843 5.40973 19.908 5.21799C19.4802 5 18.9201 5 17.8 5H6.2C5.0799 5 4.51984 5 4.09202 5.21799C3.71569 5.40973 3.40973 5.71569 3.21799 6.09202C3 6.51984 3 7.07989 3 8.2V15.8C3 16.9201 3 17.4802 3.21799 17.908C3.40973 18.2843 3.71569 18.5903 4.09202 18.782C4.51984 19 5.07989 19 6.2 19Z"
        stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
};

// ----------------------------------------------------------------------

export const RewardCard = ({
                             icon,
                             title,
                             displayHeaderField,
                             headerFieldLabel,
                             headerFieldValue,
                             displayLeftField,
                             leftFieldLabel,
                             leftFieldValue,
                             displayRightField,
                             rightFieldLabel,
                             rightFieldValue,
                             backgroundColor,
                             textColor,
                             stripImage,
                             qrCodeLabel,
                             qrCodeValue,
                           }: DigitalCardProps) => {
  
  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <Pad>
        <Header>
          <LogoCon>
            <LogoImg>
              {icon ? (
                <Logo src={icon}/>
              ) : (
                <RewardSvg height={LOGO_HEIGHT} fill={textColor}/>
              )}
            </LogoImg>
            <Title>{title}</Title>
          </LogoCon>
          {displayHeaderField && (
            <Field isEnd label={headerFieldLabel} value={headerFieldValue}/>
          )}
        </Header>
      </Pad>
      <StripImage stripImageFit='cover'>
        {!!stripImage && <img src={stripImage} alt={title}/>}
      </StripImage>
      <Pad>
        <Row>
          <HalfCol>
            {displayLeftField && (
              <Field label={leftFieldLabel} value={leftFieldValue}/>
            )}
          </HalfCol>
          <HalfCol>
            {displayRightField && (
              <Field
                label={rightFieldLabel}
                value={rightFieldValue}
                isEnd
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
              value={qrCodeValue}
              fgColor='black'
              includeMargin={false}/>
            <PassId>{qrCodeLabel}</PassId>
          </QrCodeStl>
        </QrCodeCon>
      </Pad>
    </Card>
  );
};

// ----------------------------------------------------------------------

export const GiftCard = ({
                           icon,
                           title,
                           displayHeaderField,
                           headerFieldLabel,
                           headerFieldValue,
                           displayLeftField,
                           leftFieldLabel,
                           leftFieldValue,
                           displayRightField,
                           rightFieldLabel,
                           rightFieldValue,
                           backgroundColor,
                           textColor,
                           stripImage,
                           qrCodeLabel,
                           qrCodeValue,
                         }: DigitalCardProps) => {
  
  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <Pad>
        <Header>
          <LogoCon>
            <LogoImg>
              {icon ? (
                <Logo src={icon}/>
              ) : (
                <GiftSvg height={LOGO_HEIGHT} fill={textColor}/>
              )}
            </LogoImg>
            <Title>{title}</Title>
          </LogoCon>
          {displayHeaderField && (
            <Field isEnd label={headerFieldLabel} value={headerFieldValue}/>
          )}
        </Header>
      </Pad>
      <StripImage stripImageFit='cover'>
        {!!stripImage && <img src={stripImage} alt={title}/>}
      </StripImage>
      <Pad>
        <Row>
          <HalfCol>
            {displayLeftField && (
              <Field label={leftFieldLabel} value={leftFieldValue}/>
            )}
          </HalfCol>
          <HalfCol>
            {displayRightField && (
              <Field
                label={rightFieldLabel}
                value={rightFieldValue}
                isEnd
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
              value={qrCodeValue}
              fgColor='black'
              includeMargin={false}/>
            <PassId>{qrCodeLabel}</PassId>
          </QrCodeStl>
        </QrCodeCon>
      </Pad>
    </Card>
  );
};

// ----------------------------------------------------------------------

export const StoreCreditCard = ({
                           icon,
                           title,
                           displayHeaderField,
                           headerFieldLabel,
                           headerFieldValue,
                           displayLeftField,
                           leftFieldLabel,
                           leftFieldValue,
                           displayRightField,
                           rightFieldLabel,
                           rightFieldValue,
                           backgroundColor,
                           textColor,
                           stripImage,
                           qrCodeLabel,
                           qrCodeValue,
                         }: DigitalCardProps) => {
  
  return (
    <Card backgroundColor={backgroundColor} textColor={textColor}>
      <Pad>
        <Header>
          <LogoCon>
            <LogoImg>
              {icon ? (
                <Logo src={icon}/>
              ) : (
                <StoreCreditSvg height={LOGO_HEIGHT} fill={textColor}/>
              )}
            </LogoImg>
            <Title>{title}</Title>
          </LogoCon>
          {displayHeaderField && (
            <Field isEnd label={headerFieldLabel} value={headerFieldValue}/>
          )}
        </Header>
      </Pad>
      <StripImage stripImageFit='cover'>
        {!!stripImage && <img src={stripImage} alt={title}/>}
      </StripImage>
      <Pad>
        <Row>
          <HalfCol>
            {displayLeftField && (
              <Field label={leftFieldLabel} value={leftFieldValue}/>
            )}
          </HalfCol>
          <HalfCol>
            {displayRightField && (
              <Field
                label={rightFieldLabel}
                value={rightFieldValue}
                isEnd
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
              value={qrCodeValue}
              fgColor='black'
              includeMargin={false}/>
            <PassId>{qrCodeLabel}</PassId>
          </QrCodeStl>
        </QrCodeCon>
      </Pad>
    </Card>
  );
};

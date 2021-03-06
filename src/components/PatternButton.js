import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const PatternButton = ({
  patternPosition,
  onClickSetPattern,
  onClickSelectSample,
  sampleName,
  lightState,
  isCurrentPattern
}) => (
  <PButton>
    <PressButton lightState={lightState} onClick={() => onClickSetPattern(patternPosition)} />
    <PressButtonLabel
      isCurrentPattern={isCurrentPattern}
      onClick={() => onClickSelectSample(patternPosition)}
    >
      {sampleName}
    </PressButtonLabel>
  </PButton>
);

PatternButton.propTypes = {
  onClickSetPattern: PropTypes.func,
  onClickSelectSample: PropTypes.func,
  sampleName: PropTypes.string
};

const PressButtonLabel = styled.div`
  display: block;
  border-radius: 3px;
  border: 1px solid ${({ isCurrentPattern }) => (isCurrentPattern === true ? '#d5bd2a' : '#777')};
  margin-top: 12px;
  text-align: center;
  font-size: 9px;
  padding: 2px;
  cursor: pointer;
  color: ${({ isCurrentPattern }) => (isCurrentPattern === true ? '#000' : '#CCC')};
  background: ${({ isCurrentPattern }) => (isCurrentPattern === true ? '#d5bd2a' : 'transparent')};

  &:hover {
    color: #000;
    background: #f8e50f;
    border-color: #f8e50f;
  }
`;

const PressButton = styled.div`
  height: 50px;
  width: 50px;
  cursor: pointer;
  border-radius: 3px;
  background: ${({ lightState }) =>
    lightState === 0
      ? '#383633'
      : lightState === 1
        ? '#FFFFFF'
        : lightState === 2 ? '#d5bd2a' : lightState === 3 ? '#fff59f' : ''};

  box-shadow: ${({ lightState }) =>
    lightState === 0
      ? ''
      : lightState === 1
        ? '0px 0px 5px 0px #FFF'
        : lightState === 2
          ? '0px 0px 5px 0px #d5bd2a'
          : lightState === 3 ? '0px 0px 5px 0px #d5bd2a' : ''};

  border: 1px solid rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 1;
    background: #eff3fd;
    box-shadow: 0px 0px 10px 0px rgba(239, 243, 253, 0.7);
    position: relative;
    z-index: 2;
  }
`;

const PButton = styled.div`
  display: block;
  margin: 8px;
  position: relative;
  flex-grow: 1;

  &:nth-child(8n+4)::after {
    content: " ";
    color: #fff;
    display: block;
    position: absolute;
    right: -7px;
    top: 10px;
    height: 28px; 
    border-right: 1px solid rgba(255,255,255,0.2);
  }
`;

export default PatternButton;

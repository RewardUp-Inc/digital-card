# digital-card
React component for RewardUp digital card preview

## Table of Contents
- [Installation](#installation)
- [Example](#example)

## Installation
```shell
npm i @rewardup-inc/digital-card
```

## Example
```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { RewardCard } from '@rewardup-inc/digital-card';

function App() {
  return (
    <RewardCard
      displayPoints={true} // boolean
      displayAvailableRewards={true} // boolean
      title="RewardUp" // string - business title
      textColor="#fff" // string - hex color code
      backgroundColor="#000" // string - hex color code
      points={100} // number | string - points balance
      stripImage="strip-image-url.png" // string - strip image url
      name="Gladwin" // string - customer name
      rewards={2} // number | string - available rewards count
      cardNumber="12345678" // string - customer reward card number
    />
  );
}

ReactDOM.render(<App />, appElement);
```
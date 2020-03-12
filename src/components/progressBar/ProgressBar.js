import React from 'react';

export default function ProgressBar(props) {
  const { mineral, count } = props;

  return <p>{`${mineral}: ${count}`}</p>;
}

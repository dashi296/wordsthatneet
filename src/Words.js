import React from 'react';

const Words = ({words}) => <div className="words" dangerouslySetInnerHTML={{__html: words}}></div>

export default Words;
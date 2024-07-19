import React, { useEffect } from 'react';

//  custom style
import './googletranslate.css'

const GoogleTranslate = () => {
  useEffect(() => {
    const addTranslateScript = () => {
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.async = true;
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      document.body.appendChild(script);
    };

    addTranslateScript();
  }, []);

  return (
    <div id="google_translate_element"></div>
  );
};

export default GoogleTranslate;

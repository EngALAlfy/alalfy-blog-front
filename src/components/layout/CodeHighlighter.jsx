'use client';

import { useEffect } from 'react';
import hljs from "highlight.js";
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import bash from 'highlight.js/lib/languages/bash';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('bash', bash);

export default function CodeHighlighter() {
    useEffect(() => {
      hljs.initHighlighting();
    }, []);
  
  return null;
}
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // or any other style you prefer
import { LanguageContext } from "../contexts/LanguageContext";

function MarkdownViewer({ chapters }) {
  const { chapterId } = useParams();
  const [content, setContent] = useState("Loading...");
  const { language } = useContext(LanguageContext);

  useEffect(() => {
    const fetchMarkdown = async () => {
      const chapter = chapters.find((ch) => ch.id === chapterId);
      if (!chapter) {
        setContent("Chapter not found");
        return;
      }

      try {
        const response = await fetch(`/markdown/${chapter.file[language]}`);
        if (!response.ok) throw new Error("Failed to load the Markdown file");
        const text = await response.text();

        // Configure marked with highlight.js
        marked.setOptions({
          highlight: function (code, lang) {
            const language = hljs.getLanguage(lang) ? lang : "plaintext";
            return hljs.highlight(code, { language }).value;
          },
          langPrefix: "hljs language-",
        });

        const parsed = marked(text);
        setContent(parsed);
      } catch (error) {
        setContent(`Error: ${error.message}`);
      }
    };

    fetchMarkdown();
  }, [chapterId, chapters, language]);

  useEffect(() => {
    // Re-run highlight.js on the rendered content
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  }, [content]);

  return (
    <div
      className='markdown-content'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default MarkdownViewer;

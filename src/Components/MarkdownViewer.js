import React, { useEffect, useState, useContext, useRef } from "react";
import { useParams } from "react-router-dom";
import { marked } from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css"; // or your preferred style
import { LanguageContext } from "../contexts/LanguageContext";

function MarkdownViewer({ courses }) {
  const { courseId, chapterId } = useParams();
  const [content, setContent] = useState("Loading...");
  const { language } = useContext(LanguageContext);
  const contentRef = useRef(null);

  useEffect(() => {
    const fetchMarkdown = async () => {
      if (!courseId || !chapterId) {
        setContent("Course or chapter not specified");
        return;
      }

      const course = courses[courseId];
      if (!course) {
        setContent("Course not found");
        return;
      }

      const chapter = course.chapters.find((ch) => ch.id === chapterId);
      if (!chapter) {
        setContent("Chapter not found");
        return;
      }

      try {
        const response = await fetch(`/markdown/${chapter.file[language]}`);
        if (!response.ok) throw new Error("Failed to load the Markdown file");
        const text = await response.text();

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
        console.error("Error fetching markdown:", error);
        setContent(`Error: ${error.message}`);
      }
    };

    fetchMarkdown();
  }, [courseId, chapterId, courses, language]);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.querySelectorAll("pre code").forEach((block) => {
        hljs.highlightBlock(block);
      });
    }
  }, [content]);

  return (
    <div
      ref={contentRef}
      className='markdown-content'
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
}

export default MarkdownViewer;

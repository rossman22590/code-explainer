import React, { useState } from 'react';
import Editor from "@monaco-editor/react";
import draculaTheme from "../constants/DraculaTheme";

interface Props {
    language?: string;
    code: string;
    setCode: (code: string) => void;
}

const SimpleMonacoEditor = ({ language = "javascript", code, setCode }: Props) => {

    function setEditorTheme(monaco: any) {
        monaco.editor.defineTheme('dracula', draculaTheme);
    }

    function handleEditorChange(value: string | undefined) {
        setCode(value || '');
    }

    return (
        <div style={{
            maxWidth: "658px",
            borderRadius: '1%',
            overflow: "hidden"
        }}>
            <Editor
                height="658px"
                defaultLanguage={language}
                defaultValue={code}
                beforeMount={setEditorTheme}
                theme="dracula"
                onChange={handleEditorChange}
            />
        </div>
    );
};

export default SimpleMonacoEditor;
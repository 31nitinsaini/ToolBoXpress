import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HtmlFormatter from '../Pages/CodingTool/HtmlFormatter'
import CodeEditor from '../Pages/CodingTool/CodeEditor'
import CodeSnippetGenerator from '../Pages/CodingTool/CodeSnippetGenrator'
import JsonFormatter from '../Pages/CodingTool/JsonFormatter'
import SqlEditor from '../Pages/CodingTool/SqlEditor'
import MarkdownEditor from '../Pages/CodingTool/MarkdownEditor'
import JsMinifier from '../Pages/CodingTool/JsMinifier'
import CssMinifier from '../Pages/CodingTool/CssMinifier'
import PlantUmlTool from '../Pages/CodingTool/PlantUmlTool'

const CodeToolRoutes = () => {
  return (
    <Routes>
        <Route path='html-formatter' element={<HtmlFormatter/>}/>
        <Route path='code-editor' element={<CodeEditor/>}/>
        <Route path='code-snippet' element={<CodeSnippetGenerator/>}/>
        <Route path='json-formatter' element={<JsonFormatter/>}/>
        <Route path='sql-editor' element={<SqlEditor/>}/>
        <Route path='markdown-editor' element={<MarkdownEditor/>}/>
        <Route path='js-minifier' element={<JsMinifier/>}/>
      <Route path='css-minifier' element={<CssMinifier/>}/>
      <Route path='plant-uml' element={<PlantUmlTool/>}/>
    </Routes>
  )
}

export default CodeToolRoutes
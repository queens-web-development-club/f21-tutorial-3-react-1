import React from "react";

function CodeEditor(){
    return(
        <div className="code-editor">
            <div className="code-editor-files">
            <ul>
                <li>node_modules</li>
                <li>public</li>
                <li>
                src
                <ul>
                    <li>App.js</li>
                    <li>index.js</li>
                    <li>App.css</li>
                </ul>
                </li>
            </ul>
            </div>
            <div>
            <div className="code-editor-tabs"> 
                <div>App.js</div>
                <div>App.css</div>
            </div>
            <p>
                import React from react;<br/>
                function App()<br/>
                return ( <br/>

                );
            </p>
            </div>
        </div>
    )
}

export default CodeEditor;
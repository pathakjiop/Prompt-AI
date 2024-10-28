import React, { useState } from 'react';

export default function PromptGenerator() {
    const [generatedPrompt, setGeneratedPrompt] = useState(null);

    async function fetchData() {
        try {
            const response = await fetch("http://localhost:8000/api/generate-prompt/", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    role: document.getElementById("role").value,
                    context: document.getElementById("context").value,
                    action: document.getElementById("action").value,
                    instructions: document.getElementById("instructions").value,
                }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.error("Backend validation errors:", errorData);
                throw new Error(`Bad Request: ${JSON.stringify(errorData)}`);
            }

            const data = await response.json();
            setGeneratedPrompt(data.generated_prompt);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

    function handleClick() {
        fetchData();
    }

    return (
       <div className="absolute top-0 z-[-2] h-screen w-screen bg-white bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
    <div className="card m-20 w-auto h-auto p-6 bg-base-100 shadow-xl flex flex-col justify-start"> 
        <h1 className="text-3xl font-bold ml-4">Prompt Generator</h1>  
        <div className="card-body justify-start ml-4">
            <div className="w-full">
                <label className="form-label w-full text-stone-600">
                    Role
                    <input type="text" className="form-control ml-3" id="role" placeholder="e.g., Software Engineer" required />
                </label>
            </div>
            <div className="w-full mt-4">
                <label className="form-label w-full text-stone-600">
                    Context
                    <input type="text" className="form-control ml-3" id="context" placeholder="e.g., working on a new project" required />
                </label>
            </div>
            <div className="w-full mt-4">
                <label className="form-label w-full text-stone-600">
                    Action
                    <input type="text" className="form-control ml-3" id="action" placeholder="e.g., design a scalable architecture" required />
                </label>
            </div>
            <div className="w-full mt-4">
                <label className="form-label w-full text-stone-600">
                    Instructions
                    <input type="text" className="form-control ml-3" id="instructions" placeholder="e.g., Consider microservices architecture and cloud deployment" required />
                </label>
            </div>
            <div className="d-grid gap-2 mt-4">
                <button onClick={handleClick} className="btn btn-dark" type="button">Generate Prompt...</button>
            </div>
            {generatedPrompt && (
                <div className="mt-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-4">Generated Prompt:</h2>
                    <p>{generatedPrompt}</p>
                </div>
            )}
        </div>
    </div>
</div>

    );
}

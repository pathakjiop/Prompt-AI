import React, { useState } from 'react';

export default function PromptGenerator() {
    const [prompts, setPrompts] = useState({
        original: null,
        enhanced: null
    });
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    async function handleSubmit() {
        setLoading(true);
        setError(null);
        
        try {
            const response = await fetch("http://localhost:3000/api/generate-prompt", {
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

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong');
            }

            setPrompts({
                original: data.data.original_prompt,
                enhanced: data.data.enhanced_prompt
            });
        } catch (error) {
            setError(error.message);
            console.error("Error:", error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_30%,#000_100%)]">
        <div className="max-w-4xl mx-auto p-6">
            <div className="bg-white rounded-lg shadow-lg p-6">
                <h1 className="text-3xl font-bold mb-8 text-gray-800">AI Prompt Generator</h1>
                
                <div className="space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                            Role
                        </label>
                        <input
                            type="text"
                            id="role"
                            className="w-full p-2 border rounded-md"
                            placeholder="e.g., Software Engineer"
                            required
                            />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="context" className="block text-sm font-medium text-gray-700">
                            Context
                        </label>
                        <input
                            type="text"
                            id="context"
                            className="w-full p-2 border rounded-md"
                            placeholder="e.g., working on a new project"
                            required
                            />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="action" className="block text-sm font-medium text-gray-700">
                            Action
                        </label>
                        <input
                            type="text"
                            id="action"
                            className="w-full p-2 border rounded-md"
                            placeholder="e.g., design a scalable architecture"
                            required
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="instructions" className="block text-sm font-medium text-gray-700">
                            Instructions
                        </label>
                        <input
                            type="text"
                            id="instructions"
                            className="w-full p-2 border rounded-md"
                            placeholder="e.g., Consider microservices architecture and cloud deployment"
                            required
                            />
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={loading}
                        className="w-full bg-black text-white py-2 px-4 rounded-md transition duration-200"
                    >
                        {loading ? 'Generating...' : 'Generate Prompt'}
                    </button>
                </div>

                {error && (
                    <div className="mt-6 p-4 bg-red-50 border border-red-200 rounded-md">
                        <p className="text-red-600">{error}</p>
                    </div>
                )}

                {prompts.original && (
                    <div className="mt-8 space-y-6">
                        <div className="p-4 bg-gray-50 border border-gray-200 rounded-md">
                            <h2 className="text-xl font-semibold mb-3 text-gray-800">Base Prompt:</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">{prompts.original}</p>
                        </div>

                        <div className="p-4 bg-blue-50 border border-blue-200 rounded-md">
                            <h2 className="text-xl font-semibold mb-3 text-gray-800">Enhanced Prompt:</h2>
                            <p className="text-gray-700 whitespace-pre-wrap">{prompts.enhanced}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
</div>
    );
}
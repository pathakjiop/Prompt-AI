export default function PromptGenerator() {
    return (
        <div class="card m-20 w-auto h-auto p-4 bg-base-100 shadow-xl flex justify-start"> 
            <h1 class="text-3xl font-bold ml-4">Prompt Generator</h1>  
            <div class="card-body justify-start ml-8">
                <div className="w-full">
                    <label className="form-label w-full text-stone-600">
                        Role
                    <input
                        type="text"
                        className="form-control "
                        id="role"
                        placeholder="e.g., Software Engineer"
                        required
                    />
                    </label>
                </div>
                <div className="w-full">

                    <label className="form-label w-full text-stone-600">
                        Context
                    <input
                        type="text"
                        className="form-control "
                        id="context"
                        placeholder="e.g., working on a new project"
                        required
                    />
                    </label>
                </div>
                <div className="w-full">

                    <label className="form-label w-full text-stone-600">
                        Action
                    <input
                        type="text"
                        className="form-control "
                        id="action"
                        placeholder="e.g., design a scalable architecture"
                        required
                    />
                    </label>
                </div>
                <div className="w-full">

                    <label className="form-label w-full text-stone-600">
                        Instructions
                    <input
                        type="text"
                        className="form-control "
                        id="instructions"
                        placeholder="e.g., Consider microservices architecture and cloud deployment"
                        required
                    />
                    </label>
                </div>
            </div>
            <div class="d-grid gap-2">
                <button class="btn btn-dark" type="button">Generat Prompt ...</button>  
            </div>
        </div>
    );
}
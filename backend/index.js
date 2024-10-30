// Required dependencies
const express = require('express');
const axios = require('axios');
const cors = require('cors');
const bodyParser = require('body-parser');

// Initialize express
const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Basic validation function
const validateInput = (input) => {
    const requiredFields = ['role', 'context', 'action', 'instructions'];
    const errors = [];
    
    requiredFields.forEach(field => {
        if (!input[field] || input[field].trim() === '') {
            errors.push(`${field} is required`);
        }
    });
    
    return errors;
};

// Prompt template generator
class PromptGenerator {
    static generateBasePrompt(role, context, action, instructions) {
        return `Act as a ${role} with over 20 years of experience in the industry. I am ${context}, and I need your help to ${action}. Please follow these instructions: ${instructions}. Ensure the solution is detailed, efficient, and aligns with industry best practices. Provide explanations for your decisions and actions where applicable.`;
    }

    static generateEnhancementPrompt(basePrompt) {
        return `Act as a prompt engineer with over 30 years of experience and enhance the following prompt: ${basePrompt}  Make it more effective`;
    }
}

// Mistral API service
class MistralService {
    static async enhancePrompt(prompt) {
        try {
            const response = await axios.post('http://127.0.0.1:11434/api/generate', {
                model: "mistral",
                prompt: prompt,
                stream: false
            });
            return response.data.response;
        } catch (error) {
            throw new Error(`Failed to communicate with Mistral API: ${error.message}`);
        }
    }
}

// Main prompt generation route
app.post('/api/generate-prompt', async (req, res) => {
    try {
        // Validate input
        const errors = validateInput(req.body);
        if (errors.length > 0) {
            return res.status(400).json({ 
                status: 'error', 
                errors: errors 
            });
        }

        // Extract parameters
        const { role, context, action, instructions } = req.body;

        // Generate base prompt
        const basePrompt = PromptGenerator.generateBasePrompt(
            role, 
            context, 
            action, 
            instructions
        );

        // Generate enhancement prompt
        const enhancementPrompt = PromptGenerator.generateEnhancementPrompt(basePrompt);

        // Get enhanced prompt from Mistral
        const enhancedPrompt = await MistralService.enhancePrompt(enhancementPrompt);

        // Return response
        return res.json({
            status: 'success',
            data: {
                original_prompt: basePrompt,
                enhanced_prompt: enhancedPrompt
            }
        });

    } catch (error) {
        console.error('Error:', error);
        return res.status(500).json({
            status: 'error',
            message: 'Internal server error',
            error: error.message
        });
    }
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        status: 'error',
        message: 'Something went wrong!',
        error: err.message
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.json({ status: 'healthy' });
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
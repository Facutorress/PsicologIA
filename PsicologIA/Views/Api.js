const openai = require('openai');

// API key
const API_KEY = "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";  // Usa una variable de entorno para la clave de API
openai.apiKey = API_KEY;

// Prompt inicial
const initialPrompt = `
Actúa como un psicólogo profesional, brindando contención y perspectivas para ayudar a superar desafíos y alcanzar metas.
`;

// Mensajes
const messages = [
    {
        "role": "system",
        "content": initialPrompt
    }
];

while (true) {
  // Prompt del usuario
  const userPrompt = prompt("\n Hola soy un experto en la terapia y psicología, mi objetivo es ayudarte o brindarte nuevas perspectivas. ¿De qué te gustaría hablar?");
  
  if (userPrompt.toLowerCase() === 'salir' || userPrompt.toLowerCase() === 'adiós') {
      console.log("Hasta luego. ¡Cuídate!");
      break;
  }

  messages.push({
      "role": "user",
      "content": userPrompt
  });

  try {
      // Petición a OpenAI
      const completion = await openai.Completion.create({
          model: "gpt-3.5-turbo",
          prompt: JSON.stringify(messages),
          max_tokens: 500  // Ajusta según tus necesidades
      });

      // Agregar respuesta del modelo a la conversación
      messages.push({
          "role": "assistant",
          "content": completion.choices[0].message['content']
      });

      console.log(completion.choices[0].message['content']);

  } catch (error) {
      console.error("Hubo un error al comunicarse", error);
  }
}

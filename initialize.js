// api/initialize.js

export default async function handler(req, res) {
  // Run the command to download the spaCy model
  const { exec } = require('child_process');
  exec('python -m spacy download en_core_web_sm', (error, stdout, stderr) => {
    if (error) {
      console.error(`Error: ${error}`);
      res.status(500).json({ error: 'An error occurred while initializing the spaCy model.' });
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.status(200).json({ message: 'Initialization completed successfully.' });
  });
}
